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
