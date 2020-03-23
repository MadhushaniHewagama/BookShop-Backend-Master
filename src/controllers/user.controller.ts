import { Application, Request, Response } from "express";
import Mysql from '../config/db';
import { FieldInfo, MysqlError } from "mysql";

export const login = (req: Request, res: Response) => {
   const get_user_query = "select pwd,privilege from users where email=?";
   // Example query that you can execute to get all the users from database
   Mysql.getPool().query(get_user_query, [req.query.email], (err: any, results: any) => {
      if (err) {
         console.log("Error", err);
         res.status(500)
            .json({ "error": err });
      } else {
         console.log("Result: ", results);
         res.json(results);
      }
   });
}
export const addUser = (req: Request, res: Response) => {
   // Example query that you can execute to get all the users from database
   const add_user_query = "insert into users(`email`, `name`,`pwd`) values (?,?,?)";
   Mysql.getPool().query(add_user_query, [req.body.email, req.body.name, req.body.pwd], (err: any, results: any) => {
      if (err) {
         console.log("Error", err);
         res.status(500)
            .json({ "error": err });
      } else {
         console.log("Result: ", results);
         res.json(results);
      }
   }
   );
}
export const getUser = (req: Request, res: Response) => {
   const get_user_query = "select * from users where email=?";
   // Example query that you can execute to get all the users from database
   Mysql.getPool().query(get_user_query, [req.query.email], (err: any, results: any) => {
      if (err) {
         console.log("Error", err);
         res.status(500)
            .json({ "error": err });
      } else {
         console.log("Result: ", results);
         res.json(results);
      }
   });
}

export const updateUser = (req: Request, res: Response) => {
   console.log("pic:::" + JSON.stringify(req.body))
   // Example query that you can execute to get all the users from database
   const update_user_query = "update users set name= ?,address=?,tel=? where email=?";
   Mysql.getPool().query(update_user_query, [req.body.name, req.body.address, req.body.tel, req.body.email], (err: any, results: any) => {
      if (err) {
         console.log("Error", err);
         res.status(500)
            .json({ "error": err });
      } else {
         console.log("Result: ", results);
         res.json(results);
      }
   }
   );
}
export const addProfilePic = (req: Request, res: Response) => {
   // Example query that you can execute to get all the users from database
   console.log("pic:::" + JSON.stringify(req.body))
   const update_user_query = "update users set profile_pic=? where `email`=?";

   Mysql.getPool().query(update_user_query, [req.body.profile_pic, req.body.email], (err: any, results: any) => {
      if (err) {
         console.log("Error", err);
         res.status(500)
            .json({ "error": err });
      } else {
         console.log("Result: ", results);
         res.json(results);
      }
   }
   );
}


