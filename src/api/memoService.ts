import service from './config/request'
import type { PageParam, PageResult } from '@/api/config/commonTypes'

export default class MemoService {
  static async getUserMemo(username: string): Promise<MemoGetOutputDTO[]> {
    return service
      .post(
        `/api/memo/getUserMemo`,
        { username },
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }
      )
      .then(response => response.data)
  }

  static async addMemo(inputDTO: MemoAddInputDTO): Promise<string> {
    return service.post('/api/memo/addMemo', inputDTO).then(response => response.data)
  }

  static async updateMemo(inputDTO: MemoUpdateInputDTO): Promise<void> {
    return service.post('/api/memo/updateMemo', inputDTO)
  }

  static async deleteMemo(id: string): Promise<void> {
    return service.post('/api/memo/deleteMemo', null, {
      params: {
        id
      }
    })
  }

  static async queryMemo(param: PageParam<MemoQueryParam>): Promise<PageResult<MemoQueryResult>> {
    return await service.post('/api/memo/queryMemo', param).then(response => response.data)
  }
}

export interface MemoGetOutputDTO {
  tag: string
  contentList: MemoGetOutputDTOContent[]
}

export interface MemoGetOutputDTOContent {
  title: string
  content: string
}

export interface MemoAddInputDTO {
  title: string
  content: string
  tag: string
  priority: number
}

export interface MemoUpdateInputDTO {
  id: string
  title: string
  content: string
  tag: string
  priority: number
}

// 查询备忘录参数类型
export interface MemoQueryParam {
  id?: string
  username?: string
  userId?: string
  title?: string
  content?: string
  tag?: string
  priority?: number
  createStartDate?: string
  createEndDate?: string
  updateStartDate?: string
  updateEndDate?: string
}

// 查询备忘录结果类型
export interface MemoQueryResult {
  id: string
  username: string
  userId: string
  title: string
  content: string
  tag: string
  priority: number
  createTime: string
  updateTime: string
}
