const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumero = document.querySelector('.pokemon_number')
const pokemonImagem = document.querySelector('.imagem_pokemon')

const form = document.querySelector('.form')
const input = document.querySelector('.input_search')

const left = document.querySelector('.btn-prevl')
const right = document.querySelector('.btn-prevr')


let searchPokemon = 1;

const fetchPokemon = async (pokemon) =>{

    //await espera o fetch concluir não passando para as outras linhas
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    // Status 200 ok procura o pokemon
    if(APIResponse.status == 200){

        const data = await APIResponse.json();
        return data;
    }



}

const renderPokemon = async (pokemon) =>{

    const data = await fetchPokemon(pokemon);

    // Se existir o pokemon, o coloca na tela
    if(data)
    {  pokemonName.innerHTML = data.name;
        pokemonNumero.innerHTML = data.id;
        pokemonImagem.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    
        console.log(data)}
        else{

            // pokemonImagem.style.display = 'none';
            pokemonName.innerHTML = "Não encontrado";
            pokemonNumero.innerHTML = "";
           

        }

  
}

// comçar com o primero pokemon assim que abre o site

renderPokemon(searchPokemon);

// Procurar Pokemon
form.addEventListener('submit', (event) => {

    event.preventDefault();
    
    renderPokemon(input.value.toLowerCase())

    input.value = "";

    console.log("Formulario enviado...")

})



    left.addEventListener('click', () => {
    //   alert('Prev clicled')

      searchPokemon --;

      renderPokemon(searchPokemon)

    })


    right.addEventListener('click', () => {


        searchPokemon ++;

        renderPokemon(searchPokemon)

    })