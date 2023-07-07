/*
  public -      Pode ser acessado tanto pela mesma classe, 
                classes filhas e outras classes.
  ##############################################################################
  protected -   Pode ser acessado pela mesma classe e classes filhas, 
                não pode ser acessado por outras classes.
  ##############################################################################
  private -     Pode ser acessada somente pela própria classe.
*/

class Pessoa {
    protected nome: string = "";
    protected idade: number = 0;
  
    constructor(nome: string, idade: number) {
      this.nome = nome;
      this.idade = idade;
    }
  
    public comer(comida: string) {
      return `O ${this.nome} comeu ${comida}`;
    }
  
    public fezAniversario() {
      return `O ${this.nome} fez tantos anos ${++this.idade}`;
    }
  }
  
  class Daniel extends Pessoa {
    private profissao: string = "Programador";
  
    constructor() {
      super("Daniel", 31);
    }
  
    public getProfissao() {
      return `${this.nome} trabalha como ${this.profissao}`;
    }
  }
  
  const daniel = new Daniel();
  console.log(daniel.getProfissao());
  
  class Manuela extends Pessoa {
    constructor() {
      super("Manuela", 12);
    }
  }
  
  const manuela = new Manuela();
  