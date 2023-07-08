import React, {useState} from 'react'
import styled from "styled-components";

export default function Register() {
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
    })
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };
      
  return (
    <div>
        <h2>Register</h2>
          <form>
        <input type="text" name="id" value={formData.id} onChange={handleChange} placeholder="ID" required />
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
