import { createContext } from "react";
import type { Prop } from "./types.ts";

export const IconContext = createContext<Prop>({
  size: 30,
  fill: "white",
  standalone: true,
});
