const createStudent = (student) => {
  const dadosEstudantes = {
    name: student,
    feedback: () => 'Eita pessoa boa!',
  };
  return dadosEstudantes;
};

module.exports = createStudent;
