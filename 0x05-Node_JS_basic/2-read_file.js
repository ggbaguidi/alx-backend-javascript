const fs = require('node:fs');

function countStudents(fileName) {
  const endData = {};
  let NUMBER_OF_STUDENTS = 0;
  try {
    const fields = [];
    let fieldIndex;
    let firstNameIndex;
    const file = fs.readFileSync(fileName, 'utf-8');
    const data = file.toString().split('\n');
    data.forEach((row) => {
      if (row.includes('firstname') && row.includes('field')) {
        const header = row.toString().split(',');
        fieldIndex = header.indexOf('field');
        firstNameIndex = header.indexOf('firstname');
      } else {
        const _row = row.toString().split(',');
        NUMBER_OF_STUDENTS += 1;
        if (endData[_row[fieldIndex]] === undefined) {
          fields.push(_row[fieldIndex]);
          endData[_row[fieldIndex]] = { count: 1, firstname: [_row[firstNameIndex]] };
        } else {
          endData[_row[fieldIndex]].count += 1;
          endData[_row[fieldIndex]].firstname.push(_row[firstNameIndex]);
        }
      }
    });
    console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
    fields.forEach((field) => console.log(`Number of students in ${field}: ${endData[field].count}. List: ${endData[field].firstname.join(', ')}`));
  } catch (e) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
