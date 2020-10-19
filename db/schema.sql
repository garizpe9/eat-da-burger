###
Schema

use burgers_db;
create table burgers
(
	id int not null
	auto_increment,
burger_name varchar
	(255) Not Null,
devoured Boolean Default false,
primary key
	(id));