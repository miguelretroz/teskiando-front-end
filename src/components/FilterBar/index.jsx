import React from 'react';
import { func } from 'prop-types';

function FilterBar({ handleChange }) {
  return (
    <aside>
      <form>
        <label htmlFor="title">
          Título
          <input
            id="title"
            name="title"
            onChange={ handleChange }
            type="text"
          />
        </label>
        <h3>Status</h3>
        <label htmlFor="toDo">
          A fazer
          <input
            id="toDo"
            name="toDo"
            onChange={ handleChange }
            type="checkbox"
          />
        </label>
        <label htmlFor="inProgress">
          Em progresso
          <input
            id="inProgress"
            name="inProgress"
            onChange={ handleChange }
            type="checkbox"
          />
        </label>
        <label htmlFor="finished">
          Concluído
          <input
            id="finished"
            name="finished"
            onChange={ handleChange }
            type="checkbox"
          />
        </label>
      </form>
    </aside>
  );
}

FilterBar.propTypes = {
  handleChange: func.isRequired,
};

export default FilterBar;
