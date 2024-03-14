import logo from './logo.svg';
import './App.css';

function App() {

  let eno = 12;
  let ename = "scott";
  let job = "data analyst";
  let salary = 21000;
  let dept = "Audit";
  
  return (
    <>
    <table>
      <thead>
        <tr>
          <th>eno</th>
          <th>ename</th>
          <th>job</th>
          <th>salary</th>
          <th>dept</th>
        </tr>
        <tr>
          <td>{eno}</td>
          <td>{ename}</td>
          <td>{job}</td>
          <td>{salary}</td>
          <td>{dept}</td>
        </tr>
      </thead>
    </table>
    </>

    
  );
}

export default App;
