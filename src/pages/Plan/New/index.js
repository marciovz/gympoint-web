import React from 'react';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import Container from '~/components/Container';
import HeaderDasBoard from '~/components/HeaderDashBoard';
import ButtonSave from '~/components/Buttons/ButtonSave';
import ButtonGoBack from '~/components/Buttons/ButtonGoBack';
import DashBoard from '~/components/DashBoard';
import FormPlan from '~/components/FormPlan';

export default function New() {
  function handleGoBack() {
    history.push('/plan');
  }

  async function handleSave({ title, duration, price }) {
    try {
      await api.post('/plans', { title, duration, price });
      toast.success('Plano cadastrado com sucesso!');
      history.push('/plan');
    } catch (err) {
      toast.error('Não foi possível criar novo plano!');
    }
  }

  return (
    <Container>
      <HeaderDasBoard title="Cadastro de planos">
        <ButtonGoBack onClick={handleGoBack} />
        <ButtonSave type="submit" form="formPlan" />
      </HeaderDasBoard>
      <DashBoard>
        <FormPlan id="formPlan" onSubmit={handleSave} />
      </DashBoard>
    </Container>
  );
}
