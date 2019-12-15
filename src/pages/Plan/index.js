import React, { useState, useEffect } from 'react';

import { formatPrice } from '~/util/format';
import history from '~/services/history';
import api from '~/services/api';

import {
  Container,
  Header,
  Icon,
  Content,
  LineTitle,
  LineContent,
  Line,
  LinkEditar,
  LinkApagar,
} from './styles';

export default function Plan() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('plans');
      const data = response.data.map(item => {
        return {
          ...item,
          durationFormated:
            item.duration === 1
              ? `${item.duration} mês`
              : `${item.duration} meses`,
          priceFormated: formatPrice(item.price),
        };
      });
      setPlans(data);
    }
    loadPlans();
  }, []);

  function handleNewRegister() {
    history.push('/plan/new');
  }

  return (
    <Container>
      <Header>
        <span>Gerenciando planos</span>
        <button type="button" onClick={handleNewRegister}>
          <Icon />
          Cadastrar
        </button>
      </Header>
      <Content>
        <LineTitle>
          <h1>TÍTULO</h1>
          <h1>DURAÇÃO</h1>
          <h1>VALOR p/ MÊS</h1>
        </LineTitle>
        <LineContent>
          {plans.map(plan => (
            <Line key={plan.id}>
              <span>{plan.title}</span>
              <span>{plan.durationFormated}</span>
              <span>{plan.priceFormated}</span>
              <LinkEditar to={`/plan/edit/${plan.id}`}>Editar</LinkEditar>
              <LinkApagar>Apagar</LinkApagar>
            </Line>
          ))}
        </LineContent>
      </Content>
    </Container>
  );
}
