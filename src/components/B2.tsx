import React, { useMemo } from 'react';

export default function B2() {
  const users = [
    { id: 1, name: 'Nguyễn văn a', age: 22 },
    { id: 2, name: 'Nguyễn văn b', age: 17 },
    { id: 3, name: 'Nguyễn văn c', age: 25 },
    { id: 4, name: 'Nguyễn văn d', age: 16 },
    { id: 5, name: 'Nguyễn văn d', age: 19 },
  ];

  const usersAbove18 = useMemo(() => {
    return users.filter(user => user.age > 18);
  }, [users]);

  return (
    <div>
      <ul>
        {usersAbove18.map(user => (
          <li key={user.id}>{user.name} - {user.age} tuổi</li>
        ))}
      </ul>
    </div>
  );
}
