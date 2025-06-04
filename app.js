const Usuario = require("./usuario.js");
const Produto = require("./produto.js");
const Pedidos = require("./pedidos.js");

async function testarInsercao() {
    const user = new Usuario("Monique", "monique@example.com", "123456");
    await user.inserir();
}

async function testarAtualizarEmail() {
    const user = new Usuario("Monique", "monique@gmail.com");
    await user.atualizarEmail();
}

async function testarAtualizarSenha() {
    const user = new Usuario("Monique", "monique@gmail.com", "6543321");
    await user.atualizarSenha();
}

async function testarDeletarUsuario() {
    const user = new Usuario("Monique");
    await user.deletarUsuario();
}

async function testarBuscarUsuario() {
    const user = new Usuario("Monique");
    await user.buscarUsuario();
}

async function testarInsercaoProduto() {
    const user = new Produto("Ar Condicionado", "Quente/Frio", "5");
    await user.inserir();
}

async function testarAtualizarDescricao() {
    const user = new Produto("Ar Condicionado", "Somente frio");
    await user.atualizarDescricao();
}

async function testarAtualizarQuantidade(){ 
    const user = new Produto("Ar Condicionado", "Somente frio", "2");
    await user.atualizarQuantidade();
}

async function testarDeletarProduto() {
    const user = new Produto("Ar Condicionado");
    await user.deletarProduto();
}

async function testarBsucarProduto() {
    const user = new Produto("Ar Condicionado");
    await user.buscarProduto();
}


async function testarInsercaoPedidos() {
    const user = new Pedidos("Alex", "Biela", "2");
    await user.inserirPedido();
}

async function testarAtualizarProdutoPedidos() {
    const user = new Pedidos("Alex", "Bobina");
    await user.atualizarProdutoPedido();
}

async function testarAtualizarQuantidadePedidos() {
    const user = new Pedidos("Alex", "Bobina", "5");
    await user.atualizarQuantidadePedido();
}

async function testarDeletarPedido() {
    const user = new Pedidos("Alex");
    await user.deletarPedido();
}

async function testarBuscarPedido() {
    const user = new Pedidos("Alex");
    await user.buscarPedido();
}


testarInsercaoPedidos();