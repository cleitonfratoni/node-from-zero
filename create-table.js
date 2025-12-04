import {sql} from './db.js'

sql`DROP TABLE IF EXISTS videos;`.then(() => {
  console.log('Tabela apagada!')
})

sql`
  CREATE TABLE IF NOT EXISTS videos (
    id TEXT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration INTEGER NOT NULL CHECK (duration > 0),
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
  );
`.then(() => {
  console.log('Tabela criada!')
})