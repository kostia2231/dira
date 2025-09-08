export const fragmentShader = `
  varying vec2 vUv;
  varying float vNoise;
  uniform float time;

  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  void main() {
    // vec3 colorBlue = vec3(0.2333, 0.3961, 0.9216);
    vec3 colorBlue = vec3(0.2333, 0.6061, 0.9216);
    vec3 colorAnotherBlue = vec3(0.4235, 0.6745, 1.0);
    vec3 colorBlueDark = vec3(0.0, 0.0602, 0.7333);
    vec3 colorRedish = vec3(1.0, 0.3608, 0.3608);


    float t = pow(vNoise, 1.5);

    float grain = random(vUv * 50.0 + time * 0.);
    t += (grain - 0.5) * 0.1;

    t = clamp(t, 0.0, 1.0);

    vec3 color = mix(colorBlueDark, colorAnotherBlue, t);
    gl_FragColor = vec4(color, 1.0);
  }
`
