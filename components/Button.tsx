import styled from 'styled-components';
import { ITheme } from '../pages/_app';

interface IButton {
  theme: ITheme;
  primary?: boolean;
  secondary?: boolean;
}

const Button = styled.div`
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 18px;
  width: fit-content;
  background: ${(props: IButton) =>
    !props.secondary ? props.theme.primary : props.theme.secondary};

  :hover {
    background: ${(props: IButton) =>
      !props.secondary
        ? props.theme.highlightPrimary
        : props.theme.highlightSecondary};
  }
`;

export default Button;
