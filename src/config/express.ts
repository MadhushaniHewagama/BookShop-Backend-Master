import morgan from 'morgan';
import bodyParser from 'body-parser';
import { ErrorRequestHandler, NextFunction, Response, Request, Application } from 'express';
import express from 'express';
import http, { Server } from 'http';
import MySQL from './db';

import { adminRoutes } from '../routes/admin.route';


const findRemoveSync = require('find-remove');
const path = require('path');


/**
* @description - initializing application configurations and middle layers
*/


  setInterval(() => {
    findRemoveSync(path.join(__dirname, '/../../src/documents'), { files: '*.*', age: { seconds: 600 } });
  }, 600); // every 1 minutes delete 1 min older files
  
  const server = http.createServer(app);

  return {server, io};
 }


 /**
 * @desc - setup db connection and models
 */
const initDbConfigs = () => {
  new MySQL();
}

/**
* @desc - initialize the all sever routes (REST end points);
*/
const initializeServerRoutes = (app: Application, io: socketDotIO.Server) => {
  adminRoutes(app,io); // setting up admin routes
}



/**
* @desc - initialize the application
*/
export const init = (): {server: Application, io: socketDotIO.Server} => {
  const app: Application = express();  
  initDbConfigs();
  initializeServerRoutes(app, io);
  return {server, io};
}
