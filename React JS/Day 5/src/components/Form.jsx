import React, { useState } from 'react'

function Form() {
    const [formData, setFormData] = useState(
        {username:"", password:"",email:"", gender:"male"}
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        //     username, thiru
        setFormData((predata) => ({
            ...predata,
            [name] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registered", formData); 
    }

  return (
    <div>
      <h1>Register Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>UserName:</label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={formData.username}
            placeholder="Enter your UserName"
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            onChange={handleChange}
            value={formData.password}
            placeholder="password"
            name="password"
            required
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="email"
            onChange={handleChange}
            value={formData.email}
            name="email"
            required
          />
        </div>

        <div>
          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Form