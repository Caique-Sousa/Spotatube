import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface IFade {
  show: boolean;
  absolute?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}

const Fade = styled.div`
  z-index: 100;
  /* position: relative; */
`;

export default ({ show, absolute, children }: IFade) => {
  const [shouldRender, setShouldRender] = useState(show);
  const [isAbsolute, setAbsolute] = useState(false);

  useEffect(() => {
    if (show) setShouldRender(true);
  }, [show]);

  const handleAnimationEnd = () => {
    if (show && absolute) {
      setAbsolute(false);
    }
    if (!show) setShouldRender(false);
  };

  const handleAnimationStart = () => {
    if (show && absolute) {
      setAbsolute(true);
    }
  };

  return (
    shouldRender && (
      <Fade
        style={{
          animation: `${show ? 'fadeIn' : 'fadeOut'} 0.5s`,
          display: `${isAbsolute ? 'absolute' : 'relative'}`
        }}
        onAnimationEnd={handleAnimationEnd}
        onAnimationStart={handleAnimationStart}
      >
        {children}
      </Fade>
    )
  );
};
