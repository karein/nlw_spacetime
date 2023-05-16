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
