import { Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { ChevronRight } from "lucide-react";
import { navList } from "@/mock/home";

const NavLinks = () => {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        {navList.map((item, index) => (
          <NavigationMenuItem key={index}>
            {item.single ? (
              <Link to={item.singalHref || "#"}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.trigger}
                </NavigationMenuLink>
              </Link>
            ) : (
              <>
                <NavigationMenuTrigger>{item.trigger}</NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col divide-y-2 divide-tertiary bg-primary shadow">
                  {item.items?.map((childItem, childIndex) => (
                    <Link
                      key={childIndex}
                      to={childItem.href}
                      className="group/item w-full text-sm capitalize hover:text-secondary ease-in-out duration-300 transition-colors p-3 flex items-center gap-2"
                    >
                      <ChevronRight
                        size={14}
                        className="opacity-0 group-hover/item:opacity-100 text-secondary"
                      />
                      <NavigationMenuLink key={childIndex}>
                        {childItem.label}
                      </NavigationMenuLink>
                    </Link>
                  ))}
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavLinks;
