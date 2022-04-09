import React, { useState } from 'react';
import { func, string, objectOf } from 'prop-types';
import { IoIosClose } from 'react-icons/io';
import {
  FilterBarContainer,
  StatusCheckboxLabel,
  CloseFilterBarButton,
} from './style';

function FilterBar({ handleChange, status, title }) {
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
        <h3>Status</h3>
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
      </form>
      </FilterBarContainer>
    </>
  );
}

FilterBar.propTypes = {
  handleChange: func.isRequired,
  status: objectOf(string).isRequired,
  title: string.isRequired,
};

export default FilterBar;
