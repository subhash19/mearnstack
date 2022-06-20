import Reactsidebarmenu from "../components/_1_Reactsidebarmenu";

function Introduction() {
    return (
      <>
      <div className="container">
        <div className="row">
            <div className="col-md-3">
                <Reactsidebarmenu />
            </div>
            <div className="col-md-9">
                    <h1>Introduction</h1>
                    <h2>History</h2>
                    <ul className="list-unstyled mb-0 py-3 pt-md-1">
                        <li>
                            <strong>Author:</strong> Jordan Walk
                        </li>
                        <li>
                            <strong>First Release:</strong> 29 May 2013
                        </li>
                        <li>
                        <strong>Latest Release:</strong> 16.12.0
                        </li>
                    </ul>
                    <h3>What is ReactJS</h3>
                    <p>ReactJS is a javascript Library for building user interface It is maintain by facebook and it play with vertual DOM.</p>
                    <h3>Why choose ReactJS</h3>
                    <p>it's flow component base arcitacture means it build reusable component or React has component based Architecturefor application development.</p>
                    <p>ReactJS is more fast due to virtual-DOM that's why react is more popular to the other framework and library.</p>
                    <p>it's create frontend development app it's not directly connect to Database and we can't use it as a serverside language.</p>
                    <h3>What is Virtual DOM</h3>
                    <p><strong>Vertual DOM:</strong></p>
            </div>
        </div>
      </div>
      </>
    );
  }
  
  export default Introduction;
  