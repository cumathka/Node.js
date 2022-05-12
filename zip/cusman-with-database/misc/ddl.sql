create database cusman;

CREATE TABLE IF NOT EXISTS customer (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    last_name varchar(50),
    first_name varchar(50),
    country varchar(50)
);

insert into customer values(null, "coders", "hi", "switzerland");
insert into customer values(null, "müller", "hans", "deutschland");
insert into customer values(null, "smith", "john", "england");


CREATE TABLE IF NOT EXISTS engineer (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    last_name varchar(50),
    first_name varchar(50),
    workload TINYINT
);

insert into engineer values(null, "yalili", "nazif", 20);
insert into engineer values(null, "temiz", "ismail", 20);
insert into engineer values(null, "yilmaz", "nüseybe", 20);
insert into engineer values(null, "bora", "enes", 20);


CREATE TABLE IF NOT EXISTS task (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title varchar(100),
    deadline DATETIME,
    done TINYINT
);

insert into task values(null, "add picture", "2022-05-01 10:00:00", 0);
insert into task values(null, "add text", "2022-05-01 10:00:00", 1);
insert into task values(null, "test the form", "2022-05-01 10:00:00", 0);
insert into task values(null, "acreate a link", "2022-05-01 10:00:00", 1);

CREATE TABLE IF NOT EXISTS website (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(100),
    url varchar(100)
);

insert into website values(null, "hicoders", "https://hicoders.ch");
insert into website values(null, "designbees", "https://designbees.ch");
insert into website values(null, "psy4asyl", "https://psy4asyl.ch");
