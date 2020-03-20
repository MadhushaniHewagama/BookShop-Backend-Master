import { Application } from 'express';
import { SocketDotIO } from 'socket.io';

export const adminRoutes = (app: Application, io: SocketIO.Server) => {
  app.route('/api/v1/admin')
    
}//test commit
