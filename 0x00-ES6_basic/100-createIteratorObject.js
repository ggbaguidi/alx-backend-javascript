export default function createIteratorObject(report) {
    let employees = []
    for(let key of Object.keys(report.allEmployees)) {
        employees = [...employees, ...report.allEmployees[key]]
    }

    return employees;
}
