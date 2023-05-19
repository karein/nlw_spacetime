# Aula 1 - Iniciando o projeto de ponta a ponta

## Iniciando projeto

1. criar projet com 'create-next-app' informando 'YES' para todas as opçoes e 'ENTER' na ultima opção 'What import alias'
2. entrar no projeto e rodar 'npm run dev'
   <br><br/>
3. Deletar 'README.md' e os 2 svgs dentro de 'src/public'; Dentro de 'src/app' remover arquivo favicon.ico; remover conteúdo de global.css(menos as
   importações do tailwind); remover conteúdo html de page.tsx
4. Add configurações settings.json para autocomplete jsx
5. Installar configuração eslint da rocketseat '@rocketseat/eslint-config' e adicionar ao extents do .eslintrc junto á configuração que já existe
6. Instalar 'prettier tailwindcss' e criar arquivo prettier.config

## Libs

- npm i @rocketseat/eslint-config -D
- npm i prettier-plugin-tailwindcss -D

## Commands

- npx create-next-app@latest <project-name> --use-npm
- npm run dev

## Notes

- npm run dev:  
  Após criar o projeto e rodar, apareceram vários erros em loop, e no final dos erros apareceram as menssages 'ready started server' e 'event compiled', porém ao acessar a url a página não carregava e apareceu outro loop de erros no terminal mostrando 'too many open files path/to/node_modules/files'. parei o servidor. rodei mais algumas vezes até que quando rodei 'npm run' não apareciam mais os lops de erros, só as informações 'ready started server' e 'event compiled', porém ao recarregar o browser apareciam os erros de 'too many folders open' apondando para o 'node_modules'. Fechei a pasta 'close folder' no vscode. rodei 'npm run', apareceu um warning referente ao 'fast refresh'. parei o servidor e rodei de novo, dessa vez só apareceram as menssagens de compilação. Reacrreguei a página localhost, não apareceu o outro loop de erros no terminal e a aplicação funcionou.

- Autocomplete de tags html no JSX
  Adicionar "emmet.syntaxProfiles": { "javascript": "jsx" } e "emmet.includeLanguages": { "javascript": "javascriptreact" } nas configurações para fazer o autocomplete automático da tags sem precisar digitar elas inteiras (como se fosse um arquivo html).

- Componentes é uma forma de separar a aplicação em várias partes para facilitar a manutenção e reaproveitar elemento. São nada mais que funções
  que retornam HTML.

- Propriedades são uma forma passar informações para dentro do componente

- NEXT
  todos os arquivos que estiverem dentro da pasta app, se tornará automaticamente em uma rota.  
  EX:
  - app
    - page1 (folder) (localhost:port/page1)
      - page.tsx
        - subpage (localhost:port/page1/subpage)
          - page.tsx (o nome tem que ser page)
- Tailwind  
  é uma ferramenta de utility css.  
  Não se cria arquivos css pois usa a estilização por classes

## Check List

- [] Front-end
  - [] React + Next.js
  - [] TailwindCss
  - [] ESLint + Prettier Tailwind

# Aula 2 - Avançando o back-end e Front-end

## Libs

- npm i lucide-react

## Notes

- Fonts Next  
  O next cria um nome de variável que será usado dentro do css. EX: const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' }), o css irá usar a var(--font-roboto) para referenciar a fonte.

  - Fonts Next + Tailwind
    O tailwind tenta usar a fonte dele mesmo por padrão, mesmo setando outra no css.  
    Para o tailwind reconheccer e usar a fonte do google:
    1. ir no arquivo 'tailwind.config'
    2. em `theme:{extend:{}}` add `fontFamily:{sans: 'var(--font-roboto)'}` informando o nome da variável da fonte.
    3. Na Page.tsx add 'font-sans' no className para aplicar a fonte em todo o body.
    4. As Fonts add podem agora ser usadas normalmente como as outras classes do tailwind. `<h1 className="font-sans font-bold">Text</h1>`. 'font-sans' == '--font-roboto'

  Usar as Fontes que o Next entrega evita um comportamento na web chamado de 'Layout Shift', que é quando se abre um site e a fonte carrega com uma padrão do sistema e alguns segundos depois carrega a fonte definida no estilo. Ou seja, é quando a página abre diferente de quando ela termina de ser carregada.

- Quando se salva uma imagem icon.png dentro da pasta app, o next automaticamente vai usar essa imagem como icone dá página.

- next/image é um pacote do Next; o component <Image/> é o mesmo que a tag <img> do html, porém ele faz uma otimização automática da imagem, para um carregamento mais rápido

# Aula 03 - Integrando UI com bibliotecas

## Libs

- axios
- jwt-decode

## Commands

- npm i axios
- npm i jwt-decode

## Ferramentas úteis

- https://excalidraw.com

## Notes

- Fluxo de autenticação

  - 'Oauth' permite fazer login em uma aplicação, usando uma conta existente em outra aplicação.

  - Web

    1. User clica no link 'fazer login' na aplicação web
    2. User é redirecionado para a página de login do github
    3. pagina de login chama o github/faz autenticação pra saber se o user é válido
    4. github devolve/redireciona o user para o site('cápsula do tempo'). Nesse redirecionamento github também envia um 'código' na url que pode ser trocado por um 'access token'.

    - access token permite identificar um user no github e buscar informações desse usuário. Permite identificar o usuário e fazer chamadas para o  
      github como se fosse aquele usuário

    5. Pegar o código e enviar para o back-end
    6. back-end envia o código para a api do github, buscando as informações do usuário
    7. github devolve uma access token
    8. com a access token, fazer requisição para a rota /users do github
    9. github devolve as informações do usuário
    10. BackEnd salva as informações do usuario no banco de dados

  - Mobile
    O usuário não será redirecionado para a página de login do github. A aplicação usará a API do RN de 'webBrowser' que permite abrir o navegador encima da aplicação e não abrir o navegador do celular

    1. Mobile abreo WebBroser com a tela de login do github
    2. Tela de login requisita validação do github
    3. Validação retorna o código para a aplicação
    4. Código é enviado para o back-end e faz o mesmo processo descrito para a Web

  - Config Oauth Github
    1. logar no github
    2. ir no menu (setinha ao lado do perfil no canto superior direito da tela)
    3. clicar em Settings
    4. Developers settings (final do menu lateral esquerdo)
    5. Oauth Apps -> New Oauth App
    6. Preencher 'Application name', 'Homepage URL', 'Authorization callback URL'
       - EX:
         - Application name = spacetime (DEV),
         - Homepage URL = http://localhost:3000,
         - Authorization callback URL = http://localhost:3000/api/auth/callbak
           - nome da rota que será criada para o front-end
    7. Clicar em Register (que vai devolver um Client Id e um Client secret)
       - Client ID -> deve ser adicionado no .env.local do front e no .env do back
       - Client secret -> deve ser adicionado apenas no .env do back

- .env.local é a forma do Next declarar variáveis ambiente e para uma variável ser exposta para o front, tem que iniciar com
  `NEXT_PUBLIC_<resto-do-nome>`

- Cookies

  - 'request.url' é a url da aplicação
  - 'new URL('/', request.url)' redireciona o user para a rota '/' ou rota raiz
  - 'Path=/' significa que o cookie vai esta disponível para toda a aplicação
  - 'max-age' é o tanto de tempo que o cookie vai durar e recebe um valor em segundos
  - 60(min) \* 60(hrs) \* 24(1 dia) \* 30(trinta dias)

- Por adrão o <Image/> do next não carrega imagens externas de qualquer endereço
  - Para carregar imagens externas
    - No arquivo next.config add a propriedade images em nextConfig passando quais domínios('domains') a aplicação permite carregar imagens

# Aula 04 - Integrando os projetos web e mobile

## Libs

- @tailwindcss/forms

## Commands

- npm install -D @tailwindcss/forms

## Notes

- Layout é aquilo que não muda entre as páginas
- Sempre que se faz uma navegação dentro da aplicação é preferível usar o <Link/> ao invés do <a>
- Elementos nativos do html pode ser difíceis de estilizar, e mudam dependendo do browser. Essa lib substitui os elementos padrão, fazendo os
  elemento html receberem todas as estilizações normalmente
- Middleware de autenticação
  - Middleware é quando de se quer interceptar o acesso do usuário a uma determinada rota ou endereço
  - httpOnly -> não torna o cookie visível no inspecionar elemento. Porém ele também não fica disponível para o JS que está rodando no browser,
    apenas na camada backend(next) da aplicação
  - Ao chamar a url de autenticação '[...]github.com/login/oauth/a[...]' e essa rota devolve o user para 'api/auth/callback', logo, como ao
    terminar a autenticação no middleware e criar um novo cookie, este também vai poder ser acessado na página route.ts da 'api/auth/callback'
