import { Application } from 'express';
import { SocketDotIO } from 'socket.io';
import { login,getUser,addUser, updateUser, addProfilePic } from '../controllers/user.controller';

export const userRoutes = (app: Application, io: SocketIO.Server) => {
  app.route('/api/v1/user/login')
  .get(login)
  app.route('/api/v1/user')
  .get(getUser)
  .post(addUser)
  .put(updateUser);

  app.route('/api/v1/user/:email/profile')
  .put(addProfilePic);
}//test commit
