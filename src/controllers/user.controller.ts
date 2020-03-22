import { Application, Request, Response } from "express";
import Mysql from '../config/db';
import { FieldInfo, MysqlError } from "mysql";

 export const addUser = (req: Request, res: Response) => {
    // Example query that you can execute to get all the users from database
   const add_user_query = "insert into users(`email`, `name`,`pwd`) values (?,?,?)";
   Mysql.getPool().query(add_user_query, [req.body.email, req.body.name,req.body.pwd],(err:any, results:any) =>
       {if (err) {
          console.log("Error", err);
          res.status(500)
             .json({"error": err});
       } else {
          console.log("Result: ", results);
          res.json(results);
       }
    }
    );
  }