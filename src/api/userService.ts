import service from './config/request';

const userService = {
  async register(inputDTO: UserAddInputDTO): Promise<string> {
    await service.post('/api/user/register', inputDTO);
  },

  async updateUserInfo(inputDTO: UserUpdateInputDTO): Promise<void> {
    await service.post('/api/user/updateUserInfo', inputDTO);
  },
  async login(username: string, password: string): Promise<string> {
    await service.post(
      '/api/user/login',
      { username, password },
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      },
    );
  },

  async logout(): Promise<void> {
    await service.post('/api/user/logout');
  },

  async delete(id: string): Promise<void> {
    await service.post('/api/user/delete', null, {
      params: {
        id,
      },
    });
  },

  async getCurrentUserInfo(): Promise<UserInfoGetOutputDTO> {
    return (await service.post('/api/user/getCurrentUserInfo')).data;
  },
};

export default userService;

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
