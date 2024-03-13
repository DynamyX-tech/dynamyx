import {
  CarTaxiFront,
  LayoutDashboard,
  LogOut,
  PieChartIcon,
  Settings,
} from "lucide-react";
import { useState } from "react";

type navItem = {
  text: string;
  icon: any;
  open: boolean;
  selected?: boolean;
  id?: number;
  onItemClick: (id: number) => void;
};

export default function Item(props: navItem) {
  const selected = props.selected;
  const open = props.open;
  const handleClick = () => {
    props.onItemClick(props.id || 0);
  };
  if (open) {
    return (
      <div
        className={`flex flex-row items-center gap-2 px-3 
       ${
         selected
           ? " rounded-xl bg-muted py-3 text-foreground"
           : "text-primary hover:text-white"
       }
      `}
        onClick={handleClick}
      >
        {props.icon}
        {props.text}
      </div>
    );
  } else {
    return (
      <div
        className={`px-3 
         ${
           selected
             ? " rounded-xl bg-muted py-3 text-foreground"
             : " text-primary hover:text-white"
         }
        `}
        onClick={handleClick}
      >
        {props.icon}
      </div>
    );
  }
}
