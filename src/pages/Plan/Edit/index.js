import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import Container from '~/components/Container';
import HeaderDasBoard from '~/components/HeaderDashBoard';
import ButtonSave from '~/components/Buttons/ButtonSave';
import ButtonGoBack from '~/components/Buttons/ButtonGoBack';
import DashBoard from '~/components/DashBoard';
import FormPlan from '~/components/FormPlan';

export default function Edit() {
  const { id } = useParams();
  const [plan, setPlan] = useState({});

  useEffect(() => {
    async function loadPlan() {
      try {
        const { data } = await api.get(`/plans/${id}`);
        const { title, duration, price } = data;
        setPlan({ title, duration, price });
      } catch (err) {
        toast.error('Plan não encontrado!');
      }
    }
    loadPlan();
  }, [id]);

  function handleGoBack() {
    history.push('/plan');
  }

  async function handleSave({ title, duration, price }) {
    try {
      await api.put(`/plans/${id}`, { title, duration, price });
      toast.success('Alterações salvas com sucesso!');
      history.push('/plan');
    } catch (err) {
      toast.error('Não foi possível salvar as alterações!');
    }
  }

  return (
    <Container>
      <HeaderDasBoard title="Edição de planos">
        <ButtonGoBack onClick={handleGoBack} />
        <ButtonSave type="submit" form="formPlan" />
      </HeaderDasBoard>
      <DashBoard>
        <FormPlan id="formPlan" onSubmit={handleSave} dataPlan={plan} />
      </DashBoard>
    </Container>
  );
}
