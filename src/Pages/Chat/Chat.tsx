import React, { useState } from "react";
import styled from "styled-components";
import { Form, Formik, FormikHelpers } from "formik";
import { Input } from "../../Components/Input/Input";
import { ChatMessage } from "../../Components/ChatMessage/ChatMessage";

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f5f5f5;
`;

const ChatHeader = styled.div`
  padding: 16px;
  background-color: #075e54;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const ChatMessages = styled.div`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
`;

const ChatInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #fff;
`;

const ChatButton = styled.button`
  margin-left: 8px;
  padding: 8px 16px;
  background-color: #075e54;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

interface ChatFormValues {
  message: string;
}

export const Chat: React.FC = () => {
  const [chatMessages, setChatMessages] = useState<string[]>([]);
  const onSubmit = (
    values: ChatFormValues,
    actions: FormikHelpers<ChatFormValues>
  ) => {
    // Handle form submission
    setChatMessages([...chatMessages, values.message]);
    actions.resetForm();
  };

  return (
    <ChatContainer>
      <ChatHeader>Sleep Bible</ChatHeader>
      <ChatMessages>
        {chatMessages.map((message, index) => (
          <ChatMessage variant="query" message={message} key={index} />
        ))}
      </ChatMessages>
      <Formik initialValues={{ message: "" }} onSubmit={onSubmit}>
        <Form>
          <ChatInputContainer>
            <Input name="message" />
            <ChatButton type="submit">Send</ChatButton>
          </ChatInputContainer>
        </Form>
      </Formik>
    </ChatContainer>
  );
};
