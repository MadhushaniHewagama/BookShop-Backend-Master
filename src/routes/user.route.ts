import { Application } from 'express';
import { SocketDotIO } from 'socket.io';
import { getUser,addUser, updateUser, addProfilePic } from '../controllers/user.controller';

export const userRoutes = (app: Application, io: SocketIO.Server) => {
  app.route('/api/v1/user')
  .get(getUser)
  .post(addUser)
  .put(updateUser);
  app.route('/api/v1/user/profile_pic')
  .put(addProfilePic);
}//test commit
