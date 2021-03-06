import { Application } from 'express';
import { SocketDotIO } from 'socket.io';
import { addBook, getBook, updateBook, deleteBook ,getUser} from '../controllers/admin.controller';

export const adminRoutes = (app: Application, io: SocketIO.Server) => {
  app.route('/api/v1/admin/book')
  .post(addBook)
  .get(getBook)
  .put(updateBook)
  .delete(deleteBook);

  app.route('/api/v1/admin/user/:email')
  .get(getUser)
  

}//test commit
