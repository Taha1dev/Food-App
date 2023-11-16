export const getFood = async () => {
  const res = await fetch('http://localhost:4000/food');
  // const reply = res.json()
  // console.log(JSON.stringify(reply));
  return res.json();
};
