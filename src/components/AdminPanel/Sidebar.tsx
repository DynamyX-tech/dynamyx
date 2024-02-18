import {
  ActivityLogIcon,
  BarChartIcon,
  DashboardIcon,
  ExitIcon,
  FileTextIcon,
  GearIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex max-h-[90vh] w-[10vw] flex-col items-start justify-between px-2 py-12">
        <div className="flex flex-col items-center gap-1">
          <img src="/Kalexlogo.png" className="h-10"></img>
          <h6>version 0.0.5</h6>
        </div>
        <ul className=" flex flex-col gap-2 text-lg">
          <li className="text-primary hover:text-primary">
            <DashboardIcon />
            Dashboard
          </li>
          <li className=" hover:text-primary">
            <BarChartIcon />
            Analysis
          </li>
          <li className=" hover:text-primary">
            <GearIcon />
            Settings
          </li>
        </ul>
        <ul className=" flex w-full  flex-col gap-2 border-y border-foreground py-4 text-lg">
          <li className=" hover:text-primary">
            <FileTextIcon />
            logs
          </li>
          <li className=" hover:text-primary">
            <ActivityLogIcon />
            status
          </li>
        </ul>
        <button className="flex w-full items-center justify-center gap-2 rounded-[10px] border border-primary px-2 py-3 text-primary hover:bg-primary hover:text-foreground">
          <ExitIcon />
          log out
        </button>
      </div>
    </>
  );
}
