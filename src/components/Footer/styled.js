import styled from 'styled-components';

export const Nav = styled.nav`
  background: #fff;
  height: 250px;
  margin-bottom: 0px;
  padding: 0 50px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  width: 220px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;

  img {
    top: 0;
    width: 100%;
    height: auto;
  }
`;

export const SocialMedias = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  svg {
    margin: 0 4px;
  }
`;

export const Contato = styled.div`
  display: flex;
  height: 80%;
  flex-direction: column;
  align-items: left;
  align-content: flex-start;
  flex-wrap: wrap;

  h1 {
    width: 100%;
    font-size: 24px;
    font-weight: bold;
  }

  h2 {
    margin-bottom: 1rem;
    width: 100%;
    color: #061b3d;
    font-size: 16px;
    font-weight: bold;
  }

  h3 {
    width: 100%;
    color: #061b3d;
    font-size: 15px;
    font-weight: 400;
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
