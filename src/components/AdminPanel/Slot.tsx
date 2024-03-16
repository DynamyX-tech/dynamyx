import { BellDot, SunMoon } from "lucide-react";
import ParkingOverview from "./Panels/ParkingOverview";

type slotdetails = {
  title: string;
  description: string;
  id: number;
};

export default function Slot(props: slotdetails) {
  return (
    <div className="h-full w-full px-8 py-8">
      <nav className="flex flex-row items-center justify-between">
        <div>
          <h1 className="text-[1.5rem] font-bold text-white">{props.title}</h1>
          <p className="text-foreground">{props.description}</p>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div className=" px-3 py-3 text-foreground hover:rounded-xl hover:bg-muted">
            <BellDot />
          </div>
          <div className=" px-3 py-3 text-foreground hover:rounded-xl hover:bg-muted">
            <SunMoon />
          </div>
          <div>
            <img
              src="/toy-field.jpg"
              alt="avatar"
              className="h-8 w-8 rounded-full"
            />
          </div>
        </div>
      </nav>
      {props.id === 1 && <h1></h1>}
      {props.id === 2 && <ParkingOverview />}
      {props.id === 3 && <h1></h1>}
    </div>
  );
}
