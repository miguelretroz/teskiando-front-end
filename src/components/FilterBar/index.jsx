import React, { useState } from 'react';
import { func, string, objectOf } from 'prop-types';
import {
  FilterBarContainer,
} from './style';

function FilterBar({ handleChange, status, title }) {
  const [showFilterBar, setShowFilterBar] = useState(false);

  return (
    <>
      <FilterBarContainer
        show={ showFilterBar }
      >
      <form>
        <label htmlFor="title">
          Título
          <input
            id="title"
            name="title"
            onChange={ handleChange }
            type="text"
            value={ title }
          />
        </label>
        <h3>Status</h3>
        <label htmlFor="toDo">
          A fazer
          <input
            checked={ status.has('toDo') }
            id="toDo"
            name="toDo"
            onChange={ handleChange }
            type="checkbox"
          />
        </label>
        <label htmlFor="inProgress">
          Em progresso
          <input
            checked={ status.has('inProgress') }
            id="inProgress"
            name="inProgress"
            onChange={ handleChange }
            type="checkbox"
          />
        </label>
        <label htmlFor="finished">
          Concluído
          <input
            checked={ status.has('finished') }
            id="finished"
            name="finished"
            onChange={ handleChange }
            type="checkbox"
          />
        </label>
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
