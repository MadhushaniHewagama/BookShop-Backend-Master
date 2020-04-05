

import { Application } from 'express';
import { SocketDotIO } from 'socket.io';
import { getBooks,getCart ,getTotal,addCart} from '../controllers/home.controller';

export const homeRoutes = (app: Application, io: SocketIO.Server) => {
  
  app.route('/api/v1/home')
    .get(getBooks);
app.route('/api/v1/cart')
    .get(getCart)
    .post(addCart)
    app.route('/api/v1/cart/total')
    .get(getTotal)
}//test commit
