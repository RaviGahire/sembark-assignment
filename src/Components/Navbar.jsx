import { IconMenu2, IconShoppingCartCheck, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { NavLink } from "react-router";

export const Navbar = () => {
    const [open, setOpen] = useState(false)



    const tabs = [
        { id: 1, lable: 'Home', path: '/', },
        { id: 2, lable: 'Products', path: '/productdetails', },
        { id: 3, lable: 'About Us', path: '/about', },
    ];
    return (
        <header className="w-full bg-white shadow-xl">
            <nav className="max-w-7xl mx-auto flex items-center justify-between p-5">

                <div className="flex items-center gap-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        className="h-8 w-8"
                        fill="currentColor"
                    >
                        <path d="M8 16a8 8 0 10-4.465-1.361c.41.276 0-.846.715-2.639.534-1.34 1.81-4.466 1.825-5.205.01-.534-.193-.994-.4-1.466-.046-.101-.09-.204-.134-.307-.391.768-1.764 1.929-2.69 1.743-1.285-.256-.419-1.777.116-2.359l.18-.201c.498-.563 1.191-1.347 1.836-1.076.312.13 1.09.701 1.707 1.19 0 0-.018-.047-.028-.079-.282-.87-.67-1.896 1.14-2.047.46-.04 2.776-.023 2.275.854-.202.352-1.139.45-1.863.526-.305.032-.573.06-.732.101.076.42.121.93.128 1.396 1.074.123 1.755.032 2.557-.075.399-.053.827-.11 1.348-.147C12.035 4.81 12.75 4.75 13 5c.165.165.204.575.145.934-.247 1.491-1.68 2.794-2.812 3.823-.191.174-.374.34-.54.498-1.642 1.55-2.523 3.144-2.434 5.127.01.189-.011.607.225.607.138.007.276.011.416.011z" />
                    </svg>
                    <h1 className="text-lg font-semibold">SEMBARK</h1>
                </div>

                <ul className="hidden md:flex gap-6 text-[16px] font-medium">
                    {tabs.map((item) => (
                        <NavLink key={item.id} to={item.path}>
                            {item.lable}
                        </NavLink>
                    ))}
                </ul>

                <NavLink to="/cart" className="hidden md:block">
                    <IconShoppingCartCheck size={28} />
                </NavLink>

                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <IconX size={30} /> : <IconMenu2 size={30} />}
                </button>
            </nav>

            {open && (
                <div className="md:hidden bg-white shadow-lg p-5 absolute left-0 right-0 ">
                    <ul className="flex flex-col gap-4 text-lg font-medium">
                        {tabs.map((item) => (
                            <NavLink
                                key={item.id}
                                to={item.path}
                                onClick={() => setOpen(false)}
                            >
                                {item.lable}
                            </NavLink>
                        ))}

                        <NavLink
                            to="/cart"
                            className="flex items-center gap-2"
                            onClick={() => setOpen(false)}
                        >
                            <IconShoppingCartCheck />
                            Cart
                        </NavLink>
                    </ul>
                </div>
            )}
        </header>
    );
};
