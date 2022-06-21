import { BrowserRouter, Routes, Route } from "react-router-dom";

//JS/
import IntroductionJS from "../javaScript/_1_javascriptIntroduction";

//Mongo DB */}
import IntroductionMDB from "../mongoDB/_1_inroductionMongoDB";

//Node */} 
import IntroductionNode from "../NodeJS/_1_inroNode";

//React
import Introduction from "../react/_1_Introduction";
import Installation from "../react/_2_Installation";
import FolderStructure from "../react/_3_FolderStructure";

function Routing() {
  return (
    <BrowserRouter>
      {/* JS */} 
      <Routes>
        
        <Route path="/js" element={<IntroductionJS />} />
        <Route path="/js/introduction" element={<IntroductionJS />} />
      
      


      {/* React */}
      
        <Route path="/react" element={<Introduction />} />
        <Route path="/react/introduction" element={<Introduction />} />
        <Route path="/react/installation" element={<Installation />} />
        <Route path="/react/folder-structure" element={<FolderStructure />} />
      


      {/* Node */} 
      
        <Route path="/nodejs" element={<IntroductionNode />} />
        <Route path="/nodejs/introduction" element={<IntroductionNode />} />
      


      {/* Mongo DB */} 
      
        <Route path="/mongodb" element={<IntroductionMDB />} />
        <Route path="/mongodb/introduction" element={<IntroductionMDB />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
