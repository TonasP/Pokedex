document.addEventListener('DOMContentLoaded', () => {
    const pokedexContainer = document.querySelector('.pokedex-container');

    const pokemons = [
        {
            id: 318,
            name: 'Carvanha',
            image: 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/318.png',
            types: ['water', 'dark']

        },
        {
            id: 319,
            name: 'Sharpedo',
            image: 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/319.png',
            types: ['water', 'dark']

        },
        {
            id: 320,
            name: 'Wailmer',
            image: 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/320.png',
            types: ['water']

        },
        {
            id: 333,
            name: 'Swablu',
            image: 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/333.png',
            types: ['normal, fly']

        },
        
    ];

    const createPokemonCard = (pokemon) => {
        const card = document.createElement('div');
        card.classList.add('pokemon-card');

        const pokemonImage = document.createElement('img');
        pokemonImage.src = pokemon.image;
        pokemonImage.alt = pokemon.name;

        const pokemonId = document.createElement('p');
        pokemonId.classList.add('pokemon-id');
        pokemonId.textContent = `#${String(pokemon.id).padStart(3, '0')}`;

        const pokemonName = document.createElement('h2');
        pokemonName.classList.add('pokemon-name');
        pokemonName.textContent = pokemon.name;

        const pokemonTypes = document.createElement('div');
        pokemonTypes.classList.add('pokemon-types');
        pokemon.types.forEach(type => {
            const typeBadge = document.createElement('span');
            typeBadge.classList.add('type-badge', type); // Adiciona a classe do tipo para estilização
            typeBadge.textContent = type;
            pokemonTypes.appendChild(typeBadge);
        });

        card.appendChild(pokemonImage);
        card.appendChild(pokemonId);
        card.appendChild(pokemonName);
        card.appendChild(pokemonTypes);

        pokedexContainer.appendChild(card);
    };

    pokemons.forEach(pokemon => {
        createPokemonCard(pokemon);
    });
});