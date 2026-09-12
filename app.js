const express = require("express");
const app = express();
const path = require("path");

// Configuración del motor de vistas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(express.urlencoded({ extended: true })); // Permite procesar datos del formulario
app.use(express.static(path.join(__dirname, "public")));

// Importar Rutas
const mainRoutes = require("./routes/mainRoutes");
const pokemonRoutes = require("./routes/pokemonRoutes");

app.use("/", mainRoutes);
app.use("/pokedex", pokemonRoutes);

// Middleware para manejar Error 404 (Siempre debe ir al final de las rutas)
app.use((req, res, next) => {
  res.status(404).render("notFound", { url: req.originalUrl, title: "404 No Encontrado" });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));