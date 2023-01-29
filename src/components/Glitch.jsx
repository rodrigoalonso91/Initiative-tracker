import styled, { keyframes } from 'styled-components';

export const Glitch = ({ text }) => {

    return (
        <GlitchWrapper>
            <GlitchFx>{text}</GlitchFx>
        </GlitchWrapper>
    )
}

const GlitchWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* background-color: #222; */
  flex-direction: column;
  gap: 10px;
`;

const shift = keyframes`
  0%, 40%, 44%, 58%, 61%, 65%, 69%, 73%, 100% {
    transform: skewX(0deg);
  }

  41% {
    transform: skewX(10deg);
  }

  42% {
    transform: skewX(-10deg);
  }

  59% {
    transform: skewX(40deg) skewY(10deg);
  }

  60% {
    transform: skewX(-40deg) skewY(-10deg);
  }

  63% {
    transform: skewX(10deg) skewY(-5deg);
  }

  70% {
    transform: skewX(-50deg) skewY(-20deg);
  }

  71% {
    transform: skewX(10deg) skewY(-10deg);
  }
`;

const GlitchFx = styled.div`
  position: relative;
  font-size: 93px;
  font-weight: 700;
  line-height: 1.2;
  color: #fff;
  letter-spacing: 6px;
  animation: ${shift} 4s ease-in-out infinite alternate;
  transform: skewX(0deg);
  z-index: 1;
`;