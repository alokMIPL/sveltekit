const movies: Movie[] = [
  {
  id: 'alok',
  name: "The Shawashank Reademption",
  release: 1994,
  rating: 5,
  comment: "Amazing, if a litle over-hyped"
  }
];

export const  load = () => {
  return {
    movies
  };
};

export const actions = {
  async default({request}){
    const formData = await request.formData();

    const movieData = Object.fromEntries(formData.entries());
    console.log(formData)
    console.log(movieData)
  }
}