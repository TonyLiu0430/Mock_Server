export default eventHandler((event) => {
  console.log(event.headers)

  return `Hello`
});
