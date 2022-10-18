import React, { useState } from 'react';

import { Reorder } from 'framer-motion';
import styled from 'styled-components';

import TaskCard from '@atoms/TaskCard';
import { todomocks } from '@src/mocks/todomocks';

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
const test = [
  {
    text: '🍅 Tomato',
    date: '2021-10-10',
  },
  {
    text: '🥒 Cucumber',
    date: '2021-10-10',
  },
  {
    text: '🧀 Cheese',
    date: '2021-10-10',
  },
  {
    text: '🥬 Lettuce',
    date: '2021-10-10',
  },
];

const TaskCardSection = () => {
  const [tasks, setTasks] = useState(todomocks);

  return (
    <TaskCardSectionContainer>
      <TaskCardSectionContainerInner
        axis="y"
        onReorder={setTasks}
        values={tasks}
      >
        {tasks.sort().map((item) => (
          <TaskCard item={item} key={item.title} />
        ))}
      </TaskCardSectionContainerInner>
    </TaskCardSectionContainer>
  );
};

export default TaskCardSection;
