import { FormattedMessage } from 'react-intl';
import React, { useEffect } from 'react';

const API_URL = process.env.REACT_APP_API_URL;

const Users = () => {
  const [usersList, getUsersList] = React.useState();

  console.log(API_URL)

  // eslint-disable-next-line no-undef
  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json)
      .then((data) => {
        console.log(data)
        getUsersList(data)
      })
  }, [])
}
export default Users;
