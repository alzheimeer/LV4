export interface AuthResponse {
  ok: boolean;
  uid?: string;
  name?: string;
  secondname?: string;
  surname?: string;
  secondsurname?: string;
  email?: string;
  typeloan?: string;
  token?: string;
  msg?: string;
  roles?: [];
  solicitud?: string;
}
export interface Usuario {

  uid?: string;
  name?: string;
  secondname?: string;
  surname?: string;
  secondsurname?: string;
  email?: string;
  typeloan?: string;
  roles?: [];
  solicitud?: string;
  avatarPath?: string;
}

export interface Role {
  uid?: string;
  name?: string;
}
