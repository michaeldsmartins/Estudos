/*Array.prototype.forEach2 = function(callback)  {
    for (let p = 0; p < this.length ; p++) {
        callback(this[p], p, this)
    }
}
const aprovados = ['agatha','aldo','dadinel','raquel']
aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1} ${nome}`)
}) */


const nums = [1,2,3,4,5]
let results = nums.map(e => e * 2)
 console.log(results)