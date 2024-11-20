import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: (): {
    userInfo: UserInfo | null;
    token: string;
  } => ({
    userInfo: null,
    token: '',
  }),
  actions: {
    setUserInfo(info: UserInfo) {
      this.userInfo = info;
    },
    setToken(s: string) {
      this.token = s;
    },
  },
  persist: {
    key: 'user-store',
    storage: sessionStorage,
  },
});

export interface UserInfo {
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
