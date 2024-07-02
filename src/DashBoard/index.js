import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import Header from './Header'
import Table from './Table';
import Edit from './Edit';
import Add from './Add';
import { employeesData } from '../data/index'

const DashBoard = ({ setIsAuthenticated }) => {
  const [employees, setEmployees] = useState(employeesData)
  const [selectEmployee, setSelectEmployee] = useState(null)
  const [adding, setAdding] = useState(false)
  const [editing, setEditing] = useState(false)
  // console.log(employees);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('employees_data'))
    if (data !== null && Object.keys(data).length !== 0)
      setEmployees(data)
  }, [])

  const handleedit = id => {
    const [employee] = employees.filter(employee => employee.id === id)
    setSelectEmployee(employee)
    setEditing(true)
  }

  const handleDelete = id => {
    Swal.fire({
      icon: "warning",
      text: "Are you sure",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel"
    })
      .then(result => {
        if (result.value) {
          const [employee] = employees.filter(employee => employee.id === id)
          Swal.fire({
            icon: "success",
            title: "Deleted",
            text: `${employee.firstName} ${employee.lastName}'s data has been deleted`,
            showConfirmButton: false,
            timer: 1500
          })
          const employeescopy = employees.filter(employee => employee.id !== id)
          localStorage.setItem('employees_data', JSON.stringify(employeescopy))
          setEmployees(employeescopy)
        }
      })
  }
  return (
    <>
      {!adding && !editing && (
        <>
          <Header setIsAuthenticated={setIsAuthenticated}
            setAdding={setAdding} />

          <Table
            employees={employees}
            handleedit={handleedit}
            handleDelete={handleDelete}

          />
        </>)}
      {
        adding && (
          <Add
            employees={employees}
            setAdding={setAdding}
            setEmployees={setEmployees}
          />
        )
      }{
        editing && (
          <Edit
            employees={employees}
            selectEmployee={selectEmployee}
            setEmployees={setEmployees}
            setEditing={setEditing}
          />
        )
      }
    </>
  )
}

export default DashBoard
