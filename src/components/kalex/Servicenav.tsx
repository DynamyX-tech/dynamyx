import { useState } from "react";

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
  const [selected, setSelected] = useState("mobileapp");
  return (
    <div className="grid w-[100%] grid-cols-1 items-center justify-between gap-8 xl:grid-cols-2">
      <div className="flex flex-col gap-8 text-primary ">
        <div className=" flex h-14 w-72 items-center justify-center rounded-full border border-primary font-medium md:w-[440px]">
          <button
            className={`flex h-full w-36 items-center justify-center md:w-[220px] ${
              selected == "mobileapp"
                ? "rounded-full bg-primary text-background"
                : ""
            }`}
            onClick={() => {
              setSelected("mobileapp");
            }}
          >
            Mobile App
          </button>
          <button
            className={`flex h-full w-36 items-center justify-center md:w-[220px] ${
              selected == "dashboard"
                ? "rounded-full bg-primary text-background"
                : ""
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
        className="mt-10 max-h-[50vh] w-full max-w-[15rem] object-contain md:max-w-full"
      ></img>
    </div>
  );
};

export default Servicenav;
