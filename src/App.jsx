import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App(){
    return(
        <>
        <Header/>

        <div className="container">
            <section className="mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <img src="https://placehold.co/400x300/EFEFEFF/grey?
 text=Movies%20Cover" alt="Employees Smiling" className="img-fluid" />
                        
                    </div>
                </div>
            </section>
            <section className="mt-5">
                <div className="row">
                    <div className="col-md-12">
                      <h2>Our Employees: </h2>  
                        <p>Meet our dedicated team of professionals who work tirelessly to achieve our company's goals.</p>
                        <Link to="/employees" className="btn btn-primary">View Employees</Link>
                    </div>
                </div>
            </section>
            <section className="mt-5">
                <div className="row">
                    <div className="col-md-12">
                      <h2>Company Report: </h2>  
                        <p>Explore our latest financial report to gain insights into our company's performance and growth.</p>
                        <Link to="/report" className="btn btn-primary">View Report</Link>
                    </div>
                </div>
            </section>
        </div>

        <Footer/>
        </>
    )
}

export default App;