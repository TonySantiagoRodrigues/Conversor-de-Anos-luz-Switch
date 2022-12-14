let distance = prompt("Qual a distância em anos luz?")

let chosen = prompt("Escolha a unidade de medida\n1. Parsec(pc)\n2. Unidade astrnômica(AU)\n3. Quilômetros")

let chosen0
let dragon

switch(chosen) {
    case "1":
        chosen0 = "Parsec"
        dragon = distance * 0.30660
        break
    case "2":
        chosen0 = "Unidade astronomica"
        dragon = distance * 63241,1
        break
     case "3":
        chosen0 = "Quilometros"
        dragon = distance * 9.5 * Math.pow(10, 12)
       break
    default:
        chosen0 = "Unidade não indentificada"
        dragon = "Conver~sao fora do escopo"
        
}

alert("Distância em Anos-Luz" + distance + "\n" + chosen0 + ": " + dragon)




