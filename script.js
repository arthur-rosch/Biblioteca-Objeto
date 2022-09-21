// 5. Adicione na classe Biblioteca um método de empréstimo de um livro, deve ser
// passado como parâmetro o nome do livro, então verificar a disponibilidade e se
// estiver disponível retornar true e trocar o valor da propriedade do livro para false, se
// não estiver disponível retornar false.
// 6. Adicione na classe Biblioteca um método de devolução de um livro, deve ser
// passado como parâmetro o nome do livro, então trocar o valor da propriedade de
// disponibilidade desse livro para true;
// 7. Crie um objeto da classe Biblioteca e chame seus métodos.
let livros = [],
  bibliotecas = [];
class Livro {
  Titulo;
  Autor;
  Editora;
  Ano;
  Disponibilidade;
}
class Biblioteca {
  Nome;
  Endereco;
  Telefone;

  BuscarLivro(NomeLivro) {
    console.log(NomeLivro);
    livros.forEach((livro) => {
      if (NomeLivro == livro.Titulo) {
        alert(
          `Titulo: ${livro.Titulo} Autor:${livro.Autor} Editora:${livro.Editora} Ano:${livro.Ano} Disponibilidade: ${livro.Disponibilidade}`
        );
      } else {
        alert("Livro Invalido");
      }
    });
  }
}
let loop = true;
while (loop) {
  var choice = Number(
    prompt(
      "1-Cadastrar Livro \n2-Cadastrar Biblioteca \n3-Buscar Livro\n5-Sair"
    )
  );
  switch (choice) {
    case 1:
      addLivro();
      break;
    case 2:
      addBiblioteca();
      break;
    case 3:
      const livro = prompt("Nome do Livro:");
      Biblioteca.BuscarLivro(livro);
      break;
    case 5:
      loop = false;
      break;
  }
}

function addLivro() {
  let livro = new Livro();
  livro.Titulo = prompt("Titulo do Livro:");
  livro.Autor = prompt("Autor do Livro:");
  livro.Editora = prompt("Editora do Livro:");
  livro.Ano = prompt("Ano do Livro:");
  livro.Disponibilidade = prompt("Disponibilidade do Livro \n1-Sim \n2-Nao");
  if (livro.Disponibilidade == "1") {
    livro.Disponibilidade = true;
  } else {
    livro.Disponibilidade = false;
  }
  livros.push(livro);
}
function addBiblioteca() {
  let biblioteca = new Biblioteca();
  biblioteca.Nome = prompt("Nome da Biblioteca:");
  biblioteca.Endereco = prompt("Endereco da Biblioteca:");
  biblioteca.Telefone = prompt("Telefone da Biblioteca:");
  bibliotecas.push(biblioteca);
}
