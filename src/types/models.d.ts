type Pokemon = {
  id?: number;
  name?: string;
  description?: string;
  type: Array<string>;
  sprite?: string;
  display?: string;
  alternatives?: Array<string>;
};

type PokemonId = number;
type PokemonName = string;

export { Pokemon, PokemonId, PokemonName };
