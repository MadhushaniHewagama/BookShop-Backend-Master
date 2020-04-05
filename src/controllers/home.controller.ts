import { Application, Request, Response } from "express";
import Mysql from '../config/db';
import { FieldInfo, MysqlError } from "mysql";

 export const getBooks = (req: Request, res: Response) => {
   // Example query that you can execute to get all the users from database
   Mysql.getPool().query("select * from books", (err: MysqlError, results: any) => {
      if (err) {
         console.log("Error", err);
         res.status(500)
            .json({"error": err});
      } else {
         console.log("Result: ", results);
         res.json(results);
      }
   });
 }


  export const getCart = (req: Request, res: Response) => {
    const get_user_query = "select b.title,c.quantity,b.selling_price from cart_product c left outer join books b on c.bookID=b.bookID where c.email=? and c.status='0'";
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
 
 export const getTotal = (req: Request, res: Response) => {
    const get_user_query = "select  sum(b.selling_price * c.quantity) as total from cart_product c left outer join books b on c.bookID=b.bookID where c.email=? and c.status='0'";
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
 
 export const addCart = (req: Request, res: Response) => {
    // Example query that you can execute to get all the users from database
    const add_user_query = "insert into cart_product(`bookID`, `quantity`,`email`) values (?,?,?)";
    Mysql.getPool().query(add_user_query, [req.body.bookID, req.body.quantity, req.body.email], (err: any, results: any) => {
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