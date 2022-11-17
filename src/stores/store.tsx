import { createContext, useContext } from "react";
import { AuthStore } from "./AuthStore";
import { BugStore } from "./BugStore";
import {BugReportStore} from "./BugReportStore";

type Store = {
    authStore: AuthStore;
    bugStore: BugStore;
    bugReportStore: BugReportStore;
}

export const store: Store = {
    authStore: new AuthStore(),
    bugStore: new BugStore(),
    bugReportStore: new  BugReportStore()
}

export const StoreContext = createContext<Store>({} as Store);

export  function useStore() {
    return useContext(StoreContext);
}
