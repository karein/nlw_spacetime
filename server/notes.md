# Aula 1

## Iniciando projeto

1. npm init -y
2. instalar libs 'typescript, @types/node, tsx'
3. npx tsc --init
4. mudar target "es2016" para "es2020" no tsconfig
5. criar src
6. criar server.ts
7. add o script "dev" com o valor "tsx watch src/server.ts" no package.json
8. rodar npm run dev
   <br><br/>
9. instalar fastify
10. add 1° rota get com fastify em server js retornando um texto hello
11. installar ESLint
12. installar @rocketseat/eslint-config e configurar arquivo .eslintrc extendendo as configurações dessa lib
13. add script "lint" no package.json para formatar todos os arquivos de uma vez com eslint e rodar 'npm run lint'
14. instalar 'prisma'
15. iniciar banco prisma com o commando 'npx prisma init --datasource-provider SQLite'
16. add model no schema.prisma
17. rodar commando'migrate dev' para criar a estrutura
18. instalar '@prisma/client' para add a conexção do server com o banco e add a configuração do client no server.

## Libs

- npm i typescript -D
- npm i @types/node -D
- npm i tsx -D
  <br><br/>
- npm i fastify
- npm i eslint -D
- npm i @rocketseat/eslint-config -D
- npm i prisma -D
- npm i @prisma/client

## Commands

- npm run lint
- npx prisma init --datasource-provider SQLite
- npx prisma migrate dev
- npx prisma studio

## Notes

- TSX:  
  O node não entende typescript por padrão, então para rodar o projeto ele teria que ser convertido para JS para depois poder executar o projeto, porém seria muito trabalhoso fazer essa conversão para JS em toda alteração feita no projeto.  
  O TSX automatiza o processo, ele é executado como se fosse um script node e ele converte automaticamente o código por baixo dos panos de TS para JS e já rodar o código.

- eslint:  
  Lib de padronização de código
  Pode ser criada uma configuração própria para uso pessoal ou grupo de trabalho, para que fiquen todos no mesmo padrão de código.

- @rocketseat/eslint-config:  
  Formatação das configurações rockeseat.  
  Após instalar a lib, criar o arquivo eslintrc.json extendendo(extends) a biblioteca e especificando o 'node' pois esse projeto é node.

- npm run lint:  
  Eslint Format all files  
  Adicionar configuração "editor.codeActionsOnSave": { "source.fixAll.eslint": true } em settings.json para que a formatação seja feita ao salvar o arquivo  
  Adicionar o comando "lint" com o valor "eslint src --ext .ts --fix" no package json para que ele formate todos os arquivos de uma vez para não precisar ir de um-por-um nos arquivos salvando para que a formatação seja feita.

- PRISMA  
  O @id informa que o campo informado será usado como PK(primary key)

  'npx prisma init --datasource-provider SQLite' inicia o prisma usando um banco sqlite ao inves do banco padrão do pisma.

  'npx prisma migrate dev' lê o arquivo schema.prisma e detecta automaticamente todas as alterações desde que o comando foi execultado pela ultima vez.

  'migration' é um sistema de controle de versão do DB, uma forma de criar a estrutura do banco aos poucos, e com o tempo o banco pode mudar seja adicionado ou removendo colunas, tabelas etc.  
  Cada migration pode ser comparada com um commit, informando a alteração que foi feita no banco.

  'npx prisma studio' é uma interface para a visualização do banco de dados.

  'npm i @prisma/client' acessar o banco pelo servidor

## Check List

### 01 Setup Project

- [] Back-end
  - [] Node.js install
  - [] Typescript + TSX
  - [] Fastifty
  - [] ESLint
  - [] Prisma
  - [] Configurar schema.prisma

# Aula 2 - Avançando o back-end e Front-end

## Libs

- zod
- @fastify/cors

## commands

- npm i zod
- npm i @fastify/cors

## Notes

- 'app.register' serve para registrar um arquivo de rotas separados
- 'coerce' converte o valor(que seja comparável a 'Falsy/Truthy') para 'boolean' (ex: o valor pode chegar como 0 ou 1, e será comvertido para false/true)
- 'CORS' é uma técnica de segurança que existe no back-end para determinar quais urls/endereços vão poder acessar a API.
  - Caso o 'origin' seja 'true', todas as urls front-end poderão acessar o backend
  - Ou pode receber um arrar com os endereços(local, desenvolvimento, produção etc). ex: 'origin: ['http://localhost:3333', 'https://production.example.com']'

# Aula 03 - Integrando UI com bibliotecas

## Libs

- dotenv
- axios
- @fastify/jwt

## Commands

- npm i dotenv -D
- npm i axios
- npm i @fastify/jwt

## Notes

- JWT (Json Web Token)
  Token criado pelo backend enviado para o frontend, para que o front possa usar esse token nas requisições feitas para o back para se identificar os usuários logados.  
  O token será armazenado nos kookies ou na memória para usar sempre que for fazer uma requisição para o back  
  Não colocar informações sensiveis no token pois ele não é criptografado,é apenas assinado, então qualquer pessoa pode ver o conteúdo dele.

  'sub' (diminutivo para subject), é á qual usuário pertence esse token.

- Rotas autenticadas

  - auth.d.ts -> a configuração desse arquivo pode ser encontrada ná pŕopria documentação (https://github.com/fastify/fastify-jwt) ao buscar por 'TypeScript'

  - Autenticas todas as rotas sem repetir uma função  
    Para não ter que adicionar 'await request.jwtVerify()' no 'handler'/corpo da função de todas as requisições, se pode adicionar a função
    addHook('preHandler') que vai executar uma função antes do handler de cada uma das rotas.

- host: '0.0.0.0' -> é necessário para funcionar no mobile

# Aula 04 - Integrando os projetos web e mobile

## Libs

- @fastify/multipart
- @fastify/static

## Commands

- npm i @fastify/multipart
- npm i @fastify/static

## Notes

- feature de 'stream' é a possibilidade de enviar um arquivo do frontend para o backend aos poucos, e aos poucos o backend ir fazendo a
  tratativa desse arquivo, por exemplo salvar esse arquivo no disco para ele ser recuperado depois
- @fatify/multipart -> habilita o fastify a entender 'multipart form data' que é uma forma de envio de informações do frontend para o backend,
  onde é permitido o envio de qualquer tipo de dado, porém não é tão simples quanto o JSON
- resolve() -> padroniza o caminho para que todos os sistemas operacionais entendam. ex: 'c://paht/to/file', 'c:\\path\to\file', C:/\, "c:/\\"
- pump()
  - 'pipeline' permite aguardar uma string/processo de upload finalizar. Se consegue verificar quando um processo chegou até o final.
  - No node, a maioria das funções não usam Promisses. 'promisify' transforma algumas funções mais antigas do node que ainda não tinha suporte
    a 'Promise' em Promises
- 'request.protocol' retorna o protocolo(http, https)
- A forma de upload e armazenamento no disco feita nesse projeto NÃO é a mais indicada para a MAIORIA dos casos. Na maioria dos casos o ideal
  seria salvar os arquivos em serviço específico para upload de arquivos (ex: Amazom S3, Google GCS, Cloudflare R2)
