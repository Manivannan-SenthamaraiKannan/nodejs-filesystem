import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 8000;

app.use(express.json());

app.post('/create_file', (req, res) => {
    const { folderPath, fileContent } = req.body;

    const dateTime = new Date().toLocaleString().replace(/:/g, "-");
    const fileName = `${dateTime}.txt`;
    const filePath = path.join(folderPath, fileName);

    fs.writeFile(filePath, fileContent, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error creating file');
        } else {
            res.send('File created successfully');
        }
    });
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});