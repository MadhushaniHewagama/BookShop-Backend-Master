import { Application } from 'express';
import { SocketDotIO } from 'socket.io';
import { addBook } from '../controllers/admin.controller';

export const adminRoutes = (app: Application, io: SocketIO.Server) => {
  app.route('/api/v1/admin/book')
  .post(addBook)
    
}//test commit
