import React, { useState } from 'react';
import { func, string, objectOf } from 'prop-types';
import { FiFilter } from 'react-icons/fi';
import { IoIosClose } from 'react-icons/io';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ptBr from 'date-fns/locale/pt-BR';

import {
  ClearButton,
  DateInputsContainer,
  FilterBarContainer,
  StatusCheckboxLabel,
  OpenFilterBarButton,
  CloseFilterBarButton,
} from './style';

import 'react-datepicker/dist/react-datepicker.css';

registerLocale('pt-BR', ptBr);
setDefaultLocale('pt-BR');

function FilterBar({ handleChange, status, title, dateStart, dateEnd }) {
  const [showFilterBar, setShowFilterBar] = useState(false);

  return (
    <>
      <FilterBarContainer
        show={ showFilterBar }
      >
        <CloseFilterBarButton
          onClick={ () => setShowFilterBar(false) }
          type="button"
        >
          <IoIosClose />
        </CloseFilterBarButton>
        <form>
          <label htmlFor="title">
            Título
            <input
              id="title"
              name="title"
              onChange={ handleChange }
              type="text"
              value={ title }
              placeholder="Digite o título da tarefa..."
            />
          </label>
          <h3 className="title-status">Status</h3>
          <StatusCheckboxLabel
            checked={ status.has('toDo') }
            htmlFor="toDo"
          >
            A fazer
            <input
              checked={ status.has('toDo') }
              id="toDo"
              name="toDo"
              onChange={ handleChange }
              type="checkbox"
            />
          </StatusCheckboxLabel>
          <StatusCheckboxLabel
            checked={ status.has('inProgress') }
            htmlFor="inProgress"
          >
            Em progresso
            <input
              checked={ status.has('inProgress') }
              id="inProgress"
              name="inProgress"
              onChange={ handleChange }
              type="checkbox"
            />
          </StatusCheckboxLabel>
          <StatusCheckboxLabel
            checked={ status.has('finished') }
            htmlFor="finished"
          >
            Concluído
            <input
              checked={ status.has('finished') }
              id="finished"
              name="finished"
              onChange={ handleChange }
              type="checkbox"
            />
          </StatusCheckboxLabel>
          <h3 className="title-date">Data</h3>
          <DateInputsContainer>
            <h4 className="title-date-start">
              De
            </h4>
            <DatePicker
              dateFormat="dd/MM/yy"
              onChange={
                (date) => handleChange({
                  target: { name: 'dateStart', value: date, type: 'text' } })
              }
              placeholderText="dd/mm/aa"
              selected={ dateStart }
            />
            <h4 className="title-date-end">
              Até
            </h4>
            <DatePicker
              dateFormat="dd/MM/yy"
              onChange={
                (date) => handleChange({
                  target: { name: 'dateEnd', value: date, type: 'text' } })
              }
              placeholderText="dd/mm/aa"
              selected={ dateEnd }
            />
          </DateInputsContainer>
        </form>
        <ClearButton
          onClick={ (e) => handleChange(e, true) }
        >
          Limpar
        </ClearButton>
      </FilterBarContainer>
      <OpenFilterBarButton
        onClick={ () => setShowFilterBar(true) }
        type="button"
      >
        <FiFilter />
      </OpenFilterBarButton>
    </>
  );
}

FilterBar.propTypes = {
  handleChange: func.isRequired,
  status: objectOf(string).isRequired,
  title: string.isRequired,
  dateStart: string.isRequired,
  dateEnd: string.isRequired,
};

export default FilterBar;
