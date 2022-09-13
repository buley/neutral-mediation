const cookie1 = "foo";
const cookie2 = "bar";
async function get() {
  return {
    status: 200,
    headers: {
      "access-control-allow-origin": "*",
      "set-cookie": [cookie1, cookie2]
    },
    body: {
      number: Math.random()
    }
  };
}
async function post({ request }) {
  const data = await request.formData();
  await create(data);
  return { status: 201 };
}
export { get, post };
