import { FriendsItemStyled, Status } from './FriendsListItem.styled';
import { RiRadioButtonLine } from 'react-icons/ri';
import { IFriend } from './FriendList';

type friendPick = Pick<IFriend, 'avatar' | 'name' | 'isOnline'>;

export const FriendsListItem = ({ avatar, name, isOnline }: friendPick) => {
  return (
    <FriendsItemStyled>
      <Status isOnline={isOnline}>
        <RiRadioButtonLine />
        {isOnline ? 'online' : 'offline'}
      </Status>
      <img src={avatar} alt={`${name} avatar`} width="48px" />
      <p>{name}</p>
    </FriendsItemStyled>
  );
};
