import { ChevronDown, X } from "lucide-react";
import logo from "../../assets/image/logo.png";
import { navList } from "@/mock/home";
import { Link } from "react-router";
import { useState } from "react";
import { SideBarProps } from "@/lib/interface";

const SideBar = ({ disp, setDisp }: SideBarProps) => {
  const menuItemStyle =
    "hover:text-secondary transition-colors duration-300 ease-in-out cursor-pointer border-b border-b-tertiary py-2";
  const [open, setOpen] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <aside
      className={`absolute left-0 top-0 bg-zinc-800/50 z-50 transition-transform duration-300 ease-in-out ${
        disp ? "translate-x-0 h-screen w-full" : "translate-x-full w-0 h-0"
      }`}
    >
      <nav className="w-full sm:w-96 absolute right-0 h-full overflow-x-hidden overflow-y-auto bg-zinc-800 p-3 space-y-2 rounded-l-lg shadow-2xl shadow-zinc-900">
        {/* Header */}
        <div className="w-full flex items-center justify-between border-b border-b-secondary py-2">
          <div className="w-32 h-14">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <X
            size={32}
            className="cursor-pointer"
            onClick={() => setDisp(false)}
          />
        </div>
        {/* List */}
        <ul>
          {navList.map((item) =>
            item.single ? (
              <li
                key={item.trigger}
                className={`${menuItemStyle} ${
                  open === item.trigger ? "text-secondary" : ""
                }`}
                onClick={() => {
                  setActiveMenu(null);
                  setOpen((prev) =>
                    prev === item.trigger ? null : item.trigger
                  );
                }}
              >
                <Link to={item.singalHref || "#"}>{item.trigger}</Link>
              </li>
            ) : (
              <li key={item.trigger}>
                <div
                  className={`flex items-center justify-between ${menuItemStyle} ${
                    open === item.trigger ? "text-secondary" : ""
                  }`}
                  onClick={() =>
                    setOpen((prev) =>
                      prev === item.trigger ? null : item.trigger
                    )
                  }
                >
                  <p>{item.trigger}</p>
                  <ChevronDown size={26} />
                </div>
                <ul
                  className={`px-2 ${
                    open === item.trigger ? "block" : "hidden"
                  }`}
                >
                  {item.items?.map((childItem) => (
                    <li
                      key={childItem.label}
                      className={`${menuItemStyle} ${
                        activeMenu === childItem.label ? "text-secondary" : ""
                      }`}
                      onClick={() => {
                        setActiveMenu(childItem.label);
                      }}
                    >
                      <Link to={childItem.href}>{childItem.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            )
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
