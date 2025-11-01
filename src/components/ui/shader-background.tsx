import { useEffect, useRef } from 'react';

const ShaderBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    // Vertex shader
    const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Fragment shader with purple-blue plasma effect
    const fragmentShaderSource = `
      precision highp float;
      uniform float time;
      uniform vec2 resolution;

      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        
        // Create plasma effect
        float v = 0.0;
        v += sin((uv.x + time) * 2.0);
        v += sin((uv.y + time) * 1.5);
        v += sin((uv.x + uv.y + time) * 1.5);
        v += sin((sqrt(uv.x * uv.x + uv.y * uv.y) + time) * 2.0);
        v = v / 4.0;
        
        // Purple to blue color gradient
        vec3 color1 = vec3(0.4, 0.2, 0.8); // Purple
        vec3 color2 = vec3(0.2, 0.4, 0.9); // Blue
        vec3 color3 = vec3(0.1, 0.1, 0.3); // Dark blue
        
        float wave = sin(v * 3.14159) * 0.5 + 0.5;
        vec3 color = mix(color3, mix(color1, color2, wave), wave * 0.8);
        
        // Add grid pattern
        float gridX = sin(uv.x * 20.0 + time * 0.5) * 0.5 + 0.5;
        float gridY = sin(uv.y * 20.0 + time * 0.5) * 0.5 + 0.5;
        float grid = gridX * gridY;
        
        color += vec3(grid * 0.1);
        
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    // Compile shader
    const compileShader = (source: string, type: number) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader) return;

    // Create program
    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    // Set up geometry
    const positions = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
       1,  1,
    ]);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Get uniform locations
    const timeLocation = gl.getUniformLocation(program, 'time');
    const resolutionLocation = gl.getUniformLocation(program, 'resolution');

    // Resize canvas
    const resize = () => {
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;
      
      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, displayWidth, displayHeight);
        gl.uniform2f(resolutionLocation, displayWidth, displayHeight);
      }
    };

    resize();
    window.addEventListener('resize', resize);

    // Animation loop
    let startTime = Date.now();
    const render = () => {
      const time = (Date.now() - startTime) * 0.001;
      gl.uniform1f(timeLocation, time);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      style={{ display: 'block' }}
    />
  );
};

export default ShaderBackground;
