import React from 'react'

const Table = ({ employees, handleDelete, handleedit }) => {
    // if (!Array.isArray(employees)) {
    //     // Handle the case where employees is not an array, or provide a default value
    //     return <div>No valid employee data</div>;
    // }
    employees.forEach((employee, i) => {
        employee.id = i + 1;
    });
    // console.log("Type of employees:", typeof employees);
    // console.log("Content of employees:", employees);
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: null,
    });
    return (
        <div className='small-container mx-3 table-responsive'>
            <table className='table table-striped '>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Date</th>
                        <th colSpan={2} className="text-center ">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees.map((employee, i) => (
                            <tr key={employee.id}>
                                <td>{i + 1}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>{formatter.format(employee.salary)}</td>
                                <td>{employee.date}</td>
                                <td><button
                                    className='btn btn-primary' onClick={() => handleedit(employee.id)}
                                >Edit</button></td>
                                <td><button onClick={() => handleDelete(employee.id)}
                                    className='btn btn-danger'
                                >Delete</button></td>
                            </tr>
                        )
                        )) : (<tr>
                            <td colSpan={7} className='text-center'>No Employees</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table
