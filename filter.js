const produtos = [
{nome: 'Notwbook', preco: 2499, fragil: true},
{nome: 'ipad pro', preco: 4199, fragil: true},
{nome: 'Copo de Vidro', preco: 12.49, fragil: true},
{nome: 'Copo de Poastico', preco: 18.99, fragil: false},
]

const socarosefrageis = produtos.filter(p => p.preco >= 2000 && (fragil = true))

console.log(socarosefrageis)

