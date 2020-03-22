import { Application } from 'express';
import { SocketDotIO } from 'socket.io';
import { addUser } from '../controllers/user.controller';

export const userRoutes = (app: Application, io: SocketIO.Server) => {
  app.route('/api/v1/user')
  .post(addUser)
}//test commit
