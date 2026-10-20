// Zero-parallax safe hooks
export function useScrollParallax() {
  return 0;
}

export function useMouseTilt() {
  return {
    tilt: { x: 0, y: 0, glareX: 50, glareY: 50 },
    isHovered: false,
    bind: {}
  };
}
