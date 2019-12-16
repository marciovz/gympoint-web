import React, { useState, useEffect, useMemo } from 'react';
import { Form, Input } from '@rocketseat/unform';
import ProtoTypes from 'prop-types';
import * as Yup from 'yup';

import { formatPrice } from '~/util/format';
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

export default function FormPlan({ dataPlan, onSubmit }) {
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');
  const [totalPrice, setTotalPrice] = useState('');

  useEffect(() => {
    setTitle(dataPlan.title);
    setDuration(dataPlan.duration);
    setPrice(dataPlan.price);
  }, [dataPlan.duration, dataPlan.price, dataPlan.title]);

  useMemo(() => {
    let newTotalPrice = '';
    if (typeof duration === 'number' && typeof price === 'number') {
      newTotalPrice = formatPrice(duration * price);
    }
    setTotalPrice(newTotalPrice);
  }, [duration, price]);

  return (
    <Container>
      <Form
        schema={schema}
        id="formPlan"
        onSubmit={onSubmit}
        initialData={{ title, duration, price, totalPrice }}
      >
        <label>
          TÍTULO DO PLANO
          <Input name="title" type="text" />
        </label>

        <LineTwo>
          <label>
            DURAÇÃO (em meses)
            <Input
              name="duration"
              type="number"
              onChange={e => setDuration(Number(e.target.value))}
            />
          </label>

          <label>
            PREÇO MENSAL
            <Input
              name="price"
              type="number"
              onChange={e => setPrice(Number(e.target.value))}
            />
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
  onSubmit: ProtoTypes.func.isRequired,
};
