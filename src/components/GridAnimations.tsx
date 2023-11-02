import { useEffect, useState } from "react";

const GridAnimations = () => {
  const [columns, setColumns] = useState(3);
  const [rows, setRows] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setColumns(window.innerWidth / 100);
      setRows(window.innerHeight / 100);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <div className="w-screeen absolute z-10 h-screen bg-foreground"></div>;
};

export default GridAnimations;
