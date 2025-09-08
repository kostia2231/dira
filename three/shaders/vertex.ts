export const vertexShader = `
  varying vec2 vUv;
  varying float vNoise;
  uniform float time;

  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f*f*(3.0-2.0*f);

    return mix(a, b, u.x) +
           (c - a)* u.y * (1.0 - u.x) +
           (d - b) * u.x * u.y;
  }

  void main() {
    vUv = uv;
    float n1 = noise(uv * 2.0 + time * 0.1);
    float n2 = noise(uv * 2.0 - time * 0.2);
    float n = n1 * 0.9 + n2 * 1.0;

    vNoise = n;

    vec3 pos = position + vec3(0.0, 0.0, n * 0.2);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`
