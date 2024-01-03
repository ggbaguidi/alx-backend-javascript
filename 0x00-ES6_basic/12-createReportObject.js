export default function createReportObject(employeesList) {
    const employees = {
        'allEmployees': employeesList,
        getNumberOfDepartments(allEmployees) {
            return Object.keys(allEmployees).length;
        },
    }

    return employees;
}
