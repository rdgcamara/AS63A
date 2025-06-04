const { connect } = require("./db.js");
const Logger = require('./logger.js');

class Produto {

    constructor(nome, descricao, quantidade) {
        this.nome = nome;
        this.descricao = descricao;
        this.quantidade = quantidade;
    }

    async inserir() {

        try {

            const { db, client } = await connect();

            const result = await db.collection("produtos").insertOne({
                nome: this.nome,
                descricao: this.descricao,
                quantidade: this.quantidade,
            });

            console.log("Produto inserido:", result.insertedId);
            client.close();

        } catch (error) {
            console.log("Erro ao inserir o produto.");
            Logger.log(error);
        } 
    }

    async atualizarDescricao() {

        try {

            const { db, client } = await connect();

            const result = await db.collection("produtos").updateOne(
                { nome: this.nome },
                { $set: { descricao: this.descricao } },
            );

            console.log("Descrição atualizado");
            client.close();

        } catch (error) {
            console.log("Erro ao atualizar a descrição");
            Logger.log(error);
        } 
    }

        async atualizarQuantidade() {

        try {

            const { db, client } = await connect();

            const result = await db.collection("produtos").updateOne(
                { nome: this.nome },
                { $set: { quantidade: this.quantidade } }
                
            );

            console.log("Quantidade atualizada");
            client.close();

        } catch (error) {
            console.log("Erro ao atualizar a quantidade");
            Logger.log(error);
        } 
    }

    async deletarProduto() {

        try {

            const { db, client } = await connect();

            const result = await db.collection("produtos").deleteOne(
                { nome: this.nome },
            );

            console.log("Produto deletado");
            client.close();

        } catch (error) {
            console.log("Erro ao deletar produto");
            Logger.log(error);
        } 
    }

    async buscarProduto(filtro = {}) {
        try {
            const { db, client } = await connect();
            const usuarios = await
                db.collection("produtos").find(filtro).toArray();
            console.log("Produto encontrados:", usuarios);
            client.close();
        } catch (error) {
            console.log("Erro ao buscar produto");
            Logger.log(error);
        }
    }
}

module.exports = Produto;