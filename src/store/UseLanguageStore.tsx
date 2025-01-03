import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LanguageState {
  language: string;
  setLanguage: (language: string) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: "en",
      setLanguage: (language: string) => {
        console.log("Setting language to:", language);
        set({ language });
      },
    }),
    {
      name: "language-store",
    }
  )
);
