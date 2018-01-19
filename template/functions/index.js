'use strict';
import { https } from 'firebase-functions'

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

export const app = express();

// Whitelist cross origin and parse incoming request body
app.use(cors())
app.use(bodyParser.json())

const router = express.Router();

app.get('/', (req, res) => {
  res.send({
    about: "{{ name }} functions app"
  })
})

// Expose the API as a function
exports.api = https.onRequest(app);
