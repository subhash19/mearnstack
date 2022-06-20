
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
    <>
    {/* JS */} 
    <IntroductionJS />


    {/* React */}
    <Introduction />
    <Installation />
    <FolderStructure />


    {/* Node */} 
    <IntroductionNode />


    {/* Mongo DB */} 
    <IntroductionMDB />
    </>
  );
}

export default Routing;
