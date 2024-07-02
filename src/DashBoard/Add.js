import React, { useState } from 'react'
import Swal from 'sweetalert2'

const Add = ({ employees, setEmployees, setAdding }) => {
  const [firstName, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [salary, setSalary] = useState('')
  const [date, setDate] = useState('')

  const handleAdd = e => {
    e.preventDefault()
    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: "error",
        text: "All field must filled",
        title: "error",
        showConfirmButton: true
      })
    }
    const id = employees.length + 1
    const newEmployee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date,
    }
    employees.push(newEmployee)
    localStorage.setItem("employees_data", JSON.stringify(employees))
    setEmployees(employees)
    setAdding(false);

    Swal.fire({
      icon: "success",
      title: "Information Added",
      text: `${firstName} ${lastName} data has been added`,
      showCloseButton: false
    })
  }

  return (
    <div className='container-fluid d-flex justify-content-center align-items-center min-vh-100'>
      <div className='row justify-content-center '>
        <div className='col-lg-12'>
          <form onSubmit={handleAdd}>
            <div>
              <label htmlFor='firstName'>First Name</label>
              <input
                id='firstName'
                type='text'
                name='firstName'
                placeholder='First Name'
                value={firstName}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='lastName'>Last Name</label>
              <input
                id='lastName'
                type='text'
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
              <label htmlFor='number'>Salary</label>
              <input
                type='number'
                name='salary'
                id='salary'
                placeholder='Salary'
                value={salary}
                onChange={e => setSalary(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='firstName'>DOB</label>
              <input
                type='date'
                id='date'
                value={date}
                placeholder='Date of Birth'
                name='date'
                onChange={e => setDate(e.target.value)}
              />
            </div>
            <div className='text-center d-flex justify-content-center gap-5 '>
              <div>
                <button type='submit' className='btn btn-success px-4 py-2'>ADD</button>
              </div>
              <div>
                <button
                  type='button'
                  value="Cancel"
                  className='btn btn-danger  px-4 py-2'
                  onClick={() => setAdding(false)}>Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Add
