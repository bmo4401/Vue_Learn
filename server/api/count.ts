let count = 0;
export default defineEventHandler(async (event) => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(count++);
    }, 1000);
  });
});
