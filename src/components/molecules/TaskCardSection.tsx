import React from 'react';

import { Reorder } from 'framer-motion';
import { useAtom } from 'jotai';
import styled from 'styled-components';

import TaskCard from '@atoms/TaskCard';
import { modalStore } from '@store/modalStore';
import { todoStore } from '@store/todoStore';

const TaskCardSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const TaskCardSectionContainerInner = styled(Reorder.Group)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  li {
    list-style: none;
  }
  &:last-child {
    margin-bottom: 20px;
  }
`;

const TaskCardSection = () => {
  const [tasks, setTasks] = useAtom(todoStore);
  const [isModal, setModal] = useAtom(modalStore);
  return (
    <TaskCardSectionContainer>
      <TaskCardSectionContainerInner
        axis="y"
        onReorder={setTasks}
        values={tasks}
      >
        {tasks.sort().map((item) => (
          <div key={item.title} onClick={() => setModal(true)}>
            <TaskCard item={item} key={item.title} />
          </div>
        ))}
      </TaskCardSectionContainerInner>
    </TaskCardSectionContainer>
  );
};

export default TaskCardSection;
