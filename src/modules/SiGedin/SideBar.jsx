import { useState } from "react";

import logo from "../../images/logo_white.png";
import avatar from "../../images/avatar.png";
import { Link, useNavigate } from "react-router-dom";
import { optionsItem } from "../../helpers/optionsSideBar";

export const Sidebar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(false);

  const onGoTo = () => {
    navigate("/gedin");
  };

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-24"
        } bg-blue-600 h-screen p-5  pt-8 relative duration-300 flex flex-col justify-between`}
      >
        <i
          className={`fa-solid fa-bars absolute cursor-pointer text-3xl text-slate-300 -right-3 top-9 p-2 font- ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        ></i>
        <div>
          <div
            className="flex gap-x-4 items-center cursor-pointer"
            onClick={onGoTo}
          >
            <img
              style={{ width: "50px", height: "50px" }}
              src={logo}
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              SIGEDIN
            </h1>
          </div>
          <ul className="pt-6">
            {optionsItem.map((Menu, index) => (
              <Link key={Menu.title} to={Menu.goTo}>
                <li
                  className={`flex  rounded-md p-2 cursor-pointer text-white text-sm items-center gap-x-4 
                  hover:bg-slate-100/50
                  ${Menu.gap ? "mt-9" : "mt-2"} 
                  ${index === 0 && "bg-light-white"}
                  ${!open && "justify-center"}
                  `}
                >
                  <i className={`${Menu.icon} text-lg`}></i>
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {Menu.title}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div
          className={` inline-block text-left
          ${openDropdown ? "relative" : "absolute left-0"}
        `}
        >
          <div
            className="absolute right-0 top-20 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              <Link
                to="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
              >
                Configuración
              </Link>
              <Link
                to="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
              >
                Ver perfil
              </Link>
              <button
                type="submit"
                className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-3"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>

        <div
          className="flex gap-4 items-center cursor-pointer"
          onClick={() => setOpenDropdown(!openDropdown)}
        >
          <img
            src={avatar}
            alt="Avatar del usuario"
            className="rounded-full w-12 h-12 cursor-pointer duration-200 hover:scale-110"
          />
          <p
            className={`text-white ${
              !open && "hidden"
            } origin-left duration-200`}
          >
            Martin Elias
          </p>
        </div>
      </div>
    </div>
  );
};
