import React, { useState } from 'react';
import { string } from 'prop-types';
import dayjs from 'dayjs';

import { CgCloseR } from 'react-icons/cg';

import { useDoubleClick, apiHooks } from 'hooks';
import { loading } from 'animations/components';
import TextArea from 'components/TextArea';

import { MAX_TASK_TITLE_LENGTH } from 'helpers/constants';

import CardContainer,
{
  DateBar,
  StatusBar,
  TitleTextCounter,
  ToggleStatusChangeBar,
  RemoveButton,
  StatusChangeBar,
  StatusChangeBarButton,
} from './style';

const statusAdapter = {
  toDo: 'A fazer',
  inProgress: 'Em progresso',
  finished: 'Concluído',
};

function TaskCard({ id, title, status, createdAt }) {
  const [showStatusChangeBar, setShowStatusChangeBar] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const taskEdit = apiHooks.tasks.useEdit();
  const taskRemove = apiHooks.tasks.useRemove();

  const titleDoubleClick = useDoubleClick();

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

  const handleTitleChange = ({ target }) => {
    if (target.value.length <= MAX_TASK_TITLE_LENGTH) setNewTitle(target.value);
  };

  const styledProps = ({
    status,
    isEditing: titleDoubleClick.isDoubleClickEnabled,
  });

  return (
    <>
      <CardContainer
        { ...styledProps }
      >
        <DateBar
          { ...styledProps }
        >
          { dayjs(createdAt).format('DD/MM/YY HH:mm') }
        </DateBar>
        <StatusBar
          onClick={ () => setShowStatusChangeBar(!showStatusChangeBar) }
          { ...styledProps }
        >
          { statusAdapter[status] }
        </StatusBar>
        <TextArea
          value={ newTitle }
          onChange={ handleTitleChange }
          onBlur={ storeTitleChanges }
          rows="1"
          readOnly={ !titleDoubleClick.isDoubleClickEnabled }
          onClick={ titleDoubleClick.handleDoubleClick }
          maxLength={ MAX_TASK_TITLE_LENGTH }
          { ...styledProps }
        />
        <TitleTextCounter
          { ...styledProps }
        >
          { `${newTitle.length}/${MAX_TASK_TITLE_LENGTH}` }
        </TitleTextCounter>
        <ToggleStatusChangeBar
          type="button"
          onClick={ () => setShowStatusChangeBar(!showStatusChangeBar) }
          disabled={ taskEdit.isLoading }
          { ...styledProps }
        >
          {
            taskEdit.isLoading
              ? <loading.Spinner color="black" />
              : <img src="/status-change-icon.svg" alt="button change status" />
          }
        </ToggleStatusChangeBar>
        <RemoveButton
          onClick={ async () => taskRemove.mutateAsync(id) }
          type="button"
          status={ status }
          disabled={ taskRemove.isLoading }
        >
          {
            !taskRemove.isLoading
              ? <CgCloseR className="remove-icon" />
              : <loading.Spinner color="red" />
          }
        </RemoveButton>
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
          value="toDo"
          onClick={ handleChangeStatus }
          status={ status }
          disabled={ status === 'toDo' || taskEdit.isLoading }
        >
          A fazer
        </StatusChangeBarButton>
        <StatusChangeBarButton
          bgColor="#D6F1FF"
          textColor="#74AAC8"
          width="110px"
          type="button"
          value="inProgress"
          onClick={ handleChangeStatus }
          status={ status }
          disabled={ status === 'inProgress' || taskEdit.isLoading }
        >
          Em progresso
        </StatusChangeBarButton>
        <StatusChangeBarButton
          bgColor="#D6FFD6"
          textColor="#78C78F"
          type="button"
          value="finished"
          onClick={ handleChangeStatus }
          status={ status }
          disabled={ status === 'finished' || taskEdit.isLoading }
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
