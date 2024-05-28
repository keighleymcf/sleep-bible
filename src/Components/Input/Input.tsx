import { Field } from "formik";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 8px;
`;

const InputField = styled(Field)`
  flex: 1;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 16px;
  padding: 8px;
  color: #333;
`;

interface InputProps {
  name: string;
}

export const Input = ({ name }: InputProps) => {
  return (
    <InputContainer>
      <InputField type="text" name={name} placeholder="Type a message..." />
    </InputContainer>
  );
};
