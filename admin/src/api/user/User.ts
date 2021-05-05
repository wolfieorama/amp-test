export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  partOfMaxhub: boolean;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
