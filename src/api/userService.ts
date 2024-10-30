import service from './config/request';

export default class UserService {
  static async register(inputDTO: UserAddInputDTO): Promise<string> {
    return service.post('/api/user/register', inputDTO).then((response) => response.data);
  }

  static async updateUserInfo(inputDTO: UserUpdateInputDTO): Promise<void> {
    await service.post('/api/user/updateUserInfo', inputDTO);
  }

  static async login(username: string, password: string): Promise<string> {
    return service
      .post(
        '/api/user/login',
        { username, password },
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        },
      )
      .then((response) => response.data);
  }

  static async logout(): Promise<void> {
    await service.post('/api/user/logout');
  }

  static async delete(id: string): Promise<void> {
    await service.post('/api/user/delete', null, {
      params: {
        id,
      },
    });
  }

  static async getCurrentUserInfo(): Promise<UserInfoGetOutputDTO> {
    return service.post('/api/user/getCurrentUserInfo').then((response) => response.data);
  }
}

export interface UserAddInputDTO {
  email: string;
  phone: string;
  name: string;
  nickname: string;
  password: string;
  gender: number;
  avatar: string;
  role: string;
}

export interface UserUpdateInputDTO {
  id: string;
  email?: string;
  phone?: string;
  name?: string;
  nickname?: string;
  gender?: number;
  avatar?: string;
  status?: boolean;
  ordinal?: number;
  role?: string;
}

export interface UserInfoGetOutputDTO {
  tokenName: string;
  tokenValue: string;
  isLogin: boolean;
  loginId: any;
  loginType: string;
  tokenTimeout: number;
  sessionTimeout: number;
  tokenSessionTimeout: number;
  tokenActiveTimeout: number;
  loginDevice: string;
  tag: string;
  alistToken: string;
  id: string;
  email: string;
  phone: string;
  name: string;
  nickname: string;
  gender: number;
  avatar: string;
  status: boolean;
  ordinal: number;
  role: string;
}
