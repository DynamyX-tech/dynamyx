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
};

const Item = (props: navItem) => {
  const selected = props.selected;
  const open = props.open;
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
      >
        {props.icon}
      </div>
    );
  }
};

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <main
        className={`${
          open ? "w-max px-6" : "w-[7%]"
        } flex h-screen flex-col items-center gap-16 border-r-2 border-[#393D45] py-12`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <img
          src={open ? "/Kalexlogo.png" : "/kalexicon.webp"}
          className="h-10"
          alt="Kalex Logo"
        />
        <section className="flex h-[100%] flex-col items-center justify-between">
          <nav className="flex flex-col gap-8">
            <Item
              text="Dashboard"
              icon={<LayoutDashboard height={20} />}
              open={open}
            />
            {/* <Item
              text="Activity"
              icon={<PieChartIcon height={20} />}
              open={open}
            /> */}
            <Item
              text="Parking"
              icon={<CarTaxiFront height={20} />}
              open={open}
              selected
            />
            <Item text="Settings" icon={<Settings height={20} />} open={open} />
          </nav>
          <button
            className="flex flex-row items-center gap-2 px-3 py-2  font-bold text-accent "
            onClick={() => {
              fetch(
                "https://dynamyx-kalex-central.azurewebsites.net/api/v1/auth/logout",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    // Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                  credentials: "include",
                },
              )
                .then((res) => {
                  if (res.ok) {
                    window.location.href = "/login";
                  } else {
                    throw new Error("Failed to log out");
                  }
                })
                .catch((err) => {
                  alert(err);
                });
            }}
          >
            <LogOut height={20} />
            {open ? "Log Out" : ""}
          </button>
        </section>
      </main>
    </>
  );
}
{
}
