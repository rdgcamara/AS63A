const { connect } = require("./db.js");
const Logger = require('./logger.js');

class Usuario {

    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    async inserir() {

        try {

            const { db, client } = await connect();

            const result = await db.collection("usuarios").insertOne({
                nome: this.nome,
                email: this.email,
                senha: this.senha,
            });

            console.log("Usuário inserido:", result.insertedId);
            client.close();

        } catch (error) {
            console.log("Erro ao inserir usuário");
            Logger.log(error);
        }
    }

    async atualizarEmail() {

        try {

            const { db, client } = await connect();

            const result = await db.collection("usuarios").updateOne(
                { nome: this.nome },
                { $set: { email: this.email } },
            );

            console.log("Email atualizado");
            client.close();

        } catch (error) {
            console.log("Erro ao atualizar o email");
            Logger.log(error);
        }
    }

    async atualizarSenha() {

        try {

            const { db, client } = await connect();

            const result = await db.collection("usuarios").updateOne(
                { nome: this.nome },
                { $set: { senha: this.senha } },

            );

            console.log("Senha atualizada");
            client.close();

        } catch (error) {
            console.log("Erro ao atualizar a senha");
            Logger.log(error);
        }
    }

    async deletarUsuario() {

        try {

            const { db, client } = await connect();

            const result = await db.collection("usuarios").deleteOne(
                { nome: this.nome },
            );

            console.log("Usuario deletado");
            client.close();

        } catch (error) {
            console.log("Erro ao deletar usuario");
            Logger.log(error);
        }
    }


    async buscarUsuario(filtro = {}) {
        try {
            const { db, client } = await connect();
            const usuarios = await
                db.collection("usuarios").find(filtro).toArray();
            console.log("Usuário encontrados:", usuarios);
            client.close();
        } catch (error) {
            console.log("Erro ao buscar usuário");
            Logger.log(error);
        }
    }
}

module.exports = Usuario;