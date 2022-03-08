import React, { useState } from 'react';
import { string } from 'prop-types';
import dayjs from 'dayjs';

import { CgCloseR } from 'react-icons/cg';

import { useDoubleClick, apiHooks } from 'hooks';

import CardContainer,
{
  StatusChangeBar,
  StatusChangeBarButton,
} from './style';

function TaskCard({ id, title, status, createdAt }) {
  const [showStatusChangeBar, setShowStatusChangeBar] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const taskEdit = apiHooks.tasks.useEdit();
  const taskRemove = apiHooks.tasks.useRemove();

  const titleDoubleClick = useDoubleClick();

  const btnStatusImage = () => {
    const BASE_PATH = '/status-icon/';
    if (status === 'Concluído') {
      return `${BASE_PATH}filled.svg`;
    }
    return `${BASE_PATH}hollow.svg`;
  };

  const handleChangeStatus = async ({ target }) => {
    await taskEdit.mutateAsync({ id, newData: { status: target.value } });
    setShowStatusChangeBar(false);
  };

  const storeTitleChanges = async () => {
    if (title !== newTitle && newTitle !== '') {
      await taskEdit.mutateAsync({ id, newData: { title: newTitle } });
    } else {
      setNewTitle(title);
    }
    titleDoubleClick.resetClickCount(0);
  };

  return (
    <>
      <CardContainer
        status={ status }
        isEditing={ titleDoubleClick.isDoubleClickEnabled }
      >
        <span>{ dayjs(createdAt).format('DD/MM/YY HH:mm') }</span>
        <span>{ status }</span>
        {
          titleDoubleClick.isDoubleClickEnabled
            ? (
              <input
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                value={ newTitle }
                onChange={ ({ target }) => setNewTitle(target.value) }
                onBlur={ storeTitleChanges }
              />
            )
            : (
              <span
                onClick={ titleDoubleClick.handleDoubleClick }
                role="presentation"
              >
                { title }
              </span>
            )
        }
        <button
          type="button"
          onClick={ () => setShowStatusChangeBar(!showStatusChangeBar) }
        >
          <img src={ btnStatusImage() } alt="button change status" />
        </button>
        <button
          onClick={ async () => taskRemove.mutateAsync(id) }
          type="button"
        >
          <CgCloseR />
        </button>
      </CardContainer>
      <StatusChangeBar
        status={ status }
        show={ showStatusChangeBar }
        isEditing={ titleDoubleClick.isDoubleClickEnabled }
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
  id: string.isRequired,
  title: string.isRequired,
  status: string.isRequired,
  createdAt: string.isRequired,
};

export default TaskCard;
