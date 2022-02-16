import React, { useState } from 'react';
import { string, func } from 'prop-types';
import dayjs from 'dayjs';
import { FiEdit, FiSave } from 'react-icons/fi';
import { CgCloseR } from 'react-icons/cg';

import BtnStatusOpen from './btn-status/btn-status-open.svg';
import BtnStatusInProgress from './btn-status/btn-status-in-progress.svg';
import BtnStatusFinished from './btn-status/btn-status-finished.svg';

import CardContainer,
{
  StatusChangeBar,
  StatusChangeBarButton,
} from './style';

function TaskCard({ _id, title, status, createdAt, handleEdit, handleRemove }) {
  const [isEditing, setIsEditing] = useState(false);
  const [showStatusChangeBar, setShowStatusChangeBar] = useState(false);
  const [newTitle, setNewTitle] = useState('');

  const btnStatusImage = () => {
    if (status === 'Em progresso') {
      return BtnStatusInProgress;
    }
    if (status === 'Concluído') {
      return BtnStatusFinished;
    }
    return BtnStatusOpen;
  };

  const handleClick = async () => {
    if (isEditing) {
      if (title !== newTitle && newTitle !== '') {
        await handleEdit(_id, { title: newTitle });
      }
      setIsEditing(false);
    } else {
      setNewTitle(title);
      setIsEditing(true);
    }
  };

  const handleChangeStatus = async ({ target }) => {
    await handleEdit(_id, { status: target.value });
    setShowStatusChangeBar(false);
  };

  return (
    <>
      <CardContainer status={ status }>
        <span>{ dayjs(createdAt).format('DD/MM/YY HH:mm') }</span>
        <span>{ status }</span>
        { isEditing
          ? (
            <input
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
              value={ newTitle }
              onChange={ ({ target }) => setNewTitle(target.value) }
              // onBlur={ () => setIsEditing(false) }
            />
          )
          : (<span>{ title }</span>)}
        <button
          type="button"
          onClick={ () => setShowStatusChangeBar(!showStatusChangeBar) }
        >
          <img src={ btnStatusImage() } alt="button change status" />
        </button>
        <button
          onClick={ () => handleRemove(_id) }
          type="button"
        >
          <CgCloseR />
        </button>
        <button
          onClick={ handleClick }
          type="button"
        >
          {isEditing ? <FiSave /> : <FiEdit />}
        </button>
      </CardContainer>
      <StatusChangeBar status={ status } show={ showStatusChangeBar }>
        <StatusChangeBarButton
          bgColor="#FEFFD6"
          textColor="#C7CAAC"
          type="button"
          value="A fazer"
          onClick={ handleChangeStatus }
        >
          A fazer
        </StatusChangeBarButton>
        <StatusChangeBarButton
          bgColor="#D6F1FF"
          textColor="#88C6E6"
          width="110px"
          type="button"
          value="Em progresso"
          onClick={ handleChangeStatus }
        >
          Em progresso
        </StatusChangeBarButton>
        <StatusChangeBarButton
          bgColor="#D6FFD6"
          textColor="#88E6A3"
          type="button"
          value="Concluído"
          onClick={ handleChangeStatus }
        >
          Concluído
        </StatusChangeBarButton>
      </StatusChangeBar>
    </>
  );
}

TaskCard.propTypes = {
  _id: string.isRequired,
  title: string.isRequired,
  status: string.isRequired,
  createdAt: string.isRequired,
  handleEdit: func.isRequired,
  handleRemove: func.isRequired,
};

export default TaskCard;
