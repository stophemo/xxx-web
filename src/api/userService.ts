import service from './config/request'
import { type UserInfo, useUserStore } from '@/stores/userStore'

export default class UserService {
  static async register(inputDTO: UserAddInputDTO): Promise<string> {
    return service.post('/api/user/register', inputDTO).then((res) => {
      const token = res.data
      useUserStore().setToken(token)
      return token
    })
  }

  static async updateUserInfo(inputDTO: UserUpdateInputDTO): Promise<void> {
    await service.post('/api/user/updateUserInfo', inputDTO).then(() => this.getCurrentUserInfo())
  }

  static async login(username: string, password: string): Promise<string> {
    return service
      .post(
        '/api/user/login',
        { username, password },
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }
      )
      .then((res) => {
        const token = res.data
        useUserStore().setToken(token)
        return token
      })
  }

  static async logout(): Promise<void> {
    await service.post('/api/user/logout')
  }

  static async delete(id: string): Promise<void> {
    await service.post('/api/user/delete', null, {
      params: {
        id
      }
    })
  }

  static async getCurrentUserInfo(): Promise<UserInfoGetOutputDTO> {
    return service.post('/api/user/getCurrentUserInfo').then(response => {
      const currentUserInfo = response.data
      if (currentUserInfo) {
        const userInfo: UserInfo = {
          id: currentUserInfo.id,
          email: currentUserInfo.email,
          phone: currentUserInfo.phone,
          name: currentUserInfo.name,
          nickname: currentUserInfo.nickname,
          gender: currentUserInfo.gender,
          avatar: currentUserInfo.avatar,
          status: currentUserInfo.status,
          ordinal: currentUserInfo.ordinal,
          role: currentUserInfo.role
        }
        useUserStore().setUserInfo(userInfo)
      }
      return currentUserInfo
    })
  }

  static async isLogin(): Promise<boolean> {
    return service.post('/api/user/isLogin').then(response => response.data)
  }
}

export interface UserAddInputDTO {
  email?: string
  phone: string
  name: string
  nickname?: string
  password: string
  gender?: number
  avatar?: string
  role?: string
}

export interface UserUpdateInputDTO {
  id: string
  email?: string
  phone?: string
  name?: string
  nickname?: string
  gender?: number
  avatar?: string
  status?: boolean
  ordinal?: number
  role?: string
}

export interface UserInfoGetOutputDTO {
  tokenName: string
  tokenValue: string
  isLogin: boolean
  loginId: any
  loginType: string
  tokenTimeout: number
  sessionTimeout: number
  tokenSessionTimeout: number
  tokenActiveTimeout: number
  loginDevice: string
  tag: string
  alistToken: string
  id: string
  email: string
  phone: string
  name: string
  nickname: string
  gender: number
  avatar: string
  status: boolean
  ordinal: number
  role: string
}
