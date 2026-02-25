import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AuthState, User } from '@/types/auth';
import { RootState } from '@/lib/store';
import { deleteCookie } from 'cookies-next';

interface UserActions {
  user?: User | null;
  token?: string | null;
  accessToken?: string | null;
  email?: string | null;
  isVerified?: boolean;
  refreshToken?: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  portalType: 'CUSTOMER',
  email: null,
  isVerified: false,
  refreshToken: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<UserActions>) => {
      if (action.payload.user) {
        state.user = action.payload.user;
      }
      if (action.payload.token || action.payload.accessToken) {
        state.token = action.payload.token || action.payload.accessToken || null;
        state.refreshToken = action.payload.refreshToken || null;
      }
      if (action.payload.email) {
        state.email = action.payload.email;
      }
      if (action.payload.isVerified !== undefined) {
        state.isVerified = action.payload.isVerified;
      }
      state.isAuthenticated = true;
    },
    logout: (state) => {
      if (typeof window !== 'undefined') {
        document.cookie.split(';').forEach((cookie) => {
          const eqPos = cookie.indexOf('=');
          const name = eqPos > -1 ? cookie.slice(0, eqPos).trim() : cookie.trim();
          if (name) deleteCookie(name);
        });
        localStorage.clear();
        sessionStorage.clear();
      }

      // Reset state
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.portalType = 'CUSTOMER';
      state.email = null;
      state.isVerified = false;
      state.refreshToken = null;
    },
  },
});

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectToken = (state: RootState) => state.auth.token;
export const selectPortalType = (state: RootState) => state.auth.portalType;
export const selectEmail = (state: RootState) => state.auth.email;
export const selectIsVerified = (state: RootState) => state.auth.isVerified;
export const selectRefreshToken = (state: RootState) => state.auth.refreshToken;

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
