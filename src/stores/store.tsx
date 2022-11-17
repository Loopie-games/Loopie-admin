import { createContext, useContext } from "react";
import { AuthStore } from "./AuthStore";
import { BugStore } from "./BugStore";
import { PopupStore } from "./PopupStore";

type Store = {
    authStore: AuthStore;
    bugStore: BugStore;
    popupStore: PopupStore;
}

export const store: Store = {
    authStore: new AuthStore(),
    bugStore: new BugStore(),
    popupStore: new PopupStore()
}

export const StoreContext = createContext<Store>({} as Store);

export  function useStore() {
    return useContext(StoreContext);
}
