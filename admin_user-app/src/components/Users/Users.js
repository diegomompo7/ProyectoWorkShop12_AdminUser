import { FormattedMessage } from 'react-intl';
import React, { useEffect } from 'react';

const API_URL = process.env.REACT_APP_API_URL;

const Users = () => {
  const [usersList, setUsersList] = React.useState([]);

  console.log(API_URL);
  React.useEffect(() => {
    console.log('hola');
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsersList(data);
      });
  }, []);

  console.log(usersList);

  return (
    <div>
      <h2>
        <FormattedMessage id='users:title'></FormattedMessage>
      </h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>
              <FormattedMessage id='users:name'></FormattedMessage>
            </th>
            <th>
              <FormattedMessage id='users:username'></FormattedMessage>
            </th>
            <th>
              <FormattedMessage id='users:email'></FormattedMessage>
            </th>
            <th>
              <FormattedMessage id='users:website'></FormattedMessage>
            </th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Users;
