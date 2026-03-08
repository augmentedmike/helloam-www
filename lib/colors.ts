export type ColorId = "red" | "black" | "silver" | "white" | "blue" | "green";

export interface AMColor {
  id: ColorId;
  label: string;
  hex: string;
  available: boolean;
  signature?: boolean;
  img: string;
}

export const COLORS: AMColor[] = [
  { id: "red",    label: "AM Red",       hex: "#CC2200", available: true,  signature: true,  img: "/am/am-desk.jpg" },
  { id: "black",  label: "Midnight",     hex: "#1a1a1a", available: true,                    img: "/am/am-desk-purple.png" },
  { id: "silver", label: "Starlight",    hex: "#c8c8c0", available: true,                    img: "/am/am-desk-pink.png" },
  { id: "white",  label: "Arctic White", hex: "#f0efeb", available: true,                    img: "/am/am-desk-orange.png" },
  { id: "blue",   label: "Ocean",        hex: "#2563a8", available: false,                   img: "/am/am-desk-blue.png" },
  { id: "green",  label: "Forest",       hex: "#166534", available: false,                   img: "/am/am-desk-blue.png" },
];
