import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: (): { userInfo: UserInfo | null } => ({
    userInfo: null,
  }),
  actions: {
    setUserInfo(info: UserInfo) {
      this.userInfo = info;
    },
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
