import React, { useState, useMemo } from 'react';

export default function B8() {
  const UserItem = React.memo(({ user }) => {
    return (
      <div>
        <p>{user.userName}</p>
        <p>Email: {user.email}</p>
        <p>Address: {user.address}</p>
      </div>
    );
  });

  // UserList Component
  const UserList = () => {
    const [users, setUsers] = useState([
      { id: 1, userName: 'User 1', email: 'user1@example.com', address: 'Address 1' },
      { id: 2, userName: 'User 2', email: 'user2@example.com', address: 'Address 2' },
      { id: 3, userName: 'User 3', email: 'user3@example.com', address: 'Address 3' },
    ]);

    // Using useMemo to optimize the user list rendering
    const userList = useMemo(() => {
      return users.map(user => <UserItem key={user.id} user={user} />);
    }, [users]);

    return (
      <div>
        <h2>User List</h2>
        {userList}
      </div>
    )
  }

  return <UserList />
}