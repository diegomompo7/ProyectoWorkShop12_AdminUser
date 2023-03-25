import React from 'react';

import { FormattedMessage } from 'react-intl';

const UserItem = ({ typeRegister, reg, errors, label, type }) => {
  return (
    <div>
      <label>
        <FormattedMessage id={label}></FormattedMessage>
      </label>
      <input type={type} {...reg(typeRegister, { required: true })}></input>
      {errors?.[typeRegister] && (
        <p className='register-form__error'>
          <FormattedMessage id='createUserPage.required'></FormattedMessage>
        </p>
      )}
    </div>
  );
};
export default UserItem;
