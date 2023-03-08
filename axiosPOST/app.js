// async function getUsers() {
//    const res = await axios.get('https://reqres.in/api/users');
//    console.log(res);
// }

// async function createUser() {
//    const res = await axios.post('https://reqres.in/api/users', {
//       username: 'ButtersTheChicken',
//       email: 'butters@gmail.com',
//       age: 1,
//    });
//    console.log(res);
// }

// createUser();

async function getUsers(token) {
   const res = await axios.get(
      'https://hack-or-snooze-v3.herokuapp.com/users',
      { params: { token } }
   );
   console.log(res);
}

async function signUp(username, password, name) {
   const res = await axios.post(
      'https://hack-or-snooze-v3.herokuapp.com/signup',
      {
         user: { name, username, password },
      }
   );
   console.log(res);
}

async function login(username, password) {
   const res = await axios.post(
      'https://hack-or-snooze-v3.herokuapp.com/login',
      {
         user: { username, password },
      }
   );
   console.log(res);
   return res.data.token;
}
async function getUsersWithAuth() {
   const token = await login('smcnamara', 'hunter2');
   getUsers(token);
}

async function createStory() {
   const token = await login('smcnamara', 'hunter2');
   const newStory = {
      token,
      story: {
         author: 'me',
         title: "what's the deal with ...",
         url: 'http://www.smcnamaraphoto.com',
      },
   };
   const res = await axios.post(
      'https://hack-or-snooze-v3.herokuapp.com/stories',
      newStory
   );
   console.log(res);
}

createStory();
