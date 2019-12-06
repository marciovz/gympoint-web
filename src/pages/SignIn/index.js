import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.png';

import { Content } from './styles';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <Content>
      <img src={logo} alt="GymPoint" />
      <h1>GYMPOINT</h1>

      <Form onSubmit={handleSubmit}>
        <label>
          SEU E-MAIL
          <Input name="email" type="email" placeholder="exemplo@email.com" />
        </label>

        <label>
          SUA SENHA
          <Input name="password" type="password" placeholder="********" />
        </label>

        <button type="submit">Entrar no sistema</button>
      </Form>
    </Content>
  );
}
