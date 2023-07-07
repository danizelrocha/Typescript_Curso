/*
Para gerar esta pasata de JS  dentro do terminal 
Typescript_Curso\Curso de TypeScript\002 - Tipos\010 - Enum> 
Devemos rodar o seguinte comando para gerar o arquivo 
tsc index.ts  - ficando desta forma
Typescript_Curso\Curso de TypeScript\002 - Tipos\010 - Enum> tsc index.ts
É criada um arquivo de JS - uma gambiarra - é uma forma do JS criar o próprio nome dele 
observe o código a baixo e compila o código.
*/

var Mes;
(function (Mes) {
    Mes["JAN"] = "Janeiro";
    Mes["FEV"] = "Fevereiro";
    Mes["MAR"] = "Mar\u00E7o";
    Mes["ABR"] = "Abril";
    Mes["MAI"] = "Maio";
    Mes["JUN"] = "Junho";
    Mes["JUL"] = "Julho";
    Mes["AGO"] = "Agosto";
    Mes["SET"] = "Setembro";
    Mes["OUT"] = "Outubro";
    Mes["NOV"] = "Novembro";
    Mes["DEZ"] = "Dezembro";
})(Mes || (Mes = {}));
// isso é um tipo
var pessoa = {
    nome: "Daniel",
    mesAniversario: Mes.DEZ,
};
if (pessoa.mesAniversario === Mes.DEZ) {
    console.log(pessoa);
}
