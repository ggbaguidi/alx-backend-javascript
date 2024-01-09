export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const cictudent = getListStudents.filter((value) => value.location === city);
  cictudent.map((value) => {
    const valuea = value;
    newGrades.map((valueb) => {
      if (valuea.id === valueb.studentId) {
        valuea.grade = valueb.grade;
      }
      if (!(valuea.grade)) {
        valuea.grade = 'N/A';
      }
      return true;
    });
    return true;
  });
  return (cictudent);
}
