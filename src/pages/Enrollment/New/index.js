import React from 'react';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import Container from '~/components/Container';
import HeaderDasBoard from '~/components/HeaderDashBoard';
import ButtonSave from '~/components/Buttons/ButtonSave';
import ButtonGoBack from '~/components/Buttons/ButtonGoBack';
import DashBoard from '~/components/DashBoard';
import FormEnrollment from '~/components/FormEnrollment';

export default function New() {
  function handleGoBack() {
    history.push('/enrollment');
  }

  async function handleSave({ student_id, plan_id, start_date }) {
    try {
      await api.post('/enrollments', { student_id, plan_id, start_date });
      toast.success('Matrícula cadastrado com sucesso!');
      history.push('/enrollment');
    } catch (err) {
      toast.error('Não foi possível criar nova matrícula!');
    }
  }

  return (
    <Container>
      <HeaderDasBoard title="Cadastro de matrículas">
        <ButtonGoBack onClick={handleGoBack} />
        <ButtonSave type="submit" form="formEnrollment" />
      </HeaderDasBoard>
      <DashBoard>
        <FormEnrollment onSubmit={handleSave} />
      </DashBoard>
    </Container>
  );
}
