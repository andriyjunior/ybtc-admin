export const endpoints = {
  initial: "initial",
  auth: {
    signIn: "auth/signin",
    signUp: "auth/signup",
  },
  page: "page",
  pages: "pages",
  pageByName(name: string) {
    return `${this.page}/${name}`;
  },
};
