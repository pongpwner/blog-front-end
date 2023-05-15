import styled from "styled-components";
import COLORS from "./colors";
const { primary1, primary2, secondary1 } = COLORS;
export const Form = styled.form`
  margin: 2rem 3rem;

  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

export const NameInput = styled.input`
  font-size: 2rem;
  background-color: ${primary2};
  color: ${secondary1};
  &::placeholder {
    color: ${secondary1};
  }
  border: none;
  border-bottom: 1px solid ${secondary1};
`;
export const CommentTextArea = styled.textarea`
  font-size: 2rem;
  background-color: ${primary2};
  color: ${secondary1};
  &::placeholder {
    color: ${secondary1};
  }

  border: 1px solid ${secondary1};
`;
