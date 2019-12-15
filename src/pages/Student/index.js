import React, { useState, useEffect } from 'react';

import history from '~/services/history';
import api from '~/services/api';

import HeaderDashBoard from '~/components/HeaderDashBoard';
import ButtonRegister from '~/components/Buttons/ButtonRegister';
import InputSearch from '~/components/InputSearch';
import Dashboard from '~/components/DashBoard';

import {
  Container,
  LineTitle,
  LineContent,
  Line,
  LinkEditar,
  LinkApagar,
} from './styles';

export default function Student() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students');
      setStudents(response.data);
    }
    loadStudents();
  }, []);

  function handleNewRegister() {
    history.push('/student/new');
  }

  function handleDelete() {}

  async function handleSearch(name) {
    const response = await api.get('students', {
      params: {
        name,
      },
    });
    setStudents(response.data);
  }

  return (
    <Container>
      <HeaderDashBoard title="Gerenciando alunos">
        <ButtonRegister onClick={handleNewRegister} />
        <InputSearch
          name="search"
          placeholder="Buscar aluno"
          onChange={e => handleSearch(e.target.value)}
        />
      </HeaderDashBoard>
      <Dashboard>
        <LineTitle>
          <h1>Nome</h1>
          <h1>E-Mail</h1>
          <h1>Idade</h1>
        </LineTitle>
        <LineContent>
          {students.map(student => (
            <Line key={student.id}>
              <span>{student.name}</span>
              <span>{student.email}</span>
              <span>{student.age}</span>
              <LinkEditar to={`/student/edit/${student.id}`}>Editar</LinkEditar>
              <LinkApagar onClick={() => handleDelete(student.id)}>
                Apagar
              </LinkApagar>
            </Line>
          ))}
        </LineContent>
      </Dashboard>
    </Container>
  );
}
