import MostRegisterSongEx from '../../assets/introduce/mostRegisterSongEx.svg';
import MostRegisterPlaceEx from '../../assets/introduce/mostRegisterPlaceEx.svg';
import MostRegisterGenreEx from '../../assets/introduce/mostRegisterGenreEx.svg';
import MostPopularSongEx from '../../assets/introduce/mostPopularSong.svg';

import styled from 'styled-components';
import { GenreList } from '../../constants/GenreList';
import Genre from '../common/Genre';

const Stats = () => {
  const genre = GenreList.find((it) => it.id === 2);
  const PopularGenre = GenreList.find((it) => it.id === 5);

  return (
    <>
      <Wrapper>
        <TotalPin>
          <div>
            올해 등록된 총 핀 개수는 <br /> 6666개예요.
          </div>
          <TotalNumber>
            <div>6666개</div>
          </TotalNumber>
        </TotalPin>
        <MostRegisterSong>
          <div>
            가장 많이 등록된 노래는
            <Song>
              <br /> Mariah Carey -<br />
              “All I Want for Christmas Is You”예요.
            </Song>
          </div>
          <div>
            <img src={MostRegisterSongEx} />
          </div>
        </MostRegisterSong>
        <MostRegisterPlace>
          <div>
            가장 많이 신규 등록된 장소는
            <br /> <Place>신촌</Place>이에요.
          </div>
          <div>
            <img src={MostRegisterPlaceEx} />
          </div>
        </MostRegisterPlace>
        <MostRegisterGenre>
          <div>
            가장 많이 신규 등록된 장르는 <GenreName>댄스</GenreName>예요.
          </div>
          <div>
            <img src={MostRegisterGenreEx} />
          </div>
        </MostRegisterGenre>
        <MostListenGenreWrapper>
          <MostListenGenre>
            <div className="genreText">
              <Genre
                name={genre.name}
                img={genre.whiteImgSrc}
                bgColor="#FF5862"
                width="146px"
                height="45px"
                text="28px"
              />
              <div>을 가장 많이 듣는 장소는</div>
            </div>
            <span className="placeName">신촌</span>
            <span>이에요.</span>
          </MostListenGenre>
          <TotalGenre>
            {GenreList.map((it) => (
              <Genre
                key={it.id}
                name={it.name}
                img={it.id == 2 ? it.whiteImgSrc : it.imgSrc}
                bgColor={it.id === 2 ? '#232323' : undefined}
              />
            ))}
          </TotalGenre>
          <img src={MostRegisterPlaceEx} />
        </MostListenGenreWrapper>
        <MostListenGenreWrapper>
          <MostListenGenre>
            <div className="genreText">
              <Genre
                name={PopularGenre.name}
                img={PopularGenre.whiteImgSrc}
                bgColor="#5452FF"
                height="45px"
                text="28px"
              />
              <div>중 가장 인기가 많은 곡은</div>
            </div>
            <span className="placeName">Eminem-</span>
            <br />
            <span className="placeName">"Without me"</span>
            <span> 이에요.</span>
          </MostListenGenre>
          <TotalGenre>
            {GenreList.map((it) => (
              <Genre
                key={it.id}
                name={it.name}
                img={it.id == 5 ? it.whiteImgSrc : it.imgSrc}
                bgColor={it.id === 5 ? '#232323' : undefined}
              />
            ))}
          </TotalGenre>
          <img src={MostPopularSongEx} />
        </MostListenGenreWrapper>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 180px;
`;
const TotalPin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 190px;
  align-items: center;
  text-align: center;
  color: var(--light_black, #232323);
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px; /* 125% */
`;
const TotalNumber = styled.div`
  color: var(--light_black, #232323);
  text-align: center;
  font-size: 96px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;
const MostRegisterSong = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  text-align: center;
  align-items: center;
  color: var(--light_black, #232323);
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px; /* 125% */
`;
const Song = styled.span`
  color: var(--light_black, #232323);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
`;
const MostRegisterPlace = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  text-align: center;
  align-items: center;
  color: var(--light_black, #232323);
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px; /* 125% */
`;
const Place = styled.span`
  color: var(--light_black, #232323);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  background-color: #b6ff5a;
`;
const MostRegisterGenre = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  text-align: center;
  align-items: center;
  color: var(--light_black, #232323);
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px; /* 125% */
`;
const GenreName = styled.span`
  color: var(--light_black, #232323);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  background-color: #d9a8ff;
`;

const MostListenGenre = styled.div`
  color: var(--light_black, #232323);
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px; /* 125% */
  .placeName {
    color: var(--light_black, #232323);
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 125% */
  }
  .genreText {
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--light_black, #232323);
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px; /* 125% */
  }
`;
const TotalGenre = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 4px;
`;
const MostListenGenreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 49px;
  width: 500px;
`;
export default Stats;
