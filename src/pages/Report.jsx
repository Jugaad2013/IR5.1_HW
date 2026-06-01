import { employeesData } from "../components/Data";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Report = () => {
    const mostWorkedEmployee = employeesData.reduce((acc, cer) => acc.hoursWorked > cer.hoursWorked ? acc : cer);
    const highestRatedEmployee = employeesData.reduce((acc, cer) => acc.performanceRate > cer.performanceRate ? acc : cer);
    const totalOverTimeHours = employeesData.reduce((acc, cer) => acc + cer.overTimeHours, 0);
    console.log(highestRatedEmployee);
    return(
        <>
        <Header/>

        <div className="container">
            <h2>HR</h2>
            <hr />
            <h3>Most Worked Employee</h3>
            {mostWorkedEmployee && (
                <>
                <p>Name: {mostWorkedEmployee.name}</p>
                <p>Hours Worked: {mostWorkedEmployee.hoursWorked}</p>
                </>
            )}
            <hr />
            <h3>Highest Rated Employee</h3>
            {highestRatedEmployee && (
                <>
                <p>Name: {highestRatedEmployee.name}</p>
                <p>Performance Rate: {highestRatedEmployee.performanceRate}</p>
                </>
            )}
            <hr />
            <h3>Total Over Time Hours</h3>
            {totalOverTimeHours && (
                <>
                <p>Over Time Hours Worked: {totalOverTimeHours}</p>
                </>
            )}
        </div>
        <Footer/>
        </>
    )
}

export default Report;