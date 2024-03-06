import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  align-self: center;
  background-color: ${({ theme }) => theme.colors.primary.light};
  border-radius: 10px;
  box-shadow: 2px 4px 4px #0000009F;
  color: #fff;
  cursor: pointer;
  font-size: 1.25rem;
  padding: 8px;

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.dark};
    box-shadow: 2px 2px 4px #0000009F inset;
  }
`;
