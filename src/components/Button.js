import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  align-self: center;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  border-radius: 10px;
  box-shadow: 2px 4px 4px #0000009F;
  color: #fff;
  cursor: pointer;
  font-size: 1.15rem;
  padding: 8px;
  transition: all 0.2 ease-in ;

  &:not([disabled]):active {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  &[disabled] {
    background: #ccc;
    cursor: default !important;
  }
`;
