import React, { useRef, useEffect, useState } from 'react';
import ProtoTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';

import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';
import { Container } from './styles';

export default function Datepicker({ name, onChangeStartDate }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <Container>
      <ReactDatePicker
        name={fieldName}
        selected={selected}
        onChange={date => {
          setSelected(date);
          onChangeStartDate(date);
        }}
        ref={ref}
        dateFormat="dd/MM/yyyy"
      />
      {error && <span>{error}</span>}
    </Container>
  );
}

Datepicker.propTypes = {
  name: ProtoTypes.string.isRequired,
  onChangeStartDate: ProtoTypes.func.isRequired,
};
