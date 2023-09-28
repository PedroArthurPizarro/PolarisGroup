DROP DATABASE IF exists nomesenhas
CREATE DATABASE nomesenhas
USE nomesenhas;

CREATE TABLE senhas(
    id_senha INT(8) NOT NULL AUTO_INCREMENT,

    PRIMARY KEY(id_senha) 
);

CREATE TABLE nomes(
    id_nome INT(50) NOT NULL AUTO_INCREMENT,

    PRIMARY KEY(id_nome)
);
