const createStudent = (name) => {
  const feedback = () => 'Eita pessoa boa!';
  const estudante = { name, feedback };
  return estudante;
};

module.exports = createStudent;
