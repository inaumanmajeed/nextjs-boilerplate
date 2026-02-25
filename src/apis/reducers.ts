/**
 * Centralized reducer exports
 * Import and export all slice reducers here
 */

import authReducer from '@apis/auth/authSlice';

export const reducers = {
  auth: authReducer,
};
