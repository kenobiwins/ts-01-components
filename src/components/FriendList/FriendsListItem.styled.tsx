import styled from 'styled-components';

interface IProps {
  isOnline: boolean;
}

export const FriendsItemStyled = styled.li`
  flex-basis: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Status = styled.span<IProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${p => (p.isOnline ? p.theme.colors.green : p.theme.colors.red)};
`;
