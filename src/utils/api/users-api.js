import axios from 'axios';

export const fetchUsers = () => {
  return axios.get('https://api.github.com/users?per_page=10').then(result => result.data);
};

export const fetchMoreUsers = (number, since) => {
  return axios.get(`https://api.github.com/users?per_page=${number}&since=${since}`).then(result => result.data);
}

export const fetchOneUser = (login) => {
  return axios.get(`https://api.github.com/users/${login}`).then(result => result.data);
}