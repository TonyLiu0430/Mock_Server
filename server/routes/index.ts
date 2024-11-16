export default eventHandler((event) => {
  const Cookie = event.headers.get('Cookie')
  console.log(Cookie)

  const cookie = event.headers.get('cookie')
  console.log(cookie)
  
  return `Hello`
});
