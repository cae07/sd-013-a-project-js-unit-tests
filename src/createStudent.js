/*
  Dada uma função chamada createStudent que recebe como parâmetro um nome,
  retorne um objeto que contenha duas chaves:
    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Faça a função da chave feedback com arrow functions!

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'
*/

// Verificar possibilidades de refatoração do código para utilizar menos linhas. Ajuda do colega Rodrigo.
// Declara-se a constante studentInput que retorna, na sequência, o name c/ o calor atribuído a input (nome do estudante), e feedback que, por meio de uma arrow function, retorna o valor de input com a string 'Eita pessoa boa!'
const createStudent = (input) => {
  return {
    name: input,
    feedback: () => 'Eita pessoa boa!',
  };
};

module.exports = createStudent;
