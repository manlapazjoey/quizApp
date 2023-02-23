import Checkbox from '../../components/Checkbox';
import Input from '../../components/Input';
import Select from '../../components/Select';

export const registerFields = [
  {
    component: Input,
    name: 'name',
    id: 'name',
    'data-value': '',
    autoComplete: 'name',
    placeholder: 'Name',
    className: 'rounded-t-md',
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    component: Input,
    name: 'email',
    id: 'email-address',
    type: 'email',
    'data-value': '',
    autoComplete: 'email',
    placeholder: 'Email',
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    component: Input,
    name: 'password',
    id: 'password',
    type: 'password',
    'data-value': '',
    autoComplete: 'new-password',
    placeholder: 'Password',
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    component: Input,
    name: 'confirmPassword',
    id: 'confirm-password',
    type: 'password',
    'data-value': '',
    autoComplete: 'new-password',
    placeholder: 'Confirm Password',
    className: 'rounded-b-md',
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
];

export const registerInitialValues = registerFields.reduce(
  (p, c) => ({ ...p, [c.name]: c['data-value'] }),
  {},
);
