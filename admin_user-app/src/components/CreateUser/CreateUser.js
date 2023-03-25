import { useForm } from 'react-hook-form';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import UserItem from './UserItem';
import { Navigate } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL;

const CreateUser = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const [formData, setFormData] = React.useState(null);

  const onSubmit = (data) => {
    setFormData(data);
    fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };

  return (
    <div>
      <h2>
        <FormattedMessage id='createUserPage.title'></FormattedMessage>
      </h2>
      <form
        onSubmit={() => {
          handleSubmit(onSubmit);
        }}
      >
        <UserItem
          type='text'
          label='createUserPage.name'
          typeRegister='name'
          reg={register}
          errors={errors}
        ></UserItem>
        <UserItem
          type='text'
          label='createUserPage.username'
          typeRegister='username'
          reg={register}
          errors={errors}
        ></UserItem>
        <UserItem
          type='email'
          label='createUserPage.email'
          typeRegister='email'
          reg={register}
          errors={errors}
        ></UserItem>
        <UserItem
          type='number'
          label='createUserPage.phone'
          typeRegister='phone'
          reg={register}
          errors={errors}
        ></UserItem>
        <UserItem
          type='text'
          label='createUserPage.website'
          typeRegister='website'
          reg={register}
          err={errors}
        ></UserItem>
        <button type='submit'>
          <FormattedMessage id='createUserPage.submitButton'></FormattedMessage>
        </button>
      </form>
    </div>
  );
};
export default CreateUser;
