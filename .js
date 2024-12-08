function fincionarouNAo(valor, chancedeErro) {
    return new Promise((resolve, reject) => {
        if(Math.random()< chanceErro) {
            reject('ocorreu um  erro!') 
        } else {
            resolve(valor)
        }
    })
}


funcionarouNAo('testando ...', 0.1)
   .then(v  => console.log(`valor: ${V}`))
   .chatch(err => console.log(`erro: ${err}`))
   .then(() => console.log('fim'))