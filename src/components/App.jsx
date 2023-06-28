import { Profile } from "./Profile";
import { Statistics } from "./Statistics";
import { FriendList } from "./FriendList";
import { Transactions } from "./Transactions";
import user from '../json/user.json';
import data from '../json/data.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';
 

export const App = () => {
  return (
    <>
      <FriendList props={friends}></FriendList>
      <Profile user={user}></Profile>
      <Statistics title="Upload stats" data={data}></Statistics> 
      <Transactions props={transactions}></Transactions>
    </>
  );
};

