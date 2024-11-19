import { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import "./CrudOperations.css";

const employeesData = [
    { id: 6589, name: "SRIRAM", job: "MANAGER", salary: 3200, deptNo: 32 },
    { id: 6369, name: "SMITH", job: "CLERK", salary: 800, deptNo: 20 },
    { id: 6499, name: "ALLEN", job: "SALESMAN", salary: 1600, deptNo: 30 },
    { id: 6521, name: "WARD", job: "ANALYST", salary: 1250, deptNo: 30 },
    { id: 6566, name: "JONES", job: "MANAGER", salary: 2975, deptNo: 20 },
    { id: 7654, name: "MARTIN", job: "SALESMAN", salary: 1250, deptNo: 30 },
    { id: 7698, name: "BLAKE", job: "MANAGER", salary: 2850, deptNo: 30 },
    { id: 7782, name: "CLARK", job: "MANAGER", salary: 2450, deptNo: 10 },
];

const CrudOperations = () => {
    const [employees, setEmployees] = useState<any[]>([]);
    const [selectedEmployee, setSelectedEmployee] = useState<any>(null);
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [salary, setSalary] = useState<number | string>("");
    const [deptNo, setDeptNo] = useState<number | string>("");

    const handleGetEmployees = () => {
        setEmployees(employeesData);
    };

    const handleAddEmployee = () => {
        if (name && job && salary && deptNo) {
            const newEmployee = {
                id: Math.max(...employees.map((emp) => emp.id), 0) + 1,
                name,
                job,
                salary: Number(salary),
                deptNo: Number(deptNo),
            };
            setEmployees([...employees, newEmployee]);
            handleClearFields();
        } else {
            alert("Please fill all fields to add an employee!");
        }
    };

    const handleUpdateEmployee = () => {
        if (selectedEmployee) {
            const updatedEmployees = employees.map((emp) =>
                emp.id === selectedEmployee.id
                    ? { ...selectedEmployee, name, job, salary: Number(salary), deptNo: Number(deptNo) }
                    : emp
            );
            setEmployees(updatedEmployees);
            handleClearFields();
            setSelectedEmployee(null);
        } else {
            alert("Please select an employee to update!");
        }
    };

    const handleClearFields = () => {
        setName("");
        setJob("");
        setSalary("");
        setDeptNo("");
        setSelectedEmployee(null);
    };

    const handleSelectEmployee = (employee: any) => {
        setSelectedEmployee(employee);
        setName(employee.name);
        setJob(employee.job);
        setSalary(employee.salary);
        setDeptNo(employee.deptNo);
    };

    const handleDeleteEmployee = (id: number) => {
        const filteredEmployees = employees.filter((emp) => emp.id !== id);
        setEmployees(filteredEmployees);
    };

    return (
        <div className="crud-container">
            <h3 className="crud-title">Perform CRUD operations with Employee Data</h3>
            <div className="crud-form">
                <Input type="text" placeholder="Employee Name" value={name} onChange={(e) => setName(e.target.value)} />
                <Input type="text" placeholder="Job" value={job} onChange={(e) => setJob(e.target.value)} />
                <Input type="number" placeholder="Salary" value={salary} onChange={(e) => setSalary(e.target.value)} />
                <Input type="number" placeholder="Dept No" value={deptNo} onChange={(e) => setDeptNo(e.target.value)} />
            </div>
            <div className="crud-buttons">
                <Button onClick={handleGetEmployees}>Get Employees</Button>
                <Button onClick={handleAddEmployee}>Add Employee</Button>
                <Button onClick={handleUpdateEmployee}>Update Employee</Button>
                <Button onClick={handleClearFields}>Clear Fields</Button>
            </div>
            <table className="crud-table">
                <thead>
                    <tr>
                        <th>Employee No</th>
                        <th>Employee Name</th>
                        <th>Job</th>
                        <th>Salary</th>
                        <th>Dept No</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.job}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.deptNo}</td>
                            <td className="crud-actions">
                                <span className="edit" onClick={() => handleSelectEmployee(employee)}>Select</span>
                                <span className="delete" onClick={() => handleDeleteEmployee(employee.id)}>Delete</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CrudOperations;
