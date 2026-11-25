import React, { useEffect, useRef } from 'react';

/**
 * Content3DCanvas
 * High-performance 3D ambient canvas rendering rotating wireframe polyhedra
 * and an interactive constellation particle network in 3D space with mouse parallax.
 * Strictly uses native canvas 2D/3D math projections - zero heavy external libraries.
 */
export default function Content3DCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let isVisible = true;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // Mouse coordinates for interactive 3D parallax
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouse.targetX = x * 0.8;
      mouse.targetY = y * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.width = canvas.offsetWidth * dpr;
      height = canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(canvas);

    // Pause when not visible in viewport for optimal performance
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(canvas);

    // 3D Polyhedron 1: Octahedron generator
    const createOctahedron = (size) => {
      const vertices = [
        [0, -size, 0],
        [0, size, 0],
        [-size, 0, 0],
        [size, 0, 0],
        [0, 0, -size],
        [0, 0, size]
      ];
      const edges = [
        [0, 2], [0, 3], [0, 4], [0, 5],
        [1, 2], [1, 3], [1, 4], [1, 5],
        [2, 4], [4, 3], [3, 5], [5, 2]
      ];
      return { vertices, edges };
    };

    // 3D Polyhedron 2: Cube generator
    const createCube = (size) => {
      const s = size / 2;
      const vertices = [
        [-s, -s, -s], [s, -s, -s], [s, s, -s], [-s, s, -s],
        [-s, -s, s], [s, -s, s], [s, s, s], [-s, s, s]
      ];
      const edges = [
        [0, 1], [1, 2], [2, 3], [3, 0],
        [4, 5], [5, 6], [6, 7], [7, 4],
        [0, 4], [1, 5], [2, 6], [3, 7]
      ];
      return { vertices, edges };
    };

    const polyhedra = [
      {
        ...createOctahedron(95),
        x: -0.32,
        y: -0.22,
        z: 0,
        rotX: 0.4,
        rotY: 0.6,
        rotZ: 0.2,
        speedX: 0.004,
        speedY: 0.006,
        speedZ: 0.003,
        color: 'rgba(210, 12, 12, 0.45)',
        fillColor: 'rgba(210, 12, 12, 0.03)'
      },
      {
        ...createCube(110),
        x: 0.35,
        y: 0.28,
        z: -20,
        rotX: 0.8,
        rotY: 0.3,
        rotZ: 0.5,
        speedX: -0.005,
        speedY: 0.005,
        speedZ: 0.002,
        color: 'rgba(200, 16, 46, 0.4)',
        fillColor: 'rgba(255, 240, 242, 0.08)'
      },
      {
        ...createOctahedron(65),
        x: 0.38,
        y: -0.32,
        z: 30,
        rotX: 0.2,
        rotY: 1.1,
        rotZ: 0.4,
        speedX: 0.006,
        speedY: -0.004,
        speedZ: 0.003,
        color: 'rgba(165, 9, 9, 0.35)',
        fillColor: 'rgba(210, 12, 12, 0.02)'
      }
    ];

    // 3D Particles
    const particleCount = 42;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 1100,
        y: (Math.random() - 0.5) * 800,
        z: (Math.random() - 0.5) * 500,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1.2,
        baseAlpha: Math.random() * 0.4 + 0.2
      });
    }

    // 3D Projection math
    const project = (x, y, z, cx, cy, fov) => {
      const zoom = fov / (fov + z);
      return {
        x: cx + x * zoom,
        y: cy + y * zoom,
        zoom,
        visible: z > -fov + 10
      };
    };

    // 3D Point Rotation with Parallax
    const rotate3D = (p, rx, ry, rz) => {
      // Rotate Y
      let cos = Math.cos(ry);
      let sin = Math.sin(ry);
      let x1 = p[0] * cos - p[2] * sin;
      let z1 = p[0] * sin + p[2] * cos;

      // Rotate X
      cos = Math.cos(rx);
      sin = Math.sin(rx);
      let y2 = p[1] * cos - z1 * sin;
      let z2 = p[1] * sin + z1 * cos;

      // Rotate Z
      cos = Math.cos(rz);
      sin = Math.sin(rz);
      let x3 = x1 * cos - y2 * sin;
      let y3 = x1 * sin + y2 * cos;

      return [x3, y3, z2];
    };

    // Render loop
    const render = () => {
      if (isVisible) {
        const renderW = canvas.offsetWidth;
        const renderH = canvas.offsetHeight;
        ctx.clearRect(0, 0, renderW, renderH);

        // Smooth mouse lerp for camera parallax
        mouse.x += (mouse.targetX - mouse.x) * 0.05;
        mouse.y += (mouse.targetY - mouse.y) * 0.05;

        const cx = renderW / 2;
        const cy = renderH / 2;
        const fov = 650;

        // 1. Draw 3D Floating Particles & Constellation
        for (let i = 0; i < particles.length; i++) {
          const pt = particles[i];
          pt.x += pt.vx;
          pt.y += pt.vy;
          pt.z += pt.vz;

          // Boundary bounce
          if (pt.x < -600 || pt.x > 600) pt.vx *= -1;
          if (pt.y < -450 || pt.y > 450) pt.vy *= -1;
          if (pt.z < -250 || pt.z > 250) pt.vz *= -1;

          // Parallax offset
          const pRot = rotate3D([pt.x, pt.y, pt.z], mouse.y * 0.35, -mouse.x * 0.35, 0);
          const proj = project(pRot[0], pRot[1], pRot[2], cx, cy, fov);

          if (proj.visible) {
            pt.projX = proj.x;
            pt.projY = proj.y;
            pt.projZoom = proj.zoom;

            ctx.beginPath();
            ctx.arc(proj.x, proj.y, pt.radius * proj.zoom, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(210, 12, 12, ${pt.baseAlpha * proj.zoom})`;
            ctx.fill();
          }
        }

        // Draw connections between nearby 3D particles
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const p1 = particles[i];
            const p2 = particles[j];
            if (!p1.projX || !p2.projX) continue;

            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dz = p1.z - p2.z;
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < 130) {
              const alpha = (1 - dist / 130) * 0.16 * ((p1.projZoom + p2.projZoom) / 2);
              ctx.beginPath();
              ctx.moveTo(p1.projX, p1.projY);
              ctx.lineTo(p2.projX, p2.projY);
              ctx.strokeStyle = `rgba(210, 12, 12, ${alpha})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }

        // 2. Draw 3D Floating Polyhedra
        polyhedra.forEach((poly) => {
          poly.rotX += poly.speedX;
          poly.rotY += poly.speedY;
          poly.rotZ += poly.speedZ;

          const polyCX = cx + poly.x * renderW;
          const polyCY = cy + poly.y * renderH;

          // Rotate vertices
          const projectedVertices = poly.vertices.map((v) => {
            const rotated = rotate3D(
              v,
              poly.rotX + mouse.y * 0.5,
              poly.rotY - mouse.x * 0.5,
              poly.rotZ
            );
            return project(rotated[0], rotated[1], rotated[2] + poly.z, polyCX, polyCY, fov);
          });

          // Draw Edges with depth lighting
          ctx.beginPath();
          poly.edges.forEach(([i1, i2]) => {
            const v1 = projectedVertices[i1];
            const v2 = projectedVertices[i2];
            if (v1.visible && v2.visible) {
              ctx.moveTo(v1.x, v1.y);
              ctx.lineTo(v2.x, v2.y);
            }
          });
          ctx.strokeStyle = poly.color;
          ctx.lineWidth = 1.3;
          ctx.stroke();

          // Draw Vertex joints
          projectedVertices.forEach((pv) => {
            if (pv.visible) {
              ctx.beginPath();
              ctx.arc(pv.x, pv.y, 2.8 * pv.zoom, 0, Math.PI * 2);
              ctx.fillStyle = poly.color;
              ctx.fill();
            }
          });
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="services-3d-canvas" aria-hidden="true" />;
}
