import { Application, Request, Response } from "express";
import Mysql from '../config/db';
import { FieldInfo, MysqlError } from "mysql";

export const login = (req: Request, res: Response) => {
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
   const update_user_query = "update `users` set `profile_pic`=? where `email`=?";

   Mysql.getPool().query(update_user_query, [req.body.profile_pic, req.params.email], (err: any, results: any) => {
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

export const getBook= (req: Request, res: Response) => {

   const get_book_query = "select title, ISBN, author, selling_price, category, discount, description, book_pic, quantity from books where bookID = ?";

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

export const getOrderList = (req: Request, res: Response) => {
   const get_order_list_query = "select  b.title,c.quantity,c.date_time,b.selling_price from cart_product c left outer join books b on c.bookID=b.bookID  where c.email=? and c.status=1 order by c.date_time desc";

   Mysql.getPool().query(get_order_list_query, [req.params.email], (err:any, results: any) => {
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

export const getPaymentList = (req: Request, res: Response) => {
   const get_order_list_query = "select total_price,date from payment where email=? order by date desc";

   Mysql.getPool().query(get_order_list_query, [req.params.email], (err:any, results: any) => {
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

export const getCartItemList = (req: Request, res: Response) => {
   const get_order_list_query = "select  c.cart_product_id,b.title,c.quantity,c.date_time,b.selling_price from cart_product c left outer join books b on c.bookID=b.bookID  where c.email=? and c.status=0 order by c.date_time desc"

   Mysql.getPool().query(get_order_list_query, [req.params.email], (err:any, results: any) => {
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



export const updateCartItemList = (req: Request, res: Response) => {
   
   const update_user_query = "update cart_product set quantity= ?,status=1 where cart_product_id=?";
   Mysql.getPool().query(update_user_query, [req.body.quantity, req.body.cart_product_id], (err: any, results: any) => {
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

export const deleteCartItem = (req: Request, res: Response) => {
  
   const update_user_query = "delete from cart_product where cart_product_id=?";
   Mysql.getPool().query(update_user_query, [req.query.cart_product_id], (err: any, results: any) => {
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

