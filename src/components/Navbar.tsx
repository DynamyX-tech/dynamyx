import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./ModeToggle";
import { PaintBucketIcon } from "lucide-react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
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
  {
    title: "Examples",
    href: "/docs/examples",
  },
  {
    title: "Changelog",
    href: "/docs/changelog",
  },
];

export function Navbar() {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between p-8">
      <div className="flex items-center gap-4">
        <Logo viewBox="0 0 500 70" height={70} width={140} />
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
        <ModeToggle />
      </NavigationMenu>
    </header>
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
        <a href={component.href}>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle({
              className: `bg-transparent ${
                props.textSize == "large" ? "text-xl" : ""
              } text-gray-900 dark:text-gray-100`,
            })}
          >
            {component.title}
          </NavigationMenuLink>
        </a>
      </NavigationMenuItem>
    ))}
  </NavigationMenuList>
);
