"use client";
import React, { useEffect } from "react";
import $ from "jquery";
import ThemeToggleBtn from "./toggle_theme_button";

export const Nav = ({
  nav_id,
  class_name,
  top = "top-0",
  nav_items = [{ name: "NAV", href: "HAV" }],
  zidx = "z-40",
}) => {
  useEffect(() => {
    const tabTracker = (nav = "mainNav", className = "active") => {
      // Cache selectors
      var lastId,
        topMenu = $("#" + nav),
        topMenuHeight = topMenu.outerHeight() + 1,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function () {
          var item = $($(this).attr("href"));
          if (item.length) {
            return item;
          }
        });

      // Bind click handler to menu items
      // so we can get a fancy scroll animation
      menuItems.on("click", function (e) {
        var href = $(this).attr("href"),
          offsetTop =
            href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
        $("html, body").stop().animate(
          {
            scrollTop: offsetTop,
          },
          850
        );
        e.preventDefault();
      });

      // Bind to scroll
      $(window).on("scroll", function () {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function () {
          if ($(this).offset().top < fromTop) return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
          lastId = id;
          // Set/remove active class
          menuItems
            .parent()
            .removeClass(className)
            .end()
            .filter('a[href="#' + id + '"]')
            .parent()
            .addClass(className);
        }
      });
    };

    tabTracker(nav_id, class_name);
  }, []);

  return (
    <nav
      className={`h-6 sticky ${top} ${zidx} justify-around flex gap-2 dark:bg-black bg-white`}
    >
      {nav_id === "mainNav" && <div></div>}
      {/* <div></div> */}
      <ul
        id={nav_id}
        className="flex gap-1 text-sm font-bold text-black dark:text-white"
      >
        {nav_items.map((nav) => (
          <li key={nav.name + " _Nav"} className="mx-1 px-1 rounded-t-md">
            <a href={`#${nav.href}`}>{nav.name}</a>
          </li>
        ))}
      </ul>
      {nav_id === "mainNav" && (
        <div className="mr-2">
          <ThemeToggleBtn />
        </div>
      )}
      {/* <div className="mr-2">
        <ThemeToggleBtn />
      </div> */}
    </nav>
  );
};
