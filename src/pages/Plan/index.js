import React from 'react';
import api from '~/services/api';

// import { Container } from './styles';

export default function Plan() {
  api.get('plans');

  return <h1>Planos</h1>;
}
