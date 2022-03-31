create schema ecommerce;

use ecommerce;

create table categorias (
			id int primary key auto_increment,
            nome varchar(50) not null
			);

create table produtos (
		id int primary key auto_increment,
        titulo varchar(50) not null,
        preco decimal(10,2) not null,
        descricao varchar(255) not null,
        imagem varchar(255) not null,
        id_categorias int not null,
        foreign key (id_categorias) references categorias (id)
);