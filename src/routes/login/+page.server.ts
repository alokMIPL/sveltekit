import { fail } from '@sveltejs/kit'

export const actions = {
  async default ({ request}) {
    const formData = await request.formData();
    console.log(formData)
    const username = formData.get('username');
    const password = formData.get('password');

    if (!username || typeof username !== 'string') {
      return fail(400, {
        username: {
          value: username,
          error: 'Username is required'
        },
        password: {value:password, error:null}
      })
    }

    if (!password || typeof password !== 'string') {
      return fail(400, {
        password: {
          value: password,
          error: 'Password is required'
        },
        username: {value:username, error:null}
      })
    }

    if (username !== 'admin' || password !== 'password'){
      return fail(401, {
        username: {value:username, error:null},
        password: {value:password, error:"That username/password combination is invalid"}
      });
    }
  }
}


  