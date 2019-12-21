import React, { useState, useEffect, useMemo } from 'react';
import { Form, Input, Select } from '@rocketseat/unform';
import { format, addMonths, startOfDay } from 'date-fns';
import ProtoTypes from 'prop-types';
import * as Yup from 'yup';

import api from '~/services/api';

import { formatPrice } from '~/util/format';
import Datepicker from '~/components/Datepicker';
import { Container, LineTwo } from './styles';

import 'react-datepicker/dist/react-datepicker.css';

const schema = Yup.object().shape({
  student_id: Yup.number()
    .integer()
    .positive()
    .required(),
  plan_id: Yup.number()
    .integer()
    .positive()
    .required(),
  start_date: Yup.date().required(),
});

export default function FormEnrollment({ dataEnrollment, onSubmit }) {
  const [student_id, setStudent_id] = useState('');
  const [plan_id, setPlan_id] = useState('');
  const [plan, setPlan] = useState(null);
  const [start_date, setStart_date] = useState('');
  const [end_date, setEnd_date] = useState('');
  const [totalPrice, setTotalPrice] = useState('');

  const [students, setStudents] = useState([]);
  const [plans, setPlans] = useState([]);

  const [optionsStudent, setOptionsStudent] = useState([]);
  const [optionsPlan, setOptionsPlan] = useState([]);

  // Carrega lista de alunos e planos do banco de dados
  useEffect(() => {
    async function loadPlans() {
      try {
        const response = await api.get('plans');
        setPlans(response.data);
      } catch (err) {
        console.tron.log('erro ao buscar planos no banco');
        setPlans([]);
      }
    }
    async function loadStudents() {
      try {
        const response = await api.get('students');
        setStudents(response.data);
      } catch (err) {
        console.tron.log('erro ao buscar alunos no banco');
        setStudents([]);
      }
    }
    loadStudents();
    loadPlans();
  }, []);

  // Armazena os valores iniciais
  useEffect(() => {
    setStudent_id(dataEnrollment.student_id);
    setPlan_id(dataEnrollment.plan_id);
    setStart_date(dataEnrollment.start_date);
  }, [
    dataEnrollment.plan_id,
    dataEnrollment.start_date,
    dataEnrollment.student_id,
  ]);

  // Define as opções para o select de student
  useMemo(() => {
    setOptionsStudent(
      students.map(item => ({
        id: item.id,
        title: item.name,
      }))
    );
  }, [students]);

  // Define as opções para o select de plans
  useMemo(() => {
    setOptionsPlan(
      plans.map(item => ({
        id: item.id,
        title: item.title,
      }))
    );
  }, [plans]);

  // Atualiza o valor total ao mudar de plano
  useMemo(() => {
    if (plan && plan !== '') {
      setTotalPrice(formatPrice(plan.duration * plan.price));
    } else {
      setTotalPrice('');
    }
  }, [plan]);

  // Atualiza o plano quando houver alteração do plan_id
  useMemo(() => {
    if (plan_id && plan_id !== '') {
      setPlan(plans.find(item => item.id === plan_id));
    } else {
      setPlan(null);
    }
  }, [plan_id, plans]);

  // Atualiza a data de término quando houver alteração em plano ou data de inicio
  useMemo(() => {
    if (plan && start_date && start_date !== '') {
      const ajusted_start_date = startOfDay(start_date);
      const endDate = addMonths(ajusted_start_date, plan.duration);
      setEnd_date(format(endDate, 'dd/MM/yyyy'));
    } else {
      setEnd_date('');
    }
  }, [plan, start_date]); //eslint-disable-line

  return (
    <Container>
      <Form
        schema={schema}
        id="formEnrollment"
        onSubmit={onSubmit}
        initialData={(student_id, plan_id, start_date, end_date)}
      >
        <label>
          Aluno
          <Select name="student_id" options={optionsStudent} />
        </label>

        <LineTwo>
          <label>
            Plano
            <Select
              name="plan_id"
              options={optionsPlan}
              onChange={e => setPlan_id(Number(e.target.value))}
            />
          </label>

          <label>
            Data de início
            <Datepicker
              name="start_date"
              onChangeStartDate={date => setStart_date(date)}
            />
          </label>

          <label>
            Data de término
            <Input name="end_date" type="text" value={end_date} readOnly />
          </label>

          <label>
            Valor final
            <Input name="totalPrice" type="text" value={totalPrice} readOnly />
          </label>
        </LineTwo>
      </Form>
    </Container>
  );
}

FormEnrollment.defaultProps = {
  dataEnrollment: {
    student_id: '',
    plan_id: '',
    start_date: '',
  },
};

FormEnrollment.propTypes = {
  dataEnrollment: ProtoTypes.shape({
    student_id: ProtoTypes.oneOfType([ProtoTypes.number, ProtoTypes.string]),
    plan_id: ProtoTypes.oneOfType([ProtoTypes.number, ProtoTypes.string]),
    start_date: ProtoTypes.oneOfType([ProtoTypes.number, ProtoTypes.string]),
  }),
  onSubmit: ProtoTypes.func.isRequired,
};
