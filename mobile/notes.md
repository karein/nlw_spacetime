# Aula 1

## Iniciando projeto

1. criar projet com 'create-expo-app'
2. Trocar a extensão do App de .js para .tsx
3. rodar comando 'run start' e informar 'yes' para usar typescript no projeto
   <br><br/>
4. instalar libs tailwindcss 'nativewind, tailwindcss'
5. rodar comando 'tailwind init'
6. sutituir 'content' do arquivo tailwindcss.config por 'content: ["./App.tsx", "./app/**/*.tsx"]'
7. add 'plugins: ["nativewind/babel"],' em babel.config
8. add 'types:["nativewind/types"]' em compilersoptions no arquivo tsconfig
9. parar a plicação e rodar 'run start' novamente
10. instalar '@rocketseat/eslint-config'
11. criar arquivo .eslintrc
12. extender configuração react ('{"extends":["@rocketseat/eslint-config/react"]}') no .eslintrc
13. instalar 'prettier-plugin-tailwindcss'
14. criar arquivo prettier.config e add 'module.exports = {plugins: [require('prettier-plugin-tailwindcss')],}'

## Libs

- npm i nativewind
- npm i tailwindcss -D
- npm i eslint @rocketseat/eslint-config -D
- npm i prettier-plugin-tailwindcss -D

## Commands

- npx create-expo-app <project-name>
- npm run start
- npx tailwindcss init

## Notes

- Estilo  
  O RN não tem herança de estilo, então o elemento filho não herda estilo, como por exemplo uma cor de texto tefinida no elemento pia/mãe, tendo que ser adicionado no proprio elemento.  
  EX:

  - html
    - div {estilo: bg=black; color=white}
      - p (elemento filho herda a cor banca)
  - RN
    - div {estilo: bg=black}
      - p {estilo: color=white} (a estilização tem que ser adicionada nele)

  No RN/ambiente mobile em geral não existe 'px'(pixel), pois a densidade de px varia de acordo com o dispositivo  
  Por padrão, todos os elemento do RN tem display flex

## Check List

### 01 Setup Project

- [] Mobile
  - [] Expo
  - [] NativeWind
  - [] ESLint + Prettier Tailwind

# Aula 2 - Avançando o back-end e Front-end

## Libs

- @expo-google-fonts/<font-name>
- expo-font
- react-native-svg-transformer

## commands

- npx expo install @expo-google-fonts/roboto @expo-google-fonts/bai-jamjuree expo-font
- npx expo install react-native-svg
- react-native-svg
- npm i react-native-svg-transformer -D

## Notes

- No RN apos importar a fonte, não se comtrola mais o peso dela por css `<Text className="Roboto_400 text-5xl font-bold text-gray-50">`, mesmo  
  tendo o 'font-bold'ele não será aplicado, pois o peso e defininido na propria fonte.

- ImageBackground é equivalente a:

  ```html
  <div>
    <img src="" />
  </div>
  ```

  a estilização pela propriedade 'className' afeta o que seria a '<div>' já o 'imageStyle' seria referente a '<img/>'

- a extenssão 'd.ts' informa que dentro do arqui só vai ter typescript(somente a parte de tipagem)
- `declare module *.png` faz com que o TY entenda que todo arquivo que termina com 'png' é um arquivo que se pode importar

- Importar SVG

  1. Acessar e seguir 'https://github.com/kristerkari/react-native-svg-transformer' a documentação ~fim rsrs~
  2. instalar 'npx expo install react-native-svg'
  3. instalar 'npm i react-native-svg-transformer -D'
  4. add metro.config
  5. se estiver usando TY, declarar o módulo '.svg' em um arquivo 'd.ts'

  - Ao importar um svg, ele se tornará um componente, por esse motivo ele deve ser importado com a 1° letra maiuscula (a lib resposável por isso é a react-native-svg-transformer)

- Por padrão, o natvewind só suporta os components globais(ex: View, Text etc) do react native e não para um svg transformado em componente

- Usar o tailwind com components não globais
  1. importar 'styled' do 'nativewind'
  2. criar uma constante recebendo a função 'styled' passando o componente/svg como argumento `const StyledStripes = styled(Stripes)`
  3. Usar essa const como componente no lugar do svg '<StyledStripes/>'

# Aula 03 - Integrando UI com bibliotecas

## Libs

- expo-auth-session
- expo-crypto
- axios
- expo-secure-store
- expo-router
- react-native-safe-area-context
- react-native-screens
- expo-linking
- expo-constants
- expo-status-bar

## Commands

- npx expo install expo-auth-session expo-crypto
- npm i axios
- npx expo install expo-secure-store
- npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar

## Notes

- Auth

  - Registar um 'new OAuth application' para o mobiles também, como foi feito na web
  - O 'Authorization callback URL' deve ser definido de acordo aom a documentação
    - https://docs.expo.dev/guides/authentication/#github

- expo-secure-store é uma lib para se trabalhar com storage de informações mais sensíveis

# Aula 04 - Integrando os projetos web e mobile

## Libs

- d

## Commands

-

## Notes

- !!token converte a token para booblean. a token é uma string, se o token existir, converte para true
- redirect={} -> redireciona o user para a próx. rota automaticamente caso o valor que ele recebe seja true
