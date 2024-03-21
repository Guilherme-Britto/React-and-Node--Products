import styled from 'styled-components';

export const HomeMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  h1 {
    font-size: 2rem;
  }
`;

export const ProductInfo = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin: 20px 0;

  .productInfoHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: -webkit-fill-available;
    max-width: 1120px;
    margin: 0 10px;
    margin-bottom: 20px;

    button {
      background-color: var(--Grey3);

      height: 32px;
      width: 32px;
      border-radius: 4px;

      font-size: 1.5rem;
    }
  }
`;
