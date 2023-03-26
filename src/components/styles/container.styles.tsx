import styled from "styled-components";
interface IContainerProps {
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  fontSize?: string;
  minWidth?: string;
  maxWidth?: string;
}
const Container = styled.div`
  margin: 0 auto;
  font-size: ${(props: IContainerProps) =>
    props.fontSize ? props.fontSize : "1.6rem"};
  min-width: ${(props: IContainerProps) =>
    props.minWidth ? props.minWidth : "unset"};
  max-width: ${(props: IContainerProps) =>
    props.maxWidth ? props.maxWidth : "unset"};
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

export default Container;
