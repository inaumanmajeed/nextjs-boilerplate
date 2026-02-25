export const ApiEndpoints = {
  // Example endpoints, replace with actual endpoints as needed
  AUTH: {
    REGISTER: '/auth/sign-up',
    LOGIN: '/auth/sign-in',
    VALIDITY_CHECK: (email: string) => `/people/check-account-validity/${email}`,
    RESEND_OTP: '/auth/resend-email',
    VERIFY_OTP: (OTP: string) => `/auth/verify-account/${OTP}`,
    REFRESH_TOKEN: '/auth/regenerate-tokens',
  },
};
