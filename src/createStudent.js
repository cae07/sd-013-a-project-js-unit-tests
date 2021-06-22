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

const createStudent = (nome) => {
  const student = { // foi criada uma constante student que recebe um objeto como o exercício pede
    name: nome,
    feedback: () => 'Eita pessoa boa!', // criou uma funcao anonima que passa a frase eita pessoa boa para o feedback, foi criada essa funcao porque o exercicio pede isso 
  };
  return student;
};

module.exports = createStudent;
