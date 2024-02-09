"use client";
import React from "react";
import $ from "jquery";
import ThemeToggleBtn from "./toggle_theme_button";
import Link from "next/link";
import { usePathname } from "next/navigation";

// const tabTracker = (nav = "mainNav", className = "active") => {
//   // Cache selectors
//   var lastId,
//     topMenu = $("#" + nav),
//     topMenuHeight = topMenu.outerHeight() + 1,
//     // All list items
//     menuItems = topMenu.find("a"),
//     // Anchors corresponding to menu items
//     scrollItems = menuItems.map(function () {
//       var item = $($(this).attr("href"));
//       if (item.length) {
//         return item;
//       }
//     });

//   // Bind click handler to menu items
//   // so we can get a fancy scroll animation
//   menuItems.on("click", function (e) {
//     var href = $(this).attr("href"),
//       offsetTop = href === "#" ? 0 : $(href).offset()?.top - topMenuHeight + 1;
//     $("html, body").stop().animate(
//       {
//         scrollTop: offsetTop,
//       },
//       850
//     );
//     e.preventDefault();
//   });

//   // Bind to scroll
//   $(window).on("scroll", function () {
//     // Get container scroll position
//     var fromTop = $(this).scrollTop() + topMenuHeight;

//     // Get id of current scroll item
//     var cur = scrollItems.map(function () {
//       if ($(this).offset().top < fromTop) return this;
//     });
//     // Get the id of the current element
//     cur = cur[cur.length - 1];
//     var id = cur && cur.length ? cur[0].id : "";

//     if (lastId !== id) {
//       lastId = id;
//       // Set/remove active class
//       menuItems
//         .parent()
//         .removeClass(className)
//         .end()
//         .filter('a[href="#' + id + '"]')
//         .parent()
//         .addClass(className);
//     }
//   });
// };

export const Nav = ({ nav_items = [{ name: "NAV", href: "HAV" }] }) => {
  const pathname = usePathname();

  return (
    <nav
      className={`h-6 sticky top-0 z-50 justify-around flex gap-2 dark:bg-black bg-white items-center`}
    >
      <div></div>
      <ul className="flex gap-1 text-xs lg:text-sm font-bold text-black dark:text-white">
        {nav_items.map((nav) => (
          <li
            key={nav.name + " _Nav"}
            className={`mx-1 px-1 rounded-t-md ${
              pathname === nav.href ? "bg-green-400" : ""
            }`}
          >
            <Link href={nav.href}>{nav.name}</Link>
          </li>
        ))}
      </ul>

      <div className="mr-2">
        <ThemeToggleBtn />
      </div>
    </nav>
  );
};

export const NavSub = ({ nav_items = [{ name: "NAV", href: "HAV" }] }) => {
  const pathname = usePathname();
  return (
    <nav
      className={`h-6 sticky top-0 z-40 justify-around flex gap-2 rounded-b-md`}
    >
      <ul className="flex gap-1 text-sm font-bold text-black dark:text-white rounded-md  bg-gray-400">
        {nav_items.map((nav) => (
          <li
            key={nav.name + " _Nav"}
            className={`mx-1 px-1 rounded-t-md ${
              pathname === nav.href ? "bg-green-400" : ""
            }`}
          >
            <Link scroll={true} href={nav.href}>
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
