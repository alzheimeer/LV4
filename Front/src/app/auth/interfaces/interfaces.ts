export interface AuthResponse {
  ok: boolean;
  uid?: string;
  name?: string;
  surname?: string;
  email?: string;
  token?: string;
  msg?: string;
  roles?: [];
  solicitud?: string;
}
export interface Usuario {

  uid?: string;
  name?: string;
  surname?: string;
  email?: string;
  roles?: [];
  solicitud?: string;
  avatarPath?: string;
}

export interface Role {
  uid?: string;
  name?: string;
}
