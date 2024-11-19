const express = require("express");
const session = require("express-session");
const authMiddleware = require("./middlewares/authMiddleware");

const app = express();


app.use(session({
  secret: "12345678", 
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));


app.get("/", (req, res) => {
  res.send("Bem-vindo à API Gameflix!");
});


app.post("/login", (req, res) => {
  const { email, password } = req.body;

  
  if (email === "teste@teste.com" && password === "123456") {
    req.session.user = { email }; 
    return res.json({ message: "Login bem-sucedido!" });
  }

  return res.status(401).json({ message: "Credenciais inválidas." });
});


app.post("/games", authMiddleware, (req, res) => {
  const { title, description } = req.body;

  
  return res.json({ message: "Jogo adicionado!", game: { title, description } });
});


app.get("/games", authMiddleware, (req, res) => {
  
  return res.json([
    { title: "Jogo 1", description: "Descrição do Jogo 1" },
    { title: "Jogo 2", description: "Descrição do Jogo 2" },
  ]);
});


app.post("/logout", (req, res) => {
  req.session.destroy();
  res.json({ message: "Logout realizado com sucesso!" });
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
