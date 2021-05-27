import app from './src/server/app.js'
import envConfig from './src/config/env.js'

const { PORT } = envConfig

app.listen(PORT, (e) => {
  if (e) throw e
  console.log(`celula-report started on port ${PORT}`);
})