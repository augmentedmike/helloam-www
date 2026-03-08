export type ColorId = "am-red" | "blue" | "pink" | "purple" | "black" | "white" | "green";

export interface AMColor {
  id: ColorId;
  label: string;
  hex: string;
  available: boolean;
  signature?: boolean;
  img: string;
}

export const COLORS: AMColor[] = [
  { id: "am-red", label: "AM Red",  hex: "#CC2200", available: true,  signature: true, img: "/am/am-desk.jpg" },
  { id: "blue",   label: "Blue",    hex: "#1B3254", available: true,                   img: "/am/am-desk-blue.png" },
  { id: "pink",   label: "Pink",    hex: "#E8006A", available: true,                   img: "/am/am-desk-pink.png" },
  { id: "purple", label: "Purple",  hex: "#7C3099", available: true,                   img: "/am/am-desk-purple.png" },
  { id: "black",  label: "Black",   hex: "#141414", available: true,                   img: "/am/am-desk-black.png" },
  { id: "white",  label: "White",   hex: "#F0EFEB", available: true,                   img: "/am/am-desk-white.png" },
  { id: "green",  label: "Green",   hex: "#2D6B3A", available: false,                  img: "/am/am-desk-black.png" },
];
