import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "../ModeToggle";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import Logo from "./Logo";

const components: { title: string; href: string }[] = [
  {
    title: "Getting Started",
    href: "/docs",
  },
  {
    title: "Components",
    href: "/docs/components",
  },
  {
    title: "Layouts",
    href: "/docs/layouts",
  },
  {
    title: "Utilities",
    href: "/docs/utilities",
  },
];

export function Navbar() {
  return (
    <div className="w-full bg-background text-foreground">
      <header className="container mx-auto flex items-center justify-between p-2">
        <div className="flex items-center gap-4">
          <Logo viewBox="0 0 500 70" />
        </div>
        <NavigationMenu>
          <NavList className="hidden md:flex" />
          <Sheet>
            <SheetTrigger className="md:hidden">
              <Button
                variant="outline"
                size="icon"
                aria-label="open navigation sidebar"
              >
                <HamburgerMenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <NavList className="mt-14 flex-col" textSize="large" />
            </SheetContent>
          </Sheet>
        </NavigationMenu>
      </header>
    </div>
  );
}

const NavList = (props: {
  className?: string;
  textSize?: "large" | "normal";
}) => (
  <NavigationMenuList className={props.className}>
    {components.map((component) => (
      <NavigationMenuItem
        key={component.title + component.href}
        className="self-start"
      >
        <NavigationMenuLink
          href={component.href}
          className={navigationMenuTriggerStyle({
            className: `bg-transparent ${
              props.textSize == "large" ? "text-xl" : ""
            } text-foreground`,
          })}
        >
          {component.title}
        </NavigationMenuLink>
      </NavigationMenuItem>
    ))}
  </NavigationMenuList>
);
