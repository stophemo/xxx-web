import service from './config/request';

class MemoService {
  async get(username: string): Promise<MemoGetOutputDTO[]> {
    return service.get(`/api/memo/get?username=${username}`).then((response) => response.data);
  }

  async add(inputDTO: MemoAddInputDTO): Promise<string> {
    return service.post('/api/memo/add', inputDTO).then((response) => response.data);
  }

  async update(inputDTO: MemoUpdateInputDTO): Promise<void> {
    return service.post('/api/memo/update', inputDTO);
  }

  async delete(id: string): Promise<void> {
    return service.post('/api/memo/del', null, {
      params: {
        id,
      },
    });
  }

  async query(param: any): Promise<any> {
    return service.post('/api/memo/query', param).then((response) => response.data);
  }
}

export default new MemoService();

export interface MemoGetOutputDTO {
  tags: string;
  contentList: MemoGetOutputDTOContent[];
}

export interface MemoGetOutputDTOContent {
  title: string;
  content: string;
}

export interface MemoAddInputDTO {
  title: string;
  content: string;
  tags: string;
  priority: number;
}

export interface MemoUpdateInputDTO {
  id: string;
  title: string;
  content: string;
  tags: string;
  priority: number;
}
