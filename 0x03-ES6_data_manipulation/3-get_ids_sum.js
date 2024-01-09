export default function getStudentIdsSum(getListStudents) {
  const value = getListStudents.reduce((accum, late) => accum + late.id, 0);
  return value;
}
