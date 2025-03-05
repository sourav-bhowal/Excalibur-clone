import { CircleIcon, PenLineIcon, RectangleHorizontalIcon } from "lucide-react";

export const shapes = [
  {
    name: "rectangle",
    shape: <RectangleHorizontalIcon size={24} />,
  },
  {
    name: "circle",
    shape: <CircleIcon size={24} />,
  },
  {
    name: "line",
    shape: <PenLineIcon size={24} />,
  },
];

export const colors = [
  { name: "Black", value: "#000000" },
  { name: "Red", value: "#FF0000" },
  { name: "Green", value: "#00FF00" },
  { name: "Blue", value: "#0000FF" },
  { name: "Yellow", value: "#FFFF00" },
  { name: "Cyan", value: "#00FFFF" },
  { name: "Magenta", value: "#FF00FF" },
  { name: "White", value: "#FFFFFF" },
];
