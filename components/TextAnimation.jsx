"use client";

import React, { useRef, useState, ReactNode } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(SplitText, ScrollTrigger);

export default function TextAnimation({
  children,
  animateOnScroll = true,
  delay = 0.2,
}) {
  const containerRef = useRef(null);
  const elementRef = useRef([]);
  const splitRef = useRef([]);
  const lines = useRef([]);
  const rafId = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useGSAP(() => {
    if (!containerRef.current) return;

    let ctx;
    let killed = false;

    const run = async () => {
      await document.fonts.ready;

      ctx = gsap.context(() => {
        if (rafId.current) {
          cancelAnimationFrame(rafId.current);
          rafId.current = null;
        }

        rafId.current = requestAnimationFrame(() => {
          if (killed) return;

          splitRef.current.forEach((split) => split && split.revert());
          splitRef.current = [];
          elementRef.current = [];
          lines.current = [];

          let elements = [];
          if (containerRef.current.hasAttribute("data-copy-wrapper")) {
            elements = Array.from(containerRef.current.children);
          } else {
            elements = [containerRef.current];
          }

          elements.forEach((e) => {
            elementRef.current.push(e);

            const split = SplitText.create(e, {
              type: "lines",
              linesClass: "line",
            });

            splitRef.current.push(split);

            const computedStyle = window.getComputedStyle(e);
            const textIndent = computedStyle.textIndent;

            if (textIndent && textIndent !== "0px") {
              if (split.lines.length > 0) {
                split.lines[0].style.paddingLeft = textIndent;
              }
              e.style.textIndent = "0";
            }

            lines.current.push(...split.lines);
          });

          gsap.set(lines.current, { y: "30%", autoAlpha: 0 });

          setIsReady(true);

          const animationProps = {
            y: "0%",
            duration: 1.2,
            autoAlpha: 1,
            stagger: 0.1,
            ease: "power4.out",
            delay,
          };

          if (animateOnScroll) {
            gsap.to(lines.current, {
              ...animationProps,
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
                once: true,
              },
            });
          } else {
            gsap.to(lines.current, animationProps);
          }
        });
      }, containerRef);
    };

    run();

    return () => {
      killed = true;

      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }

      splitRef.current.forEach((split) => {
        if (split) split.revert();
      });

      if (ctx) ctx.revert();

      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === containerRef.current) {
          trigger.kill();
        }
      });

      splitRef.current = [];
      elementRef.current = [];
      lines.current = [];

      setIsReady(false);
    };
  }, [animateOnScroll, delay, children]);

  const style = {
    opacity: isReady ? 1 : 0,
    visibility: isReady ? "visible" : "hidden",
    transition: "opacity 0.15s",
  };

  if (React.Children.count(children) === 1) {
    return React.cloneElement(children, {
      ref: containerRef,
      style: { ...children.props.style, ...style },
    });
  }

  return (
    <div ref={containerRef} data-copy-wrapper="true" style={style}>
      {children}
    </div>
  );
}
