import styled from 'styled-components';

const Genre = ({ name, img, bgColor, width, height, text }) => {
  return (
    <GenreWrapper bgColor={bgColor} width={width} height={height} text={text}>
      <span># {name}</span>
      <span>
        <ImgWrapper className={bgColor ? 'colored' : ''}>
          <img src={img} />
        </ImgWrapper>
      </span>
    </GenreWrapper>
  );
};
const GenreWrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height || '25px'};
  font-size: ${(props) => props.text || '20px'};
  background-color: ${(props) => props.bgColor || 'transparent'};
  color: ${(props) => props.bgColor && 'white'};
  border-radius: 45px;
  border: ${(props) => (props.bgColor ? 'none' : '1px solid var(--light_black, #232323)')};
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-weight: 600;
`;
const ImgWrapper = styled.span`
  img {
    display: flex;
  }
`;

export default Genre;
