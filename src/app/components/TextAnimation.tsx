"use client"

import React, { useRef } from "react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(SplitText, ScrollTrigger)

export default function TextAnimation({ children, animateOnScroll = true, delay = 0 }) {
  const containerRef = useRef<HTMLElement>(null)
  const elementRef = useRef([])
  const splitRef = useRef([])
  const lines = useRef([])

  useGSAP(() => {
    if (!containerRef.current) return

    splitRef.current = []
    elementRef.current = []
    lines.current = []

    let elements = []
    if (containerRef && containerRef.current.hasAttribute("data-copy-wrapper")) {
      elements = Array.from(containerRef.current.children)
    } else {
      elements = [containerRef.current]
    }

    elements.forEach(e => {
      elementRef.current.push(e)

      const split = SplitText.create(e, {
        type: "lines",
        // mask: "lines",
        linesClass: "line++"
      })

      splitRef.current.push(split)

      const computedStyle = window.getComputedStyle(e)
      const textIndent = computedStyle.textIndent

      if (textIndent && textIndent !== "0px") {
        if (split.lines.length > 0) {
          split.lines[0].style.paddingLeft = textIndent
        }
        e.style.textIndent = "0"
      }

      lines.current.push(...split.lines)
    })

    gsap.set(lines.current, { y: "-50%", autoAlpha: 0 })

    const animationProps = {
      y: "0%",
      duration: 1.2,
      autoAlpha: 1,
      stagger: 0.1,
      ease: "power4.out",
      delay: delay,
    }

    if (animateOnScroll) {
      gsap.to(lines.current, {
        ...animationProps, scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true
        }
      })
    } else {
      gsap.to(lines.current, animationProps)
    }


    return () => {
      splitRef.current.forEach(split => {
        if (split) {
          split.revert()
        }
      })
    }
  },
    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay]
    })

  if (React.Children.count(children) === 1) {
    return React.cloneElement(children, { ref: containerRef })
  }

  return (
    <>
      <div ref={containerRef} data-copy-wrapper="true">
        {children}
      </div>
    </>
  )
}



// "use client"

// import React, { useRef, ReactNode } from "react"
// import gsap from "gsap"
// import { SplitText } from "gsap/SplitText"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { useGSAP } from "@gsap/react"
// gsap.registerPlugin(SplitText, ScrollTrigger)

// type TextAnimationProps = {
//   children: ReactNode,
//   animateOnScroll?: boolean,
//   delay?: number
// }

// export default function TextAnimation({ children, animateOnScroll = true, delay = 0 }: TextAnimationProps) {
//   const containerRef = useRef<HTMLDivElement | null>(null)
//   const elementRef = useRef<HTMLElement[]>([])
//   const splitRef = useRef<SplitText[]>([])
//   const lines = useRef<HTMLElement[]>([])

//   useGSAP(() => {
//     if (!containerRef.current) return

//     splitRef.current = []
//     elementRef.current = []
//     lines.current = []

//     let elements = []
//     if (containerRef && containerRef.current.hasAttribute("data-copy-wrapper")) {
//       elements = Array.from(containerRef.current.children)
//     } else {
//       elements = [containerRef.current]
//     }

//     elements.forEach(e => {
//       if (!(e instanceof HTMLElement)) return

//       elementRef.current.push(e)

//       const split = SplitText.create(e, {
//         type: "lines",
//         // mask: "lines",
//         linesClass: "line++"
//       })

//       splitRef.current.push(split)

//       const computedStyle = window.getComputedStyle(e)
//       const textIndent = computedStyle.textIndent

//       if (textIndent && textIndent !== "0px") {
//         if (split.lines.length > 0) {
//           (split.lines[0] as HTMLElement).style.paddingLeft = textIndent
//         }
//         e.style.textIndent = "0"
//       }

//       lines.current.push(...(split.lines as HTMLElement[]))
//     })

//     gsap.set(lines.current, { y: "-50%", autoAlpha: 0 })

//     const animationProps = {
//       y: "0%",
//       duration: 1.5,
//       autoAlpha: 1,
//       stagger: 0.1,
//       ease: "power4.out",
//       delay: delay,
//     }

//     if (animateOnScroll) {
//       gsap.to(lines.current, {
//         ...animationProps, scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 80%",
//           once: true
//         }
//       })
//     } else {
//       gsap.to(lines.current, animationProps)
//     }


//     return () => {
//       splitRef.current.forEach(split => {
//         if (split) {
//           split.revert()
//         }
//       })
//     }
//   },
//     {
//       scope: containerRef,
//       dependencies: [animateOnScroll, delay]
//     })

//   if (
//     React.Children.count(children) === 1 &&
//     React.isValidElement(children) &&
//     typeof (children as React.ReactElement).type === "string"
//   ) {
//     return React.cloneElement(
//       children as React.ReactElement<React.HTMLAttributes<HTMLElement>>,
//       // @ts-expect-error ref
//       { ref: containerRef }
//     )
//   }

//   return (
//     <div ref={containerRef} data-copy-wrapper="true">
//       {children}
//     </div>
//   )
// }
