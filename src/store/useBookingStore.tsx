import { create } from "zustand";
interface useBookingState {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}
export const useBookingStore = create<useBookingState>((set) => ({
  isOpen: false,
  setIsOpen: (value) => set({ isOpen: value }),
}));
