    export async function fetchRandomPokemonImages(limit) {
      try {
        // Отримуємо повний список покемонів
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`); // Вказуємо велике число, щоб отримати всіх покемонів
        const data = await response.json();
        
        // Отримуємо випадкових 8 покемонів
        const shuffled = data.results.sort(() => 0.5 - Math.random()); // Перемішуємо список
        const selectedPokemon = shuffled.slice(0, limit); // Беремо перші 'limit' покемонів після перемішування
    
        // Генеруємо посилання на їхні зображення
        return selectedPokemon.map(pokemon => `https://img.pokemondb.net/artwork/${pokemon.name}.jpg`);
      } catch (error) {
        console.error('Error fetching random Pokemon images:', error);
        return [];
      }
    }
    
  