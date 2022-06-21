import Pretag from "../components/PretagAsCode";
import Reactsidebarmenu from "../components/_1_Reactsidebarmenu";

function FolderStructure() {
    return (
      <>
      <div className="container">
        <div className="row">
            <div className="col-md-3">
            <Reactsidebarmenu />
            </div>
            <div className="col-md-9">
                <h1>FolderStructure</h1>
                <h3>What We Need to start</h3>
                <ul>
                  <li>
                    <strong>Node</strong>: you can install node from the node.org<br/>
                    for check node version: <code>node -v</code><br/>
                    for check npm version: <code>npm -v</code><br/>
                  </li>
                  <li>
                    <strong>Code Editor</strong>: You can use any code editor.
                  </li>
                </ul>

                
                <h3>Install React</h3>
                <code>
                  npm create-react-app app-name
                </code>
                  <p>if you've not need to app name and you need same folder name with react app then you can use this command</p>
                <code>
                  npm create-react-app .
                </code>
                <h3>What is create-react-app</h3>
                <p></p>

                
                <Pretag>
                  {
                    `<div class="abcg">sadasdasdas</div>`
                  }
                </Pretag>
                    
            </div>
        </div>
      </div>
      </>
    );
  }
  
  export default FolderStructure;
  