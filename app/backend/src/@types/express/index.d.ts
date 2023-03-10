type IUserCredentials = {
  email: string;
  role: string;
};

declare namespace Express {
  interface Request {
    user: IUserCredentials
  }
}
