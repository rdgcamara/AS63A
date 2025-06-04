const { connect } = require("./db.js");
const Logger = require('./logger.js');

class Pedidos {

    constructor(nome, produto, quantidade) {
        this.nome = nome;
        this.produto = produto;
        this.quantidade = quantidade;
    }

    async inserirPedido() {

        try {

            const { db, client } = await connect();

            const result = await db.collection("pedidos").insertOne({
                nome: this.nome,
                produto: this.produto,
                quantidade: this.quantidade,
            });

            console.log("Pedido registrado", result.insertedId);
            client.close();

        } catch (error) {
            console.log("Erro ao registrar o pedido.");
            Logger.log(error);
        } 
    }

    async atualizarProdutoPedido() {

        try {

            const { db, client } = await connect();

            const result = await db.collection("pedidos").updateOne(
                { nome: this.nome },
                { $set: { produto: this.produto } },
            );

            console.log("Produto atualizado");
            client.close();

        } catch (error) {
            console.log("Erro ao atualizar produto");
            Logger.log(error);
        } 
    }

        async atualizarQuantidadePedido() {

        try {

            const { db, client } = await connect();

            const result = await db.collection("pedidos").updateOne(
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

    async deletarPedido() {

        try {

            const { db, client } = await connect();

            const result = await db.collection("pedidos").deleteOne(
                { nome: this.nome },
            );

            console.log("Pedido deletado");
            client.close();

        } catch (error) {
            console.log("Erro ao deletar o pedido.");
            Logger.log(error);
        } 
    }

    
    async buscarPedido(filtro = {}) {
        try {
            const { db, client } = await connect();
            const usuarios = await
                db.collection("pedidos").find(filtro).toArray();
            console.log("Produto encontrados:", usuarios);
            client.close();
        } catch (error) {
            console.log("Erro ao buscar produto");
            Logger.log(error);
        }
    }
}

module.exports = Pedidos;