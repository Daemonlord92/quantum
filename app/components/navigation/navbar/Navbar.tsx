"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    let pathname = usePathname() || "/";
    const menu = [
        {
            path: "/",
            name: "Home",
        },
        {
            path: "/about",
            name: "About Me"
        },
        {
            path: "/projects",
            name: "Projects"
        }
    ];

    return (
        <div className="border border-indigo-600/50 p-[0.4rem] rounded-lg mb-12 sticky top-4 z-[100] bg-violet-400/30 backdrop-blur-md">
            <nav className="flex gap-2 relative justify-evenly w-full z-[100] rounded-lg">
                {
                    menu.map((item, index) => {
                        const isActive = item.name === pathname;

                        return(
                            <Link
                                key={item.path}
                                className={`px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
                                    isActive ? "text-violet-200" : "text-violet-400"
                                }`}
                                href={item.path}
                                >
                                    <span>{item.name}</span>
                            </Link>
                        )
                    })
                }
            </nav>
        </div>
    );
}

export default Navbar;