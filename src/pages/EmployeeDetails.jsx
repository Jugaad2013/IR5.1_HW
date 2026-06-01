import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { employeesData } from "../components/Data";

function EmployeeDetails(){
    const { employeeId} = useParams();
    console.log(employeeId);
    console.log(employeesData);
    const employee = employeesData.find((e) => Number(e.id) === parseInt(employeeId));
    console.log(employee);
    return(
        <div>
            <Header/>
            <section className="container mt-4">
                <div className="row">
                    <div className="col">
                        <div id="employee-details">
                            {employee ? (
                                <>
                                <h2>{employee.title}</h2>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <strong>Name: </strong>{employee.name}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Title: </strong>{employee.title}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Department: </strong>{employee.department}
                                    </li>
                                </ul>
                                </>
                            ) : (
                                <p className="alert alert-danger">employee <strong>NOT FOUND</strong></p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default EmployeeDetails;