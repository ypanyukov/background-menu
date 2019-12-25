import React from "react";

import { IMenuProps } from "../interfaces/Menu";
import { MenuItemMemo } from "./MenuItem";

import "./Menu.css";

const containerClassName = "BackgroundMenu__container";
const containerClassNameOpened = "BackgroundMenu__container--opened";

export function Menu({ items, containerElement, open }: IMenuProps) {
  if (containerElement) {
    containerElement.classList.add(containerClassName);
    if (!open) containerElement.classList.remove(containerClassNameOpened);
    else containerElement.classList.add(containerClassNameOpened);
  }

  return (
    <div className="BackgroundMenu">
      <div className="BackgroundMenu__list">
        {items.map(item => (
          <MenuItemMemo key={item.url} url={item.url} title={item.title} />
        ))}
      </div>
    </div>
  );
}
