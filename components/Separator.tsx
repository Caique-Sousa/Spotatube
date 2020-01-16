import styled from 'styled-components';
import { ITheme } from '../pages/_app';

interface ISeparator {
  width: number;
  height: number;
}
const Separator = styled.div`
  width: ${(props: ISeparator) => props.width};
  height: ${(props: ISeparator) => props.height};
`;

export default Separator;
