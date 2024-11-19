const admin = require('firebase-admin');

// Inicializando o Firebase Admin
const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://<projeto-cripto-254a8>.firebaseio.com',
});
const db = admin.firestore();

// Funções CRUD
exports.getGames = async (req, res) => {
  try {
    const gamesSnapshot = await db.collection('games').get();
    const games = gamesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(games);
  } catch (error) {
    res.status(500).send('Erro ao buscar jogos');
  }
};

exports.createGame = async (req, res) => {
  try {
    const newGame = req.body;
    const gameRef = await db.collection('games').add(newGame);
    res.status(201).send({ id: gameRef.id });
  } catch (error) {
    res.status(500).send('Erro ao criar jogo');
  }
};

exports.updateGame = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedGame = req.body;
    await db.collection('games').doc(id).update(updatedGame);
    res.status(200).send('Jogo atualizado com sucesso');
  } catch (error) {
    res.status(500).send('Erro ao atualizar jogo');
  }
};

exports.deleteGame = async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection('games').doc(id).delete();
    res.status(200).send('Jogo deletado com sucesso');
  } catch (error) {
    res.status(500).send('Erro ao deletar jogo');
  }
};
