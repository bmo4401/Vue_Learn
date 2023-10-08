export default defineEventHandler((event) => {
  console.log('❄️ ~ file: hello.ts:2 ~ event:', event);
  return {
    hello: 'world',
  };
});
