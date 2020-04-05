

import { Application } from 'express';
import { SocketDotIO } from 'socket.io';
import { getBooks } from '../controllers/home.controller';

export const homeRoutes = (app: Application, io: SocketIO.Server) => {
  
  app.route('/api/v1/home')
    .get(getBooks);
}//test commit
