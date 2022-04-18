import styled from 'styled-components';
import wallpaper from '../../config/images/about-us-wallpaper.jpg';

export const MainWallpaper = styled.div`
  width: 100%;
  height: 40rem;
  background-image: url(${wallpaper});
  background-size: cover;
  background-attachment: scroll;
  background-position: bottom;
  box-shadow: inset 0px 0px 200px 70px rgba(0, 0, 0, 0.9);

  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const WallpaperButton = styled.button`
  width: 300px;
  height: 80px;
  padding-top: 0.8rem;
  margin-bottom: 80px;
  color: #2b2b2b;
  background-color: rgba(248, 184, 9, 0.85);
  font-size: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 1rem;
`;

export const PageContainer = styled.div`
  width: 100%;
`;

export const TextContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  margin: 5rem 1rem;

  div {
    display: flex;
    flex-direction: column;

    p {
      margin-bottom: 10px;
      line-height: 1.2rem;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 40%;
  border-left: solid 2px blue;
  margin: 5rem 0;

  display: flex;
  align-items: center;

  div {
    width: 30rem;
    height: 30rem;
    padding: 1rem;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    div {
      width: 50%;
      height: auto;
      border: solid 1px black;
    }
  }
`;

export const PersonContainer = styled.div`
  max-height: 38rem;
  max-width: 26rem;
  margin: 2rem;
  padding: 2rem;
  border: 1px solid #676464;
  border-radius: 2%;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;

  h1 {
    width: 80%;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }

  p {
    margin-top: 1rem;
    font-size: 15px;
    font-weight: 400;
    text-align: justify;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
`;

export const Intro = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const Leaders = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const Mission = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  div {
    width: 550px;
    text-align: left;
    margin: 1rem;

    div {
      width: 100%;

      h1 {
        width: 80%;
        font-size: 20px;
        font-weight: bold;
      }

      p {
        width: 80%;
        font-size: 15px;
        font-weight: 400;
      }
    }
  }
`;

export const VideoContainer = styled.div`
  width: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;

  div {
    max-width: 520px;
    min-width: 520px;
    height: 320px;
    border-radius: 24px;
    background-color: gray;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Orcamento = styled.div`
  width: 100%;
  height: 200px;
  background-color: #061b3d;
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }

  p {
    width: 30%;
    color: #fff;
  }

  h1 {
    font-weight: 400;
    width: 250px;
    color: #fff;
    margin-left: 10px;
  }

  button {
    width: 300px;
    height: 50px;
    border-radius: 100px;
    background-color: rgba(248, 184, 9);

    font-size: 20px;
    color: #061b3d;
  }
`;
