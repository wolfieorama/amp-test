export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  partOfMaxhub: boolean;
  password: string;
  roles: Array<string>;
  username: string;
};
