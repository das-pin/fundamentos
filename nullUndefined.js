let valor // nao inicializada
console.log(valor)

valor = null // ausencia de valor
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco) // O valor do atributo 'preco' nao foi definido
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // Sem preco 
console.log(!!produto.preco)
console.log(produto)