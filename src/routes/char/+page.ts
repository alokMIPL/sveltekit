type Character = {
  id: number;
  name: string;
  image: string;
  occupation: string;
};



const API = "https://svelte.fun/api/bobs-burgers/characters"

  export const load = async ({ fetch }) => {
  const response = await fetch(`${API}`);
  const characters: Character[] = await response.json();

  return {
    characters
  }
};