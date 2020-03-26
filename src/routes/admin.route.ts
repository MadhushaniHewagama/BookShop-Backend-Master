import { Application } from 'express';
import { SocketDotIO } from 'socket.io';
import { addBook, getBook,deleteBook } from '../controllers/admin.controller';

export const adminRoutes = (app: Application, io: SocketIO.Server) => {
  app.route('/api/v1/admin/book')
  .post(addBook)
  .get(getBook)
  //.delete(deleteBook)

}//test commit
