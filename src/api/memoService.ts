import service from './config/request';

const MemoService = {
  async get(username: string): Promise<any> {
    const response = await service.get('/api/memo/get', { params: { username } });
    return response.data;
  },
};

export default MemoService;
