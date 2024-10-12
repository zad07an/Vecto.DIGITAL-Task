import { PropsWithClassName } from "@/types/definitions";
import { ReactNode } from "react";

interface ListItemsProps<T> extends PropsWithClassName {
  items: T[];
  renderItem: (item: T) => ReactNode;
}

export const ListItems = <T,>({
  items,
  renderItem,
  className,
}: ListItemsProps<T>) => {
  return (
    <div className={className}>{items.map((item) => renderItem(item))}</div>
  );
};
