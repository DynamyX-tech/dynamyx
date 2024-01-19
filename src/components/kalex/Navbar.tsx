import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex w-full flex-row items-center justify-between">
        <img src="/Kalexlogo.png" className="h-12"></img>
        <div className="hidden flex-row gap-8 md:flex">
          <a href="/kalex#features">Features</a>
          <a href="/kalex#services">Services</a>
          <a href="/kalex#faq">FAQ</a>
        </div>
        <button className=" hidden h-12 w-36 flex-row items-center justify-center rounded-full border border-foreground md:flex ">
          Contact us
        </button>
        <button
          className="rounded border p-2 md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? <Cross1Icon /> : <HamburgerMenuIcon />}
        </button>
      </div>
      {open && (
        <div className="mt-3 flex w-full flex-col items-center gap-4 rounded-lg border bg-muted py-8 text-foreground md:hidden ">
          <a href="/kalex#usecases">Use cases</a>
          <a href="/kalex#services">Services</a>
          <a href="/kalex#faq">FAQ</a>
          <button className=" flex h-9 w-24 flex-row items-center justify-center rounded-lg border border-foreground">
            Contact us
          </button>
        </div>
      )}
    </>
  );
}
