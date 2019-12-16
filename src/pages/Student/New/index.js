import React from 'react';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import Container from '~/components/Container';
import HeaderDasBoard from '~/components/HeaderDashBoard';
import ButtonSave from '~/components/Buttons/ButtonSave';
import ButtonGoBack from '~/components/Buttons/ButtonGoBack';
import DashBoard from '~/components/DashBoard';
import FormStudent from '~/components/FormStudent';

export default function New() {
  function handleGoBack() {
    history.push('/student');
  }

  async function handleSave({ name, email, age, weight, height }) {
    try {
      console.tron.log('Salvando');
      await api.post('/students', { name, email, age, weight, height });
      toast.success('Aluno cadastrado com sucesso!');
      history.push('/student');
    } catch (err) {
      toast.error('Não foi possível criar novo aluno!');
    }
  }

  return (
    <Container>
      <HeaderDasBoard title="Cadastro de aluno">
        <ButtonGoBack onClick={handleGoBack} />
        <ButtonSave type="submit" form="formStudent" />
      </HeaderDasBoard>
      <DashBoard>
        <FormStudent onSubmit={handleSave} />
      </DashBoard>
    </Container>
  );
}
