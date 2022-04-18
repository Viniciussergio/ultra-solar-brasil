import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const TextContainer = styled.div`
  width: 50%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: left;

  h1 {
    text-align: left;
    font-size: 22px;
    font-weight: 700;

    margin-bottom: 10px;
  }
`;

export const FormContainer = styled.div`
  width: 50%;
  padding: 3rem;
`;

export const Form = styled.form`
  width: 100%;
  padding: 2rem;
  border: solid 0.5px gray;
  border-radius: 25px;

  label {
    font-size: 15px;
    margin-bottom: 15px;
    color: gray;
  }

  input,
  select {
    width: 100%;
    height: 50px;
    border: none;
    background-color: white;
    border-bottom: 1px solid gray;
    margin-bottom: 15px;
    font-size: 15px;
    font-weight: 200;
    color: gray;
  }

  select {
    width: 100%;
    height: 50px;
    background-color: white;
    border: none;
  }

  button {
    width: 8rem;
    height: 3.5rem;
    padding: 1rem;
    font-size: 1rem;
    margin-top: 2rem;
  }
`;

export const Texto = styled.p`
  text-align: justify;
  font-size: 15px;
  font-weight: 400;

  margin-bottom: 10px;
`;
