export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  fullName: string;
  username: string;
  email: string;
  phoneNumber: string;
  userType: string;
  password: string;
  confirmPassword: string;
}

export interface AuthUser {
  id: number;
  fullName: string;
  username: string;
  email: string;
  roles?: string[];
}

export interface AuthResponse {
  token: string;
  user: AuthUser;
}
