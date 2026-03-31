create database EnderecoViaApi;
use EnderecoViaApi;

create table Endereco(
Id int primary key auto_increment,
CEP varchar(10) not null,
Estado varchar(70) not null,
Cidade varchar(70) not null,
Bairro varchar(70) not null,
Logradouro varchar(150) not null,
Complemento varchar(150) not null,
Numero varchar(15) not null
);