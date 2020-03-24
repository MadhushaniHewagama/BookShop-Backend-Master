import { Application } from 'express';
import { SocketDotIO } from 'socket.io';
import { addBook, getBook } from '../controllers/admin.controller';

export const adminRoutes = (app: Application, io: SocketIO.Server) => {
  app.route('/api/v1/admin/book')
  .post(addBook)
  .get(getBook)

}//test commit
