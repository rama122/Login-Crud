import React, { useState } from 'react'
import Swal from 'sweetalert2'

const Edit = ({ employees, selectEmployee, setEmployees, setEditing }) => {
  const id = selectEmployee.id

  const [firstName, setfirstName] = useState(selectEmployee.firstName)
  // console.log(selectEmployee.firstName);
  const [lastName, setLastName] = useState(selectEmployee.lastName)
  const [email, setEmail] = useState(selectEmployee.email)
  const [salary, setsalary] = useState(selectEmployee.salary)
  const [date, setdate] = useState(selectEmployee.date)

  const handleUpdate = e => {
    e.preventDefault()

    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        title: "Error",
        icon: "error",
        text: "Must filled all fields",
        showConfirmButton: true
      })
    }
    const employee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date,
    }
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        employees.splice(i, 1, employee)
        break
      }
    }
    localStorage.setItem('employees_data', JSON.stringify(employees))
    setEmployees(employees)
    setEditing(false)

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  }
  return (
    <div>
      <div className='container-fluid d-flex justify-content-center align-items-center min-vh-100'>
        <div className='row justify-content-center '>
          <div className='col-lg-12'>
            <form onSubmit={handleUpdate}>
              <div>
                <label htmlFor='firstName'>First Name</label>
                <input
                  type='text'
                  id='firtsName'
                  name='firstName'
                  placeholder='First Name'
                  value={firstName}
                  onChange={e => setfirstName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='lastName'>Last Name</label>
                <input
                  type='text'
                  id='lastName'
                  name='lastName'
                  placeholder='Last Name'
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  id='email'
                  placeholder='Email'
                  name='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='salary'>Salary</label>
                <input
                  type='number'
                  name='number'
                  id='salary'
                  placeholder='Salary'
                  value={salary}
                  onChange={e => setsalary(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='date'>DOB</label>
                <input
                  type='date'
                  id='date'
                  value={date}
                  placeholder='Date of Birth'
                  name='date'
                  onChange={e => setdate(e.target.value)}
                />
              </div>
              <div className='text-center d-flex justify-content-center gap-5 '>
                <div>
                  <button type='submit' className='btn btn-success px-4 py-2'>Update</button>
                </div>
                <div>
                  <button
                    type='button'
                    value="Cancel"
                    className='btn btn-danger  px-4 py-2'
                    onClick={() => setEditing(false)}>Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit
