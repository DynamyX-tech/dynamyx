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
      "Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit autfugit, sed quia consequuntur magni dolores eos, qui ratione voluptatemsequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quiadolor sit amet consectetur adipisci[ng] velit, sed quia non numquam Nemo enim iput odit aut fugit, sed quia consequuntur magni doloreseos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est,qui dolorem ipsum, quia Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt,",
    image: "/public/kalexMobile.png",
  },
  dashboard: {
    title: "Dashboard",
    description:
      "sectetur adipisci[ng] velit, sed quia non numquam Nemo enim iput odit aut fugit, sed quia consequuntur magni doloreseos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est,qui dolorem ipsum, quia Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt",
    image: "/public/kalexDashboard.png",
  },
};

const Servicenav = () => {
  const [selected, setSelected] = useState("mobileapp");
  return (
    <div className="flex md:flex-row flex-col items-center md:gap-64">
      <div className="flex flex-col gap-8 text-primary ">
        <div className=" flex h-14 md:w-[440px] w-72 items-center justify-center rounded-full border border-primary font-medium">
          <button
            className={`flex h-full md:w-[220px] w-36 items-center justify-center ${
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
            className={`flex h-full md:w-[220px] w-36 items-center justify-center ${
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
        <h4 className="md:w-96 text-xl text-foreground">
          {data[selected].title}
        </h4>
        <p className="md:w-[480px]">
          {data[selected].description}
        </p>
      </div>
      <img src={data[selected].image} className="mt-10 md:-mt-36 h-[400px] max-w-96"></img>
    </div>
  );
};

export default Servicenav;
