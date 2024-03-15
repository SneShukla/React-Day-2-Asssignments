function Array() {  
    let coursesArray = ["HTML","CSS3","JAVA","REACT","DOTNET","ANGULAR","MACHINE LEARNING","COMPUTER VISION","GEN AI"];
    let resArray = coursesArray.map(item => <li>{item}</li>)
  return (
      <>
      <h2 align="center">Developing Web Applications using React JS</h2>
      <hr width="80%"/>
      <ul>
        {resArray}
      </ul>
      </>
     
    );
  }
  export default Array;