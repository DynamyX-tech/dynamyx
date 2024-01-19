import { useEffect, useRef, useState } from "react";

type Data = {
  [key: string]: {
    title: string;
    description: string;
    image: string;
  };
};

const data: Data = {
  mobileapp: {
    title: "Mobile App",
    description:
      "Elevate your parking experience with the Kalex Mobile App. Seamlessly access real-time parking updates, reserve your preferred spots, and effortlessly manage transactions—all at your fingertips. Our intuitive and feature-rich app ensures convenience and control wherever your urban journey takes you.",
    image: "/kalexMobile.png",
  },
  dashboard: {
    title: "Dashboard",
    description:
      "Take command of parking efficiency with our Interactive Dashboard. Effortlessly monitor and analyze parking data, gaining valuable insights for optimal space management. Kalex empowers you with a comprehensive tool that transforms data into actionable decisions, ensuring a streamlined parking experience.",
    image: "/kalexDashboard.png",
  },
};

const Servicenav = () => {
  const [selected, setSelected] = useState<"mobileapp" | "dashboard">(
    "mobileapp",
  );
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current == null) return;
    //add animation
    if (selected == "mobileapp")
      imgRef.current.classList.add("animate-fade-left");
    else imgRef.current.classList.add("animate-fade-right");
    //remove animation after 500ms
    const timeout = setTimeout(() => {
      imgRef.current?.classList.remove("animate-fade-left");
      imgRef.current?.classList.remove("animate-fade-right");
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [selected]);

  return (
    <div className=" grid w-[100%] grid-cols-1 items-center justify-between gap-8 xl:grid-cols-2">
      <div className="flex flex-col gap-8 text-primary ">
        <div className="relative isolate flex h-14 w-72 items-center justify-center rounded-full border border-primary font-medium md:w-[440px]">
          <div
            className={`absolute top-0 -z-10 h-full w-1/2 rounded-full bg-primary text-background ${
              selected == "mobileapp" ? "left-0" : "left-1/2"
            } transition-all duration-500 ease-in-out`}
          ></div>
          <button
            className={`z-10 flex h-full w-36 items-center justify-center md:w-[220px] ${
              selected == "mobileapp" ? "text-black" : ""
            }`}
            onClick={() => {
              setSelected("mobileapp");
            }}
          >
            Mobile App
          </button>
          <button
            className={`z-10 flex h-full w-36 items-center justify-center md:w-[220px] ${
              selected == "dashboard" ? "text-black" : ""
            }`}
            onClick={() => {
              setSelected("dashboard");
            }}
          >
            Dashboard
          </button>
        </div>
        <h4 className="text-xl text-foreground md:w-96">
          {data[selected].title}
        </h4>
        <p className="md:w-[480px]">{data[selected].description}</p>
      </div>
      <img
        src={data[selected].image}
        className="mt-10 h-[50vh] w-full object-contain md:max-w-full"
        ref={imgRef}
      ></img>
    </div>
  );
};

export default Servicenav;
