drop database bookshop;
create database bookshop;
use bookshop;
create table users(
	email varchar(50) primary key,
    name varchar(50),
    address varchar(50) ,
    tel varchar(10),
    pwd varchar(50) not null,
    privilege boolean default 0,
    profile_pic longblob
); 
create table books(
	bookID integer primary key,
    title varchar(50),
    ISBN varchar(50),
    author varchar(50),
    buying_price DOUBLE,
    selling_price DOUBLE,
    category varchar(20),
    quantity integer,
    discount double,
    description VARCHAR(100),
    book_pic longblob
);
create table rates(
	rateID integer primary key,
    bookID integer,
    email varchar(50),
    rate_value integer,
    foreign key(bookID) references books(bookID),
    foreign key(email) references users(email)    
);
create table cart(
	cartID integer primary key,
    bookID integer,
    quantity integer,
    email varchar(50),
    foreign key(bookID) references books(bookID),
    foreign key(email) references users(email)        
);
create table orders(
	order_id integer primary key,
    date Date,
    cartID integer,
    foreign key(cartID) references cart(cartID)    
);