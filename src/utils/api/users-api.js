import axios from 'axios';

export const fetchUsers = () => {
  return axios.get('https://api.github.com/users?per_page=10&access_token=933b27ffe08e9154b82c3e74dabc0fd9183ce4d7').then(result => result.data);
};

export const fetchMoreUsers = (number, since) => {
  return axios.get(`https://api.github.com/users?per_page=${number}&since=${since}&access_token=933b27ffe08e9154b82c3e74dabc0fd9183ce4d7`).then(result => result.data);
}

export const fetchOneUser = (login) => {
  return axios.get(`https://api.github.com/users/${login}?access_token=933b27ffe08e9154b82c3e74dabc0fd9183ce4d7`).then(result => result.data);
}