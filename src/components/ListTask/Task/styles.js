import styled from 'styled-components';

export const Card = styled.div`
  margin-top: 48px;
  background: #fff;
  padding: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04) ;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-around;

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
        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;
      }
    }
  }
  span{
    display: block;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray[200]};
  }
  `;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  button{
    font-size: 12px;
    padding: 4px;
  }

  .stop{
    background: ${({ theme }) => theme.colors.danger.main};
  }

  .reset{
    background: #222;
  }

`;
