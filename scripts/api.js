export async function fetchPokemonImages(limit) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
      const data = await response.json();
      return data.results.map(pokemon => `https://img.pokemondb.net/artwork/${pokemon.name}.jpg`);
    } catch (error) {
      console.error('Error fetching Pokemon images:', error);
      return [];
    }
  }
  