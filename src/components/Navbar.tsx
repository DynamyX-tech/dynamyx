import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ModeToggle";
import { PaintBucketIcon } from "lucide-react";

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
      <PaintBucketIcon />
      <NavigationMenu>
        <NavigationMenuList>
          {components.map((component) => (
            <NavigationMenuItem key={component.title + component.href}>
              <a href={component.href}>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle({
                    className:
                      "bg-transparent text-gray-900 dark:text-gray-100",
                  })}
                >
                  {component.title}
                </NavigationMenuLink>
              </a>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
        <ModeToggle />
      </NavigationMenu>
    </header>
  );
}
