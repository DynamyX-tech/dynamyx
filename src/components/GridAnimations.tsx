import { useEffect, useState } from "react";

const GridAnimations = () => {
  useEffect(() => {
    // use animate to update background image position css to mouse position
    const animate = () => {
      const grid = document.querySelector(".autogrid") as HTMLElement;
      if (grid) {
        const { x, y } = grid.getBoundingClientRect();
        document.addEventListener("mousemove", (e) => {
          const { clientX, clientY } = e;
          const xDiff = clientX - x;
          const yDiff = clientY - y;
          grid.style.backgroundPosition = `${xDiff / 3}px ${yDiff / 3}px`;
        });
      }
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);
  return (
    <div
      className={`autogrid absolute left-1/2 top-1/2 -z-10 grid aspect-square h-screen w-full -translate-x-1/2 -translate-y-1/2  overflow-hidden opacity-90`}
    >
      {Array.from(Array(810).keys()).map((i) => (
        <div key={i} className="mb-px mr-px bg-background" />
      ))}
    </div>
  );
};

export default GridAnimations;
