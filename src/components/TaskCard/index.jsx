import React from 'react';
import { string, func } from 'prop-types';
import dayjs from 'dayjs';
import { FiEdit } from 'react-icons/fi';
import { CgCloseR } from 'react-icons/cg';

import BtnStatusOpen from './btn-status/btn-status-open.svg';
import BtnStatusInProgress from './btn-status/btn-status-in-progress.svg';
import BtnStatusFinished from './btn-status/btn-status-finished.svg';

import CardContainer from './style';

function TaskCard({ _id, title, status, createdAt, handleRemove }) {
  const btnStatusImage = () => {
    if (status === 'Em progresso') {
      return BtnStatusInProgress;
    }
    if (status === 'Concluído') {
      return BtnStatusFinished;
    }
    return BtnStatusOpen;
  };

  return (
    <CardContainer>
      <span>{ dayjs(createdAt).format('DD/MM/YY HH:mm') }</span>
      <span>{ status }</span>
      <span>{ title }</span>
      <button type="button">
        <img src={ btnStatusImage() } alt="button change status" />
      </button>
      <button
        onClick={ () => handleRemove(_id) }
        type="button"
      >
        <CgCloseR />
      </button>
      <button
        onClick={ () => handleEdit(_id) }
        type="button"
      >
        <FiEdit />
      </button>
    </CardContainer>
  );
}

TaskCard.propTypes = {
  _id: string.isRequired,
  title: string.isRequired,
  status: string.isRequired,
  createdAt: string.isRequired,
  handleRemove: func.isRequired,
};

export default TaskCard;
