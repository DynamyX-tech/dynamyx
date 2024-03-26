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
    image: "/kalexMobile.webp",
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
    <div className=" grid w-[100%] grid-cols-1 items-center justify-between gap-8 self-center xl:grid-cols-2">
      <img
        src={data[selected].image}
        className=" h-[60vh] w-full object-contain"
        ref={imgRef}
      ></img>
      <div className="flex flex-col gap-8 text-primary ">
        <div className="flex flex-row items-center gap-6 text-accent">
          <h5 className="font-medium uppercase tracking-[0.25rem]">
            Abour Our
          </h5>
          <hr className="h-px w-[72px] border-accent" />
        </div>
        <h4 className="text-xl text-foreground md:w-96">
          {data[selected].title}
        </h4>
        <p className="md:w-[480px]">{data[selected].description}</p>
      </div>
    </div>
  );
};

export default Servicenav;
