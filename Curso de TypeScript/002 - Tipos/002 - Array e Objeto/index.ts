// tuplas
let array1: [string, string, number, boolean] = [
    "Daniel Alves da Rocha",
    "Teste",
    123,
    false,
  ];
  
  let array2: Array<string | number | boolean> = [
    true,
    "Daniel",
    123,
    "Rocha",
  ];
  
  let obj1: { nome: string; sobrenome: string; idade: number; deuBom: boolean } =
    {
      nome: "Daniel",
      sobrenome: "Rocha",
      idade: 123,
      deuBom: true,
    };
  
  let obj2: Array<{
    nome: string;
    sobrenome: string;
    idade: number;
    deuBom: boolean;
  }> = [
    {
      nome: "Daniel",
      sobrenome: "Rocha",
      idade: 123,
      deuBom: true,
    },
    {
      nome: "Daniel1",
      sobrenome: "Rocha",
      idade: 123,
      deuBom: true,
    },
    {
      nome: "Daniel2",
      sobrenome: "Rocha",
      idade: 456,
      deuBom: false,
    },
  ];
  
  console.log(array1);
  console.log(array2);
  console.log(obj1);
  console.log(obj2);
  