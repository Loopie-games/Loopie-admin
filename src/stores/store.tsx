import { createContext, useContext } from "react";
import { AuthStore } from "./AuthStore";
import { BugStore } from "./BugStore";

type Store = {
    authStore: AuthStore;
    bugStore: BugStore;

};

type Store = {
    authStore: AuthStore;
    bugStore: BugStore;
}

export const store: Store = {
    authStore: new AuthStore(),
    bugStore: new BugStore(),
}

export const StoreContext = createContext<Store>({} as Store);

export  function useStore() {
    return useContext(StoreContext);
}
