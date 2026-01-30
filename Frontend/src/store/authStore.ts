import { create } from "zustand";
import { persist } from "zustand/middleware";

export type UserRole = "student" | "instructor" | "manager" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  department?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  // Actions
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  guestLogin: () => void;
  selectRole: (role: UserRole) => void;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
}

// Mock authentication - Replace with real API calls
const mockLogin = async (email: string, password: string): Promise<User> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock user data
  return {
    id: "1",
    name: "Demo User",
    email: email,
    role: "student", // Default role, will be selected later
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
  };
};

const mockRegister = async (
  name: string,
  email: string,
  password: string,
): Promise<User> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    id: Math.random().toString(36).substr(2, 9),
    name,
    email,
    role: "student",
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
  };
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (email: string, password: string) => {
        set({ isLoading: true });
        try {
          const user = await mockLogin(email, password);
          set({ user, isAuthenticated: true, isLoading: false });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      register: async (name: string, email: string, password: string) => {
        set({ isLoading: true });
        try {
          const user = await mockRegister(name, email, password);
          set({ user, isAuthenticated: true, isLoading: false });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      guestLogin: () => {
        const guestUser: User = {
          id: "guest-" + Date.now(),
          name: "Guest User",
          email: "guest@aotms.in",
          role: "student",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=guest",
        };
        set({ user: guestUser, isAuthenticated: true });
      },

      selectRole: (role: UserRole) => {
        const currentUser = get().user;
        if (currentUser) {
          set({ user: { ...currentUser, role } });
        }
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
      },

      updateProfile: (updates: Partial<User>) => {
        const currentUser = get().user;
        if (currentUser) {
          set({ user: { ...currentUser, ...updates } });
        }
      },
    }),
    {
      name: "auth-storage",
    },
  ),
);
