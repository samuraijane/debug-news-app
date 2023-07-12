import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 200px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export default function Register() {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container>
      <Title>Register</Title>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="id" value={formData.id} onChange={handleChange} placeholder="ID" required />
        <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <Input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
}
