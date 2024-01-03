export default function createIteratorObject(report) {
  let employees = [];
  for (const key of Object.keys(report.allEmployees)) {
    employees = [...employees, ...report.allEmployees[key]];
  }

  return employees;
}
