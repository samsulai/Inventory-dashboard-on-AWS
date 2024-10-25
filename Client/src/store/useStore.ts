import { create } from "zustand";
import {createJSONStorage, persist} from 'zustand/middleware'

export interface GlobalState {
  isSidebarCollapsed: boolean;
  isDarkMode: boolean;
  setIsSidebarCollapsed: (collapsed: boolean) => void;
  setIsDarkMode: (darkMode: boolean) => void;
}


export const useGlobalState = create<GlobalState>()(
    persist (
        (set) => ({
            isSidebarCollapsed: false,
            isDarkMode: false,
            setIsSidebarCollapsed: (collapsed: boolean) => set({ isSidebarCollapsed: collapsed }),
            setIsDarkMode: (darkMode: boolean) => set({ isDarkMode: darkMode }),
        }),
        {
            name: 'global-storage',
            storage: createJSONStorage(() => localStorage),
          }
    )
)

export default useGlobalState;
