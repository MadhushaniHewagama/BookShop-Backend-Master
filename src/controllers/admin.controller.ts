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

    const get_book_query = "select title, ISBN, author, buying_price,selling_price, category, discount, description, book_pic,quantity from books where bookID = ?";


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


export const updateBook = (req: Request, res: Response) => {
    console.log("pic:::" + JSON.stringify(req.body))
    // Example query that you can execute to get all the users from database
    const update_user_query = "update books set title=?, ISBN=?, author=?, buying_price=?,selling_price=?, category=?, discount=?, description=?, book_pic=?,quantity=?  where bookID=?";
    Mysql.getPool().query(update_user_query, [req.body.title, req.body.ISBN, req.body.author, req.body.buying_price,req.body.selling_price,req.body.category,req.body.discount,req.body.description,req.body.book_pic,req.body.quantity,req.body.bookID], (err: any, results: any) => {
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
export const deleteBook= (req: Request, res: Response) => {

    const delete_book_query = "delete from books where bookID = ?";
    Mysql.getPool().query(delete_book_query, [req.query.bookID], (err:any, results: any) => {
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

export const getUser= (req: Request, res: Response) => {
    const get_user_query = "select  u.name,u.address,u.tel,u.email,u.profile_pic,b.title,c.quantity,c.date_time,b.selling_price from cart_product c left outer join books b on c.bookID=b.bookID left outer join users u on c.email=u.email where c.status=1 and u.email=?";

    Mysql.getPool().query(get_user_query, [req.params.email], (err:any, results: any) => {
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