import {  useState } from 'react'
import './App.css'
import FormInput from './components/FormInput'

function App() {
  const [value, setValue] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  const inputs = [
    
    {
      id : 1,
      name : "username",
      type: "text",
      placeholder: "username",
      errorMessage: "Username Should be 3-16 characters and shouldn't include any special character ",
      label: "Username",
      required : true,
      pattern: "[A-Za-z0-9]{3,16}$"
    },
    {
      id : 2,
      name : "email",
      type: "email",
      placeholder: "email",
      errorMessage: 'It should be a valid email address',
      label: "email",
      required : true,
    },
    {
      id : 3,
      name : "birthday",
      type: "date",
      placeholder: "Birthday",
      errorMessage: '',
      label: "Birthday"
    },
    {
      id : 4,
      name : "password",
      type: "password",
      placeholder: "password",
      errorMessage: 'Password should be 8 to 20 characters and it should include at least 1 letter, 1 number and one special character',
      label: "Password",
      required : true,
      pattern : "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
    },
    {
      id : 5,
      name : "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: 'Passwords dont match',
      label: "Confirm Password",
      pattern : value.password,
      required : true,
    },
  ]

  const onChange = (e)=>{
    setValue({...value, [e.target.name] : e.target.value})
  }

  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit}>
      <h1>Register</h1>
        {inputs.map((input)=>(
          <FormInput key={input.id} {...input} value={value[input.name]} 
          onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
