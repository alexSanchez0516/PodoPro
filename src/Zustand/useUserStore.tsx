import { create } from "zustand";
import { UserAuthFullPopulateByID } from "../interfaces/auth";

interface UserStore {
  user: UserAuthFullPopulateByID | null;
  loginUser: (user: UserAuthFullPopulateByID) => void;
  logOut: () => void;
}

export const useUserStore = create<UserStore>((set) => {
  // Try to get user from localStorage on initial load
  const storedUser = localStorage.getItem("user");
  const initialUser = storedUser ? JSON.parse(storedUser) : null;

  return {
    user: initialUser,
    loginUser: (user: UserAuthFullPopulateByID) => {
      set({ user });
      // Save user to localStorage
      localStorage.setItem("user", JSON.stringify(user));
    },
    logOut: () => {
      set({ user: null });
      // Remove user from localStorage
      localStorage.removeItem("user");
    },
  };
});
