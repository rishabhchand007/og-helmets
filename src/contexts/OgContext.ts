import { createContext } from "react";
export const OgContext = createContext<{auth?:string|null ,setAuth?: any}>({});

