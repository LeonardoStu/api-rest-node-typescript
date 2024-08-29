import { server } from "./server/Server";

const port = process.env.PORT || 3333

server.listen(port, () => console.log(`Aplicação rodando na porta ${port}`))