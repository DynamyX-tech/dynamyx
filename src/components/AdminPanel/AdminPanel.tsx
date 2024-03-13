import {
  CarTaxiFront,
  LayoutDashboard,
  LogOut,
  PieChartIcon,
  Settings,
} from "lucide-react";
import { useEffect, useState } from "react";
import Item from "./Item";
import Slot from "./Slot";

export default function AdminPanel() {
  const [selectedId, setSelectedId] = useState(1);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    console.log(selectedId);
  }, [selectedId]);

  return (
    <div className="flex overflow-clip">
      <div
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
              id={1}
              onItemClick={setSelectedId}
              {...(selectedId === 1 && { selected: true })}
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
              id={2}
              onItemClick={setSelectedId}
              {...(selectedId === 2 && { selected: true })}
            />
            <Item
              text="Settings"
              icon={<Settings height={20} />}
              open={open}
              id={3}
              onItemClick={setSelectedId}
              {...(selectedId === 3 && { selected: true })}
            />
          </nav>
          <button
            className="flex flex-row items-center gap-2 px-3 py-2  font-bold text-accent "
            onClick={handlelogout}
          >
            <LogOut height={20} />
            {open ? "Log Out" : ""}
          </button>
        </section>
      </div>
      {selectedId === 1 && (
        <Slot
          title="Dashboard"
          description="Realtime overview of the parking space"
          id={1}
        />
      )}
      {selectedId === 2 && (
        <Slot
          title="Parking Space"
          description="Realtime overview of the parking space"
          id={2}
        />
      )}
      {selectedId === 3 && (
        <Slot
          title="Settings"
          description="Realtime overview of the parking space"
          id={3}
        />
      )}
    </div>
  );
}

const handlelogout = () => {
  fetch("https://dynamyx-kalex-central.azurewebsites.net/api/v1/auth/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    credentials: "include",
  })
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
};
