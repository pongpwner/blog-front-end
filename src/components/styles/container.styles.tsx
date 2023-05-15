import styled from "styled-components";
interface IContainerProps {
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  fontSize?: string;
  minWidth?: string;
  maxWidth?: string;
  backgroundColor?: string;
  padding?: string;
}
const Container = styled.div`
  margin: 0 auto;
  padding: ${(props: IContainerProps) =>
    props.padding ? props.padding : "2rem 3rem"};
  font-size: ${(props: IContainerProps) =>
    props.fontSize ? props.fontSize : "1.6rem"};
  min-width: ${(props: IContainerProps) =>
    props.minWidth ? props.minWidth : "unset"};
  max-width: ${(props: IContainerProps) =>
    props.maxWidth ? props.maxWidth : "unset"};
  background-color: ${(props: IContainerProps) => props.backgroundColor};
`;
export const ContainerFlexCol = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: ${(props: IContainerProps) => props.justifyContent};
  align-items: ${(props: IContainerProps) => props.alignItems};
`;

export const ContainerFlexRow = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: ${(props: IContainerProps) => props.justifyContent};
  align-items: ${(props: IContainerProps) => props.alignItems};
`;

export const ContainerGrid = styled(Container)`
  display: grid;

  grid-template-columns: repeat(4, 1fr);
`;
export const BorderContainer = styled(Container)`
  border-radius: 10px;
  border: 1px solid rgb(247, 247, 247);
`;

export default Container;
