import styled from 'styled-components';

import TaskCardSection from '@molecules/TaskCardSection';
import { ContainerInner, LayoutContainer } from '@styles/layouts';

const Title = styled.h1`
  margin: 20px 0;
  font-size: ${({ theme }) => theme.fontSizes.titleXxl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.lavender900};
`;

function App() {
  return (
    <LayoutContainer>
      <ContainerInner>
        <Title>오늘 할일</Title>
        <TaskCardSection />
      </ContainerInner>
    </LayoutContainer>
  );
}

export default App;
