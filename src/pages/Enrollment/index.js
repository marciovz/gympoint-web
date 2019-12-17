import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import history from '~/services/history';
import api from '~/services/api';

import Container from '~/components/Container';
import HeaderDashBoard from '~/components/HeaderDashBoard';
import ButtonRegister from '~/components/Buttons/ButtonRegister';
import Dashboard from '~/components/DashBoard';

import {
  LineTitle,
  LineContent,
  Line,
  CheckCircle,
  LinkEditar,
  LinkApagar,
} from './styles';

export default function Enrollment() {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    async function loadEnrollments() {
      const { data } = await api.get('enrollments');

      const newData = data.map(item => {
        return {
          ...item,
          formatedStartDate: format(
            parseISO(item.start_date),
            "d 'de' MMMM 'de' yyyy",
            {
              locale: pt,
            }
          ),
          formatedEndDate: format(
            parseISO(item.end_date),
            "d 'de' MMMM 'de' yyyy",
            {
              locale: pt,
            }
          ),
        };
      });

      setEnrollments(newData);
    }
    loadEnrollments();
  }, []);

  function handleNewRegister() {
    history.push('/enrollment/new');
  }

  async function handleDelete(id) {
    try {
      if (!window.confirm('Deseja excluir a matrícula?')) return;
      await api.delete(`/enrollments/${id}`);
      const newList = enrollments.filter(enrollment => enrollment.id !== id);
      setEnrollments(newList);
      toast.success('Matrícula excluída com sucesso!');
    } catch (err) {
      toast.error('Não foi possível excluir a matrícula!');
    }
  }

  return (
    <Container>
      <HeaderDashBoard title="Gerenciando matrículas">
        <ButtonRegister onClick={handleNewRegister} />
      </HeaderDashBoard>
      <Dashboard>
        <LineTitle>
          <h1>Aluno</h1>
          <h1>Plano</h1>
          <h1>Início</h1>
          <h1>Término</h1>
          <h1>Ativa</h1>
        </LineTitle>
        <LineContent>
          {enrollments.map(enrollment => (
            <Line key={enrollment.id}>
              <span>
                {enrollment.student ? enrollment.student.name : 'Deletado'}
              </span>
              <span>
                {enrollment.plan ? enrollment.plan.title : 'Deletado'}
              </span>
              <span>{enrollment.formatedStartDate}</span>
              <span>{enrollment.formatedEndDate}</span>
              <CheckCircle checked={enrollment.active} />
              <LinkEditar to={`/enrollment/edit/${enrollment.id}`}>
                Editar
              </LinkEditar>
              <LinkApagar onClick={() => handleDelete(enrollment.id)}>
                Apagar
              </LinkApagar>
            </Line>
          ))}
        </LineContent>
      </Dashboard>
    </Container>
  );
}
