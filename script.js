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
  Emprestimo(NomeLivro) {
    livros.forEach((livro) => {
      if (NomeLivro == livro.Titulo) {
        if (livro.Disponibilidade == true) {
          alert(true);
          livro.Disponibilidade = false;
        } else {
          alert(false);
        }
      } else {
        alert("Livro Invalido");
      }
    });
  }
  Devolver(NomeLivro) {
    livros.forEach((livro) => {
      if (NomeLivro == livro.Titulo) {
        if (livro.Disponibilidade == false) {
          alert("Livro Devolvido");
          livro.Disponibilidade = true;
        }
      } else {
        alert("Livro Invalido");
      }
    });
  }
}
let loop = true;
while (loop) {
  var choice = Number(prompt("1-Cadastrar Livro \n2-Biblioteca \n3-Sair"));
  switch (choice) {
    case 1:
      addLivro();
      break;
    case 2:
      addBiblioteca();
      break;
    case 3:
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
  let choice = Number(
    prompt(
      "1-Cadastrar Biblioteca \n2-Buscar Livro \n3-Emprestimo Livro \n4-Devolver Livro \n5-Sair"
    )
  );
  let loop = true;
  while (loop) {
    switch (choice) {
      case 1:
        let biblioteca = new Biblioteca();
        biblioteca.Nome = prompt("Nome da Biblioteca:");
        biblioteca.Endereco = prompt("Endereco da Biblioteca:");
        biblioteca.Telefone = prompt("Telefone da Biblioteca:");
        bibliotecas.push(biblioteca);
        loop = false;
        break;
      case 2:
        let livroProcurar = prompt("Nome do Livro:");
        bibliotecas[0].BuscarLivro(livroProcurar);
        loop = false;
        break;
      case 3:
        let livroEmprestimo = prompt("Nome do Livro:");
        bibliotecas[0].Emprestimo(livroEmprestimo);
        loop = false;
        break;
      case 4:
        let livroDevolver = prompt("Nome do Livro:");
        bibliotecas[0].Devolver(livroDevolver);
        loop = false;
        break;
      case 5:
        loop = false;
        break;

      default:
        alert("Opção invalida");
        break;
    }
  }
}
