type DetailedCharacter = {
  id: number;
  name: string;
  image: string;
  gender: string,
  haircolor: string,
  occupation: string,
  firstEpisode:string,
  voiceBy:string,
  url:string,
  wikiUrl:string,
  relatives:{name: string}[];
};



const API = "https://svelte.fun/api/bobs-burgers"

  export const load = async ({ fetch, params }) => {
    const {id} = params;
  const response = await fetch(`${API}/characters${id}`);
  const character: DetailedCharacter = await response.json();

  return {
    character
  }
};