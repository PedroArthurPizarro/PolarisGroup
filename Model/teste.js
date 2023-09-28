const frutas = [
    {nome: "amora", codigo:"AAA"},
    {nome: "banana", codigo: "BBB"},
    {nome: "cereja", codigo : "CCC"}
]

const frutaAchada = frutas.find(fruta => fruta.nome === "cereja");

console.log(frutaAchada)

if (frutaAchada == undefined) {
    console.log("Deu ruim");
} else {
    console.log("Deu bom");
}