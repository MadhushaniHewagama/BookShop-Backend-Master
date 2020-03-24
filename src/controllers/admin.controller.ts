import Mysql from "../config/db";
import { Application, Request, Response } from "express";

export const addBook=(req:Request, res:Response) => {

    const add_book_query = "insert into books (`title`, `ISBN`, `author`, `buying_price`, `selling_price`, `category`, `quantity`, `discount`, `description`,`book_pic`) values (?,?,?,?,?,?,?,?,?,?)";
    Mysql.getPool().query(add_book_query, [req.body.title, req.body.ISBN, req.body.author, req.body.buying_price, req.body.selling_price, req.body.category, req.body.quantity, req.body.discount, req.body.description, req.body.book_pic],(err:any, results:any) => {
        if(err){
            console.log("Error", err);
            res.status(500)
               .json({ "error": err });
        }else{
            console.log("Result: ", results);
            res.json(results);
        }
    });

}

export const getBook= (req: Request, res: Response) => {

    const get_book_query = "select title, ISBN, author, buying_price, category, discount, description where bookID = ?";

    Mysql.getPool().query(get_book_query, [req.query.bookID], (err:any, results: any) => {
        if(err){
            console.log("Error", err);
            res.status(500)
               .json({ "error": err });
        }else{
            console.log("Result: ", results);
            res.json(results);
        }
    });

}