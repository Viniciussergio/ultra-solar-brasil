import styled from 'styled-components';
import wallpaper from '../../config/images/home-wallpaper.jpg';

export const PageContainer = styled.div`
  width: 100%;

  h2 {
    width: 100%;
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
    color: #404040;

    h1 {
      font-size: 2rem;
      font-weight: 600;
    }
  }
`;

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

export const Intro = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 1rem;
`;
