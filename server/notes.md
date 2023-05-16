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
12. installar @rocketseat/eslint-config e configurar arquivo .eslintrc extendendo as configurações dessa lib (opcional)
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
- npm i @rocketseat/eslint-config -D (opcional)
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
  Uso opcional.  
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
