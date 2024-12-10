import { ListProps } from "@/lib/interface";
import React from "react";

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ul className="list-disc  space-y-2 pl-4 md:pl-6 marker:text-secondary">
      {items.length > 0 && items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
};

export default List;
