import styled from 'styled-components';

export const Card = styled.div`
  margin-top: 48px;
  background: ${({ theme }) => theme.colors.primary.lighter};
  padding: 8px 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04) ;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .info{
    .contact-name{
      display: flex;
      align-items: center;

      small{
        background: ${({ theme }) => theme.colors.primary.lighter};
        color:${({ theme }) => theme.colors.primary.main} ;
        font-weight: bold;
        text-transform: uppercase;
        border-radius: 4px;
        margin-left: 8px;
        font-size: 18px;
      }
    }
  }
  span{
    display: block;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.gray[200]};
  }
  `;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  button{
    font-size: 12px;
    height: 32px;
  }

  .stop{
    background: ${({ theme }) => theme.colors.danger.main};
  }

  .reset{
    background: #222;
  }

`;
