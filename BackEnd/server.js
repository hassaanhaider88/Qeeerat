import express from 'express'
import {Movie, Scene} from  "json2video-sdk"

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello from the backend server!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});