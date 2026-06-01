import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

export const employeesData = [
  {
    id: "1",
    name: "John Doe",
    title: "Software Developer",
    department: "IT",
    hoursWorked: 210,
    performanceRate: 0.79,
    overTimeHours: 60,
  },
  {
    id: "2",
    name: "Jane Smith",
    title: "Designer",
    department: "Design",
    hoursWorked: 195,
    performanceRate: 0.95,
    overTimeHours: 45,
  },
  {
    id: "3",
    name: "Bob Johnson",
    title: "Project Manager",
    department: "Management",
    hoursWorked: 170,
    performanceRate: 0.85,
    overTimeHours: 20,
  },
];

const Employees = () => {
    const [ employeeFilter, setEmployeeFilter] = useState("All");
    const filterEmployee = employeeFilter === "All" ? employeesData : employeesData.filter((employ) => employ.department === employeeFilter);
    return(
        <>
        <Header/>
        <div className="container py-3">
            <h2>List of Employees: </h2>
            <div className="form-group my-4 row p-4 rounded-1 shadow-sm bg-body-tertiary justify-content-md-center">
                <label htmlFor="employeeFilter">
                    Filter by Department:
                </label>
                <select className="form-control" id="employeeFilter" onChange={(e) => setEmployeeFilter(e.target.value)}>
                    <option value="All">All Employees</option>
                    <option value="IT">IT</option>
                    <option value="Management">Management</option>
                    <option value="Design">Design</option>
                </select>
            </div>
            <ul className="list-group mt-3">
                {filterEmployee.map((employ) => (
                    <li className="list-group-item" key={employ.id}>
                        <h5><strong>{employ.name}</strong></h5>
                        <p>{employ.title}</p>
                        <Link className="btn btn-primary" to={`/employees/${employ.id}`}>View Details</Link>
                    </li>
                ))}
            </ul>
        </div>

        <Footer/>
        </>
    );
};

export default Employees;