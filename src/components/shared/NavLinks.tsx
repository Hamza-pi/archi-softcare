import { NavLink, useLocation } from "react-router";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { ChevronRight } from "lucide-react";
import { navList } from "@/mock/home";
import { ListItems } from "@/lib/types";

const NavLinks = () => {
  const { pathname } = useLocation();
  const isCurrent = (item: ListItems): boolean => {
    return item.items?.some((child) => pathname.includes(child.href))
      ? true
      : false;
  };
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        {navList.map((item, index) => (
          <NavigationMenuItem key={index}>
            {item.single ? (
              <NavLink
                to={item.singalHref || "#"}
                className={({ isActive }) => `
                  ${navigationMenuTriggerStyle()} 
                  ${isActive ? "!text-secondary" : ""}
                `}
              >
                {item.trigger}
              </NavLink>
            ) : (
              <>
                <NavigationMenuTrigger
                  className={`${isCurrent(item) ? "!text-secondary" : ""}`}
                >
                  {item.trigger}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col divide-y-2 divide-tertiary bg-primary shadow">
                  {item.items?.map((childItem, childIndex) => (
                    <NavLink
                      key={childIndex}
                      to={childItem.href}
                      target={childItem?.target || ""}
                      className={({ isActive }) => `
                        group/item 
                        w-full 
                        text-sm 
                        capitalize 
                        ease-in-out 
                        duration-300 
                        transition-colors 
                        p-3 
                        flex 
                        items-center 
                        gap-2
                        ${isActive ? "text-secondary" : "hover:text-secondary"}
                      `}
                    >
                      <ChevronRight
                        size={14}
                        className={`${
                          pathname.includes(childItem.href)
                            ? "opacity-100"
                            : "opacity-0"
                        } group-hover/item:opacity-100 text-secondary`}
                      />
                      {childItem.label}
                    </NavLink>
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
