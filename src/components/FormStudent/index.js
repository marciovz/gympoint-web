import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import ProtoTypes from 'prop-types';
import * as Yup from 'yup';

import { Container, LineThree } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  age: Yup.number()
    .positive()
    .integer()
    .required(),
  weight: Yup.number()
    .positive()
    .required(),
  height: Yup.number()
    .positive()
    .required(),
});

export default function FormStudent({ dataStudent, onSubmit }) {
  const initialData = {
    name: dataStudent.name,
    email: dataStudent.email,
    age: dataStudent.age,
    weight: dataStudent.weight,
    height: dataStudent.height,
  };

  return (
    <Container>
      <Form
        schema={schema}
        id="formStudent"
        onSubmit={onSubmit}
        initialData={initialData}
      >
        <label>
          Nome Completo
          <Input name="name" type="text" placeholder="John Doe" />
        </label>

        <label>
          Endereço de E-mail
          <Input name="email" type="email" placeholder="exemplo@email.com" />
        </label>

        <LineThree>
          <label>
            Idade
            <Input name="age" type="number" />
          </label>

          <label>
            Peso (em kg)
            <Input name="weight" type="number" />
          </label>

          <label>
            Altura
            <Input name="height" type="number" />
          </label>
        </LineThree>
      </Form>
    </Container>
  );
}

FormStudent.defaultProps = {
  dataStudent: {
    name: '',
    email: '',
    age: '',
    weight: '',
    height: '',
  },
};

FormStudent.propTypes = {
  dataStudent: ProtoTypes.shape({
    name: ProtoTypes.string,
    email: ProtoTypes.string,
    age: ProtoTypes.oneOfType([ProtoTypes.number, ProtoTypes.string]),
    weight: ProtoTypes.oneOfType([ProtoTypes.number, ProtoTypes.string]),
    height: ProtoTypes.oneOfType([ProtoTypes.number, ProtoTypes.string]),
  }),
  onSubmit: ProtoTypes.func.isRequired,
};
