import React from "react";
import styled from "styled-components";

type ChatMessageProps = {
  variant: "query" | "response";
  message: string;
};

// use pick to select the variant prop from ChatMessageProps
// and use it to style the ChatMessageContainer and ChatMessageBubble
const ChatMessageContainer = styled.div<Pick<ChatMessageProps, "variant">>`
  display: flex;
  justify-content: ${({ variant }) =>
    variant === "query" ? "flex-end" : "flex-start"};
  margin-bottom: 10px;
`;

const ChatMessageBubble = styled.div<Pick<ChatMessageProps, "variant">>`
  background-color: ${({ variant }) =>
    variant === "query" ? "#DCF8C6" : "#E5E5EA"};
  color: ${({ variant }) => (variant === "query" ? "#000" : "#333")};
  border-radius: 10px;
  padding: 10px;
  max-width: 70%;
`;

export const ChatMessage: React.FC<ChatMessageProps> = ({
  variant,
  message,
}) => {
  return (
    <ChatMessageContainer variant={variant}>
      <ChatMessageBubble variant={variant}>{message}</ChatMessageBubble>
    </ChatMessageContainer>
  );
};
