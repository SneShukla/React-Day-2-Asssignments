import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { dataSericeObj } from './Dataservice';

function EmpComponent()
{
    const[employees, setEmployees] = useState([]);


    function buttonClick()
    {
        let url = "http://localhost:4100/depts";
        axios.get(url).then((resData) =>
        {
            console.log(resData.data.records);
            setEmployees(resData.data);
        });
    }

    
    let resultArray = employees.map((item,index) =>{
    return <tr key={index}>
        <td>{item.empno}</td>
        <td>{item.ename}</td>
        <td>{item.job}</td>
        <td>{item.sal}</td>
        <td>{item.deptno}</td>
    </tr>});
    return(
        <>
        <h3> welcome!</h3>
        <hr/>
        <button onClick={buttonClick}>Get Data</button>
        <hr/>
        <table border="2" cellpadding="5" cellspacing="0" width="700">
        <tr>
            <th>empno</th>
            <th>ename</th>
            <th>job</th>
            <th>sal</th>
            <th>deptno</th>
        </tr>
       {resultArray}
        </table>
        
        </>
    )
}

export default EmpComponent;
