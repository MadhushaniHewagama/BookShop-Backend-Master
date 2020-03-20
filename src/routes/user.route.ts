import { Application } from 'express';
import { SocketDotIO } from 'socket.io';

export const userRoutes = (app: Application, io: SocketIO.Server) => {
  app.route('/api/v1/user')
}//test commit
