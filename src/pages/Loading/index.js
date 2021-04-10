import React from "react";
import { LoadingContainer, Paragraph } from "../../components";

export const LoadingScreen = ({ title, children }) => {
  return (
    <LoadingContainer>
      <Paragraph>{title}</Paragraph>
      {children}
    </LoadingContainer>
  );
};
