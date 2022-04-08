const generateEmail = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    return {nome: fullName, email: `${fullName}@trybe.com`};
};

const newEmployees = (callback) => {
    const employee = {
        id1: callback('Pedro Guerra'),
        id2: callback('Luiza Drumond'),
        id3: callback('Carla Paiva'),
    }
    return employee
}
console.log(newEmployees(generateEmail));