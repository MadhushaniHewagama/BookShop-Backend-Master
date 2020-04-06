import { Application } from 'express';
//import { SocketDotIO } from 'socket.io';
import { addBook, getBook, updateBook, deleteBook ,getUser,getUsers,getOrders} from '../controllers/admin.controller';

export const adminRoutes = (app: Application, io: SocketIO.Server) => {
  app.route('/api/v1/admin/book')
  .post(addBook)
  .get(getBook)
  .put(updateBook)
  .delete(deleteBook);

  app.route('/api/v1/admin/user/:email')
  .get(getUser);
  
  app.route('/api/v1/admin/users')
  .get(getUsers);

  app.route('/api/v1/admin/orders')
  .get(getOrders);
}//test commit
