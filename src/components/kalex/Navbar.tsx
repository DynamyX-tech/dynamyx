import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function Navbar(){
    const [open, setOpen] = useState(false);
    return(
        <>
        <div className="w-full flex flex-row justify-between items-center">
            <img src="/public/Kalexlogo.png" className="h-12"></img>
            <div className="md:flex flex-row gap-8 hidden">
                <a href="/kalex#usecases">Use cases</a>
                <a href="/kalex#services">Services</a>
                <a href="/kalex#faq">FAQ</a>
            </div>
            <button className=" w-36 h-12 border border-foreground rounded-full md:flex flex-row justify-center items-center hidden ">Contact us</button>
            <button className="md:hidden border p-2 rounded" onClick={()=>{
                setOpen(!open);
            }}>{open ? <Cross1Icon/> : <HamburgerMenuIcon/>}</button>
        </div>
        {open && <div className="flex flex-col w-full gap-4 bg-muted py-8 mt-3 items-center md:hidden text-foreground border rounded-lg ">
            <a href="/kalex#usecases">Use cases</a>
            <a href="/kalex#services">Services</a>
            <a href="/kalex#faq">FAQ</a>
            <button className=" w-24 h-9 border border-foreground rounded-lg flex flex-row justify-center items-center">Contact us</button>
        </div>}
        </>
    )
}