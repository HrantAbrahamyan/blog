import shortid from 'shortid';

export const loginFields = [
  {
    id: shortid.generate(),
    name: 'email',
    label: 'Email',
    placeholder: 'test@gmail.com',
  },
  {
    id: shortid.generate(),
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: '********',
  },
];

export const registerFields = [
  {
    id: shortid.generate(),
    name: 'username',
    label: 'Username',
    placeholder: 'John Doe',
  },
  ...loginFields,
];

export const postFields = [
  {
    id: shortid.generate(),
    name: 'title',
    label: 'Title',
    placeholder: 'Lorem Ipsum',
  },
  {
    id: shortid.generate(),
    type: 'wysiwyg',
    name: 'description',
    label: 'Description',
    placeholder:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
];
