import React, { InputHTMLAttributes } from 'react';

import { useAtom } from 'jotai';
import styled from 'styled-components';

import Button from '@atoms/Button';
import Input from '@atoms/Input';
import { addTodoStore } from '@store/todoStore';

const SubmitInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const ButtonWrapper = styled.div`
  position: absolute;
  right: 3px;
  top: 3px;
  cursor: pointer;
`;

interface SubmitInputProps {
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const SubmitInput = (props: SubmitInputProps) => {
  const { inputProps, buttonProps } = props;
  const valueRef = React.useRef('');
  const [, addTodo] = useAtom(addTodoStore);

  return (
    <SubmitInputWrapper>
      <Input
        {...inputProps}
        placeholder={'할 일을 입력해주세요'}
        onChange={(e) => (valueRef.current = e.target.value)}
      />
      <ButtonWrapper>
        <button
          onClick={() => {
            addTodo({
              id: `${Date.now()}`,
              title: valueRef.current,
              description: '',
              date: `${Date.now()}`,
              isDone: false,
            });
            console.log('추가');
          }}
        >
          추가
        </button>
        <Button {...buttonProps}>추가하기</Button>
      </ButtonWrapper>
    </SubmitInputWrapper>
  );
};

export default SubmitInput;
