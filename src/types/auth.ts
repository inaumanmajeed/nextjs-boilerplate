export interface User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  timeZone: string;
  stripeCusId?: string;
  status: string;
  isVerified: boolean;
  fromGoogle: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  portalType: string;
  email: string | null;
  isVerified: boolean;
  refreshToken: string | null;
}

export interface LoginRequest {
  email: string;
  password: string;
  portalType: string;
  timeZone: string;
}

export interface LoginResponse {
  portalType: string;
  accessToken: string;
  isVerified: boolean;
  profile: User | null;
  email: string;
  refreshToken: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  portalType: string;
  role: string;
  timeZone: string;
  firstName: string;
  lastName: string;
}

export interface RegisterResponse {
  portalType: string;
  accessToken: string;
  isVerified: boolean;
  email: string;
}

export interface CheckAccountValidityResponse {
  isVerified: boolean;
}

export interface OtpVerificationResponse {
  statusCode: number;
  message: string;
  error?: string;
}

export interface ResendOtpResponse {
  statusCode: number;
  message: string;
  error?: string;
}
