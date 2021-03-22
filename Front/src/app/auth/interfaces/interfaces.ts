export interface AuthResponse {
  ok: boolean;
  uid?: string;
  name?: string;
  surname?: string;
  email?: string;
  token?: string;
  msg?: string;
  roles?: [];
}
export interface Usuario {

  uid?: string;
  name?: string;
  surname?: string;
  email?: string;
  roles?: [];
}
