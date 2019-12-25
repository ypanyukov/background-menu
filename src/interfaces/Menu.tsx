export interface IMenuItemProps {
  title: string;
  url: string;
}

export interface IMenuProps {
  open: Boolean;
  items: Array<IMenuItemProps>;
  containerElement: HTMLElement;
}
