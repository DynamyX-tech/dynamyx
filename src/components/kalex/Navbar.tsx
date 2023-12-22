import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function Navbar(){
    return(
        <div className="w-full flex flex-row justify-between items-center">
            <img src="/public/Kalexlogo.png" className="h-12"></img>
            <div className="md:flex flex-row gap-8 hidden">
                <a href="/kalex#usecases">Use cases</a>
                <a href="/kalex#feature">Features</a>
                <a href="/kalex#services">Services</a>
            </div>
            <button className=" w-36 h-12 border border-foreground rounded-full md:flex flex-row justify-center items-center hidden ">Contact us</button>
            <button className="md:hidden border p-2 rounded">
                <HamburgerMenuIcon/></button>
        </div>
    )
}