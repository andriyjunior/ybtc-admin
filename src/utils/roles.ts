import { ROLE_ADMIN, ROLE_MODERATOR } from "const";

export const checkOnRole = {
  isAdmin(userRoles: string[]) {
    return userRoles.includes(ROLE_ADMIN);
  },

  isModerator(userRoles: string[]) {
    return userRoles.includes(ROLE_MODERATOR);
  },
};
