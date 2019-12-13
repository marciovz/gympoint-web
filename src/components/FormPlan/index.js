import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import ProtoTypes from 'prop-types';
import * as Yup from 'yup';

import { Container, LineTwo } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required(),
  duration: Yup.number()
    .positive()
    .integer()
    .required(),
  price: Yup.number()
    .positive()
    .required(),
});

export default function FormPlan({ dataPlan, id, onSubmit }) {
  const InitialData = {
    title: dataPlan.title,
    duration: dataPlan.duration,
    price: dataPlan.price,
    totalPrice: dataPlan.duration * dataPlan.price,
  };

  return (
    <Container>
      <Form
        schema={schema}
        id={id}
        onSubmit={onSubmit}
        initialData={InitialData}
      >
        <label>
          TÍTULO DO PLANO
          <Input name="title" type="text" />
        </label>

        <LineTwo>
          <label>
            DURAÇÃO (em meses)
            <Input name="duration" type="number" />
          </label>

          <label>
            PREÇO MENSAL
            <Input name="price" type="number" />
          </label>

          <label>
            PREÇO TOTAL
            <Input name="totalPrice" type="text" readOnly />
          </label>
        </LineTwo>
      </Form>
    </Container>
  );
}

FormPlan.defaultProps = {
  dataPlan: {
    title: '',
    duration: '',
    price: '',
  },
};

FormPlan.propTypes = {
  dataPlan: ProtoTypes.shape({
    title: ProtoTypes.string,
    duration: ProtoTypes.oneOfType([ProtoTypes.number, ProtoTypes.string]),
    price: ProtoTypes.oneOfType([ProtoTypes.number, ProtoTypes.string]),
  }),
  id: ProtoTypes.string.isRequired,
  onSubmit: ProtoTypes.func.isRequired,
};
