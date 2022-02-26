import React, { useState } from 'react';
import { string, func } from 'prop-types';
import dayjs from 'dayjs';
import { CgCloseR } from 'react-icons/cg';

import CardContainer,
{
  StatusChangeBar,
  StatusChangeBarButton,
} from './style';

function TaskCard({ _id, title, status, createdAt, handleEdit, handleRemove }) {
  const [showStatusChangeBar, setShowStatusChangeBar] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [titleClickCount, setTitleClickCount] = useState(0);
  const [titleClickTimeoutId, setTitleClickTimeoutId] = useState();

  const isEditing = () => titleClickCount === 2;

  const btnStatusImage = () => {
    const BASE_PATH = '/status-icon/';
    if (status === 'Concluído') {
      return `${BASE_PATH}filled.svg`;
    }
    return `${BASE_PATH}hollow.svg`;
  };

  const handleChangeStatus = async ({ target }) => {
    await handleEdit(_id, { status: target.value });
    setShowStatusChangeBar(false);
  };

  const handleTitleClick = () => {
    const delay = 500;
    if (titleClickCount === 0) {
      setTitleClickTimeoutId(setTimeout(() => setTitleClickCount(0), delay));
      setTitleClickCount(1);
    } else {
      clearTimeout(titleClickTimeoutId);
      setTitleClickCount(2);
    }
  };

  const storeTitleChanges = async () => {
    if (title !== newTitle && newTitle !== '') {
      await handleEdit(_id, { title: newTitle });
    }
    setTitleClickCount(0);
  };

  return (
    <>
      <CardContainer status={ status } isEditing={ isEditing() }>
        <span>{ dayjs(createdAt).format('DD/MM/YY HH:mm') }</span>
        <span>{ status }</span>
        { titleClickCount === 2
          ? (
            <input
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
              value={ newTitle }
              onChange={ ({ target }) => setNewTitle(target.value) }
              onBlur={ storeTitleChanges }
            />
          )
          : (<span onClick={ handleTitleClick } role="presentation">{ title }</span>)}
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
      </CardContainer>
      <StatusChangeBar
        status={ status }
        show={ showStatusChangeBar }
        isEditing={ titleClickCount === 2 }
      >
        <StatusChangeBarButton
          bgColor="#FEFFD6"
          textColor="#B5B798"
          type="button"
          value="A fazer"
          onClick={ handleChangeStatus }
          disabled={ status === 'A fazer' }
        >
          A fazer
        </StatusChangeBarButton>
        <StatusChangeBarButton
          bgColor="#D6F1FF"
          textColor="#74AAC8"
          width="110px"
          type="button"
          value="Em progresso"
          onClick={ handleChangeStatus }
          disabled={ status === 'Em progresso' }
        >
          Em progresso
        </StatusChangeBarButton>
        <StatusChangeBarButton
          bgColor="#D6FFD6"
          textColor="#78C78F"
          type="button"
          value="Concluído"
          onClick={ handleChangeStatus }
          disabled={ status === 'Concluído' }
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
