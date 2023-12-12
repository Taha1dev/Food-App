export const getFood = async () => {
  const res = await fetch('http://localhost:4000/food');
  return res.json();
};
