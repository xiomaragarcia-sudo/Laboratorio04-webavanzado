// Base de datos en memoria para los mensajes de contacto
const messages = [];

const home = (req, res) => {
  res.render("home", { title: "Inicio" });
};

const about = (req, res) => {
  res.render("about", { title: "Acerca de" });
};

const contact = (req, res) => {
  res.render("contact", { title: "Contacto" });
};

const saveContact = (req, res) => {
  const { nombre, email, mensaje } = req.body;

  console.log("📩 Nuevo mensaje recibido desde el formulario:");
  console.log(`Nombre: ${nombre}`);
  console.log(`Email: ${email}`);
  console.log(`Mensaje: ${mensaje}`);
  console.log("-----------------------------------------");

  messages.push({ nombre, email, mensaje });

  res.redirect("/admin");
};

const admin = (req, res) => {
  res.render("admin", { title: "Panel de Administración", messages });
};

module.exports = {
  home,
  about,
  contact,
  saveContact,
  admin
};