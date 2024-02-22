import {
  ActivityLogIcon,
  BarChartIcon,
  DashboardIcon,
  ExitIcon,
  FileTextIcon,
  GearIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";

type navItem = {
  text: string;
  icon: any;
  selected?: boolean;
};

const Item = (props: navItem) => {
  const selected = props.selected;
  return (
    <div
      className={`flex w-40 flex-row items-center gap-2 px-10  ${
        selected
          ? " rounded-xl bg-primary py-4 text-background"
          : "hover:text-accent"
      }`}
    >
      {props.icon}
      {props.text}
    </div>
  );
};

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex h-screen flex-col items-start justify-between py-12">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center gap-1 px-12 py-4">
            <img src="/Kalexlogo.png" className="h-10"></img>
            <h6>version 0.0.5</h6>
          </div>
          <div className="flex flex-col items-center gap-8">
            <Item text="Dashboard" icon={<DashboardIcon />} selected />
            <Item text="Analysis" icon={<BarChartIcon />} />
            <Item text="Settings" icon={<GearIcon />} />
            <Item text="Logs" icon={<FileTextIcon />} />
            <Item text="Status" icon={<ActivityLogIcon />} />
          </div>
        </div>
        <button className="flex items-center justify-center gap-2 self-center rounded-[10px] border border-accent px-10 py-3 text-accent hover:bg-accent hover:text-foreground">
          <ExitIcon />
          log out
        </button>
      </div>
    </>
  );
}
