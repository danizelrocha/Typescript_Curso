enum Mes {
    JAN = "Janeiro",
    FEV = "Fevereiro",
    MAR = "Março",
    ABR = "Abril",
    MAI = "Maio",
    JUN = "Junho",
    JUL = "Julho",
    AGO = "Agosto",
    SET = "Setembro",
    OUT = "Outubro",
    NOV = "Novembro",
    DEZ = "Dezembro",
  }
                    // isso é um tipo
  const pessoa: { nome: string; mesAniversario: string } = {
    nome: "Daniel",
    mesAniversario: Mes.DEZ,
  };
  
  if (pessoa.mesAniversario === Mes.DEZ) {
    console.log(pessoa);
  }
  