import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./ModeToggle";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
import Logo from "./Logo";

const components: { title: string; href: string }[] = [
  {
    title: "What we do",
    href: "/#About",
  },
  {
    title: "Projects",
    href: "/#Projects",
  },
  {
    title: "Blogs",
    href: "/#Blogs",
  },
  {
    title: "Testimonials",
    href: "/#Testimonials",
  },
];

export function Navbar() {
  return (
    <header className="nav container mx-auto flex items-center justify-between p-2">
      <div className="flex items-center gap-4">
        <Logo height={70} width={140} />
      </div>
      <NavigationMenu>
        <NavList className="hidden md:flex" />
        <Sheet>
          <SheetTrigger
            className={buttonVariants({
              variant: "outline",
              size: "icon",
              className: "md:hidden",
            })}
            aria-label="open navigation sidebar"
          >
            <HamburgerMenuIcon />
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
        <NavigationMenuLink
          href={component.href}
          className={navigationMenuTriggerStyle({
            className: `bg-transparent ${
              props.textSize == "large" ? "text-xl" : ""
            } text-gray-900 dark:text-gray-100`,
          })}
        >
          {component.title}
        </NavigationMenuLink>
      </NavigationMenuItem>
    ))}
  </NavigationMenuList>
);
