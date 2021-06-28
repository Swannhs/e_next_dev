import React, { useState } from "react";
import { Menu } from "antd";

import navigatorData from "../../../data/navigator.json";
import Link from "next/link";

function Navigator() {
  const { SubMenu } = Menu;
  const [current, setCurrent] = useState("mail");
  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <ul className="navigation">
      <li className="navigation-item">
        <Link href='/'>
          <a className="navigation-item__title">{navigatorData.HOME.title}</a>
        </Link>
      </li>
      <li className="navigation-item">
        <Link href={process.env.PUBLIC_URL + navigatorData.SHOP.href}>
          <a className="navigation-item__title">{navigatorData.SHOP.title}</a>
        </Link>
      </li>
      <li className="navigation-item -toggleable">
        <Link href={process.env.PUBLIC_URL + navigatorData.BLOG.href}>
          <a className="navigation-item__title">{navigatorData.BLOG.title}</a>
        </Link>
        <ul className="navigation-item__submenu">
          {navigatorData.BLOG.subMenu.map((item, index) => (
            <li key={index}>
              <Link href={process.env.PUBLIC_URL + item.href}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </li>
      <li className="navigation-item -toggleable">
        <Link href={process.env.PUBLIC_URL + navigatorData.PAGES.href}>
          <a className="navigation-item__title">{navigatorData.PAGES.title}</a>
        </Link>
        <ul className="navigation-item__submenu">
          {navigatorData.PAGES.subMenu.map((item, index) => (
            <li key={index}>
              <Link href={process.env.PUBLIC_URL + item.href}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </li>
      <li className="navigation-item">
        <Link href={process.env.PUBLIC_URL + navigatorData.ABOUT.href}>
          <a className="navigation-item__title">{navigatorData.ABOUT.title}</a>
        </Link>
      </li>
    </ul>
  );
}

export default React.memo(Navigator);
