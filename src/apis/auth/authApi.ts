import { baseApi } from '@/apis/baseApi';
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  OtpVerificationResponse,
  ResendOtpResponse,
} from '@/types/auth';
import { ApiEndpoints } from '../endpoints';

const { REGISTER, RESEND_OTP, VERIFY_OTP, LOGIN } = ApiEndpoints.AUTH;

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      login: builder.mutation<LoginResponse, LoginRequest>({
        query: (credentials) => ({
          url: LOGIN,
          method: 'POST',
          body: credentials,
        }),
      }),
      register: builder.mutation<RegisterResponse, RegisterRequest>({
        query: (credentials) => ({
          url: REGISTER,
          method: 'POST',
          body: credentials,
        }),
      }),

      resendOtp: builder.query<ResendOtpResponse, void>({
        query: () => ({
          url: RESEND_OTP,
          method: 'GET',
        }),
      }),
      verifyOtp: builder.mutation<OtpVerificationResponse, string>({
        query: (OTP) => ({
          url: VERIFY_OTP(OTP),
          method: 'GET',
        }),
      }),
    };
  },
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useResendOtpQuery,
  useLazyResendOtpQuery,
  useVerifyOtpMutation,
} = authApi;
