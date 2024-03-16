type parkareaparams = {
  dottedborder?: string;
  status: boolean;
  id: string;
};
type roadparams = {
  entry?: boolean;
  exit?: boolean;
  block?: boolean;
  border?: string;
};
const car = () => {
  return <img src="/carTop.webp" alt="car" className="h-8 " />;
};
export default function ParkArea(params: parkareaparams) {
  return (
    <div
      className={`h-20 w-16 ${
        params.dottedborder ? `${params.dottedborder}` : "border-r-2"
      }  flex items-center justify-center border-dotted border-primary text-[1rem] text-foreground`}
    >
      {params.status ? car() : params.id}
    </div>
  );
}

export const RoadArea = (params: roadparams) => {
  if (params.entry || params.exit) {
    return (
      <div
        className={`flex h-20 w-16 items-center ${
          params.border ? `${params.border} border-background` : "border-none"
        } justify-center bg-primary font-bold text-background`}
      >
        {params.entry ? "Entry" : "Exit"}
      </div>
    );
  }
  if (params.block) {
    return (
      <div className="flex h-20 w-16 items-center justify-center bg-primary font-bold text-background"></div>
    );
  } else {
    return <div className="h-20 w-16"></div>;
  }
};
