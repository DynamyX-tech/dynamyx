import { useEffect, useState } from "react";

const GridAnimations = () => {
  useEffect(() => {
    // use animate to update background image position css to mouse position
    const grid = document.querySelector(".autogrid") as HTMLElement;
    const mouseHandler = (e: MouseEvent) => {
      const { x, y } = grid.getBoundingClientRect();
      const { clientX, clientY } = e;
      const xDiff = clientX - x;
      const yDiff = clientY - y;
      grid.style.backgroundPosition = `${xDiff / 3}px ${yDiff / 3}px`;
    };
    const animate = () => {
      if (grid) {
        document.addEventListener("mousemove", mouseHandler);
      }
      requestAnimationFrame(animate);
    };
    const cleanID = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(cleanID);
      document.removeEventListener("mousemove", mouseHandler);
    };
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
