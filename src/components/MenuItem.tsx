import React from "react";

import { IMenuItemProps } from "../interfaces/Menu";

function MenuItem({ title, url }: IMenuItemProps) {
  return (
    <a className="BackgroundMenu__link" href={url}>
      {title}
    </a>
  );
}

export const MenuItemMemo = React.memo(MenuItem);
