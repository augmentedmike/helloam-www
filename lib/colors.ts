export type ColorId = "am-red" | "midnight" | "starlight" | "arctic-white" | "ocean" | "forest";

export interface AMColor {
  id: ColorId;
  label: string;
  hex: string;
  available: boolean;
  signature?: boolean;
  img: string;
}

export const COLORS: AMColor[] = [
  { id: "am-red",       label: "AM Red",       hex: "#CC2200", available: true,  signature: true, img: "/am/am-desk.jpg" },
  { id: "midnight",     label: "Midnight",     hex: "#1C1C1E", available: true,                   img: "/am/am-desk-black.png" },
  { id: "starlight",    label: "Starlight",    hex: "#E8E4D9", available: true,                   img: "/am/am-desk-white.png" },
  { id: "arctic-white", label: "Arctic White", hex: "#F5F5F7", available: true,                   img: "/am/am-desk-white.png" },
  { id: "ocean",        label: "Ocean",        hex: "#1B4A6E", available: false,                  img: "/am/am-desk-blue.png" },
  { id: "forest",       label: "Forest",       hex: "#166534", available: false,                  img: "/am/am-desk-blue.png" },
];
