import { createContext } from "react";
import FilterStore from "./store/filterStore";
import RootStore from "./store/RootStore";

const RootContext = createContext<RootStore>({} as RootStore);

export default RootContext;