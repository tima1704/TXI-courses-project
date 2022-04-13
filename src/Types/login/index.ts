export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginRes {
  jwt: string;
}

export interface IUser {
  confirmedEmail: null | boolean;
  created_at: string;
  email: string;
  facebook_id: string;
  id: string;
  location: string;
  name: string;
  phone: string;
  pic: string;
  status_audio: null | boolean;
  updated_at: string;
}

export interface IUserRes extends IUser {
  jwt?: string;
}
