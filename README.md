# React + TypeScript + Vite

### Necessário para rodar o projeto:
- Node Js 20+
- npm

### Para rodar
- `npm i`
- `npm run dev`


### Observações
- Guias de cores e fontes para estilização disponível em `./src/utils/styles.ts`
- Componentes gerais criados deve ficar em `./src/components`
- Não foi implementado bibliotecas de estilização, então uma boa prática é criar um arquivo de `styles.ts` para casos que a estilização do proprio material UI não sirva (props dos componentes nativos) componente ou página criada:
  - Nome da pasta igual ao nome do componente e os arquivos com a seguinte nomeclatura
    - `index.tsx`
    - `styles.ts`