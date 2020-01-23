import styled from 'styled-components';
import { ITheme } from '../pages/_app';

interface IButton {
  theme: ITheme;
  primary?: boolean;
  secondary?: boolean;
  outline?: boolean;
}

const Button = styled.div`
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  background: ${(props: IButton) =>
    props.outline
      ? ''
      : !props.secondary
      ? props.theme.primary
      : props.theme.secondary};
  ${(props: IButton) =>
      props.outline
        ? `border: 2px solid ${props.theme.niceWhite};
      padding: 8px 10px;`
        : ''}
    :hover {
    background: ${(props: IButton) =>
      !props.secondary
        ? props.theme.highlightPrimary
        : props.theme.highlightSecondary};
  }
`;

export default Button;
