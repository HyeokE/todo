import React from 'react';

import { Reorder, useDragControls } from 'framer-motion';
import styled from 'styled-components';

import { ReorderIcon } from '@atoms/ReorderIcon';
import { Todo } from '@type/Todo';

import CheckBox from './CheckBox';

const TaskCardWrapper = styled.div`
  padding: 10px 10px;
  display: flex;
  box-sizing: border-box;
  height: 70px;
  align-items: center;
  gap: 10px;
  font-size: ${({ theme }) => theme.fontSizes.textXxl};
  border: 1px solid ${({ theme }) => theme.colors.lavender500};
  background: ${({ theme }) => theme.colors.lavender100};
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 ${({ theme }) => theme.colors.lavender300};
`;
const TaskCardInner = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 6px;
  font-size: ${({ theme }) => theme.fontSizes.textXxl};
`;
const TaskCardText = styled.div<{ isDone: boolean }>`
  align-items: center;
  word-break: unset;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 260px;
  font-size: ${({ theme }) => theme.fontSizes.textL};
  text-decoration: ${({ isDone }) => (isDone ? 'line-through' : 'none')};
  color: ${({ isDone, theme }) =>
    isDone ? theme.colors.lavender200 : theme.colors.lavender900};
`;
const TaskCardDate = styled.time`
  align-items: center;
  color: ${({ theme }) => theme.colors.lavender500};
  font-size: ${({ theme }) => theme.fontSizes.textS};
`;

interface TaskCardProps {
  item: Todo;
}

const TaskCard = ({ item }: TaskCardProps) => {
  const { title, date, isDone } = item;
  const dragControls = useDragControls();
  return (
    <Reorder.Item value={item} dragListener={false} dragControls={dragControls}>
      <TaskCardWrapper>
        <CheckBox />
        <TaskCardInner>
          <TaskCardText isDone={isDone}>{title}</TaskCardText>
          <TaskCardDate>{date}</TaskCardDate>
        </TaskCardInner>
        <ReorderIcon dragControls={dragControls} />
      </TaskCardWrapper>
    </Reorder.Item>
  );
};

export default TaskCard;
