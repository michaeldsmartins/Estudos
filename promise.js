function lerAquivo(caminho) {
    return new Promise(resolve => {
        false.readFilr(caminho, function(_, conteudo) {
          resolve(conteudo.toString())
    })
   console.log('depois de ler')
})


}

const caminho =path.join(__dirname< 'dados.txt')

lerArquivo(caminho)
   .then(conteudo => console.log(conteudo))


   