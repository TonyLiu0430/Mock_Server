export default eventHandler((event) => {
  const cookie = event.headers.get('Cookie')
  console.log(cookie)
  return `Hello`
});
