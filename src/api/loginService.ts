import service from './config/request';

const LoginService = {
  async login(username: string, password: string): Promise<void> {
    await service.post('/api/user/login', { username, password }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded', // 设置为 JSON 格式
      },
    });
  },
};

export default LoginService;
