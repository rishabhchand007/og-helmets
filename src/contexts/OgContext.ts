import { createContext } from "react";
export const OgContext = createContext<{auth?:boolean,setAuth?: any}>({});

