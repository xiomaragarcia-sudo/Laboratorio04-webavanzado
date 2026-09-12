// Base de datos en memoria para Pokémon (5 campos por registro)
const pokemons = [
  { nombre: "Pikachu", tipo: "Eléctrico", nivel: 25, hp: 100, habilidad: "Electricidad Estática" },
  { nombre: "Charizard", tipo: "Fuego/Volador", nivel: 36, hp: 180, habilidad: "Mar Llamas" }
];

const index = (req, res) => {
  res.render("pokedex", { title: "Pokédex", pokemons });
};

const create = (req, res) => {
  const { nombre, tipo, nivel, hp, habilidad } = req.body;
  pokemons.push({
    nombre,
    tipo,
    nivel: Number(nivel),
    hp: Number(hp),
    habilidad
  });
  res.redirect("/pokedex");
};

module.exports = {
  index,
  create
};