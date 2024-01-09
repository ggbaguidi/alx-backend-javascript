export default function getStudentIds(getListStudents) {
  if (Array.isArray(getListStudents)) {
    return getListStudents.map((value) => value.id);
  }
  return [];
}
