import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());


// rotas

app.get('/', (req, res) =>{
    console.log('[Text]');
    res.send('Hello from home');
});

app.listen(PORT, () => console.log(`Server run on :http://localhost:${PORT}`));