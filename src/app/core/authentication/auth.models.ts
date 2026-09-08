export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  tokenType?: string;
  username?: string;
  roles?: string[];
}

export interface RegisterRequest {
  fullName: string;
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterApiRequest {
  fullName: string;
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export interface RegisterResponse {
  id?: number;
  fullName?: string;
  username?: string;
  email?: string;
  phoneNumber?: string;
  roles?: string[];
  message?: string;
}