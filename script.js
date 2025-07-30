document.addEventListener('DOMContentLoaded', () => {
    const pokedexContainer = document.querySelector('.pokedex-container');

    const pokemons = [
        {
            id: 3,
            name: 'Venusaur',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
            types: ['grass', 'poison']
        },
        {
            id: 4,
            name: 'Charmander',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
            types: ['fire']
        },
        {
            id: 6,
            name: 'Charizard',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
            types: ['fire', 'flying']
        },
        {
            id: 9,
            name: 'Blastoise',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
            types: ['water']
        },
        {
            id: 65,
            name: 'Alakazam',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png',
            types: ['psychic']
        },
        {
            id: 144,
            name: 'Articuno',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png',
            types: ['ice', 'flying']
        },
        {
            id: 150,
            name: 'Mewtwo',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png',
            types: ['psychic']
        },
        {
            id: 111,
            name: 'Rhyhorn',
            image: 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/111.png',
            types: ['Ground',	'Rock']
        },
        {
            id: 111,
            name: 'Rhyhorn',
            image: 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/111.png',
            types: ['Ground',	'Rock']
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