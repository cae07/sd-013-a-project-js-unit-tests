const createStudent = (nome) => {
  const newStudent = {
    name: nome,
    feedback: () => {
      const frase = 'Eita pessoa boa!';
      return frase;
    },
  };
  return newStudent;
};

console.log(createStudent('Rafael', feedback()));