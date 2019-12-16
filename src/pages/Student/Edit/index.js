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
import FormStudent from '~/components/FormStudent';

export default function Edit() {
  const { id } = useParams();
  const [student, setStudent] = useState({});

  useEffect(() => {
    async function loadStudent() {
      try {
        const { data } = await api.get(`/students/${id}`);
        const { name, email, age, weight, height } = data;
        setStudent({ name, email, age, weight, height });
      } catch (err) {
        toast.error('Aluno não encontrado!');
      }
    }
    loadStudent();
  }, [id]);

  function handleGoBack() {
    history.push('/student');
  }

  async function handleSave({ name, email, age, weight, height }) {
    try {
      await api.put(`/students/${id}`, { name, email, age, weight, height });
      toast.success('Alterações salvas com sucesso!');
      history.push('/student');
    } catch (err) {
      toast.error('Não foi possível salvar as alterações!');
    }
  }

  return (
    <Container>
      <HeaderDasBoard title="Edição de aluno">
        <ButtonGoBack onClick={handleGoBack} />
        <ButtonSave type="submit" form="formStudent" />
      </HeaderDasBoard>
      <DashBoard>
        <FormStudent onSubmit={handleSave} dataStudent={student} />
      </DashBoard>
    </Container>
  );
}
