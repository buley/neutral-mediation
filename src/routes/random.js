/** @type {import('@sveltejs/kit').RequestHandler} */
const cookie1 = 'foo';
const cookie2 = 'bar';
export async function get() {
  return {
    status: 200,
    headers: {
      'access-control-allow-origin': '*',
      'set-cookie': [cookie1, cookie2]
    },
    body: {
      number: Math.random()
    }
  };
}

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }) {
  const data = await request.formData(); // or .json(), or .text(), etc
 
  await create(data);
  return { status: 201 };
}