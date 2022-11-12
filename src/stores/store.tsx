import { createContext, useContext } from "react";
import { AuthStore } from "./AuthStore";
import {BugReportStore} from "./BugReportStore";

type Store = {
    authStore: AuthStore;
    bugReportStore: BugReportStore;
}

export const store: Store = {
    authStore: new AuthStore(),
    bugReportStore: new BugReportStore(),
}

export const StoreContext = createContext<Store>({} as Store);

export  function useStore() {
    return useContext(StoreContext);
}
