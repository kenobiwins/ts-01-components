import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Container, ContainerProfile } from './Containers/App.styled';

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  const { username, tag, location, stats, avatar } = user;
  return (
    <>
      <Container>
        <ContainerProfile>
          <Profile
            username={username}
            tag={tag}
            location={location}
            avatar={avatar}
            stats={stats}
          />
          <Statistics title={'Upload stats'} stats={data} />
          <FriendList friends={friends} />
        </ContainerProfile>
        <TransactionHistory transactions={transactions} />
      </Container>
    </>
  );
};
