export default function useUtils() {
  const sayHello = () => console.log('Hello');
  return {
    sayHello,
  };
}
