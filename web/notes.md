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
