# Petshop

Projeto do Checkpoint 5 de Web Development, turma 1ESPJ, curso de Engenharia de Software. Professor: Wellington Cidade Silva.

Catálogo demonstrativo desenvolvido com React, Vite, Tailwind CSS e React Router. A página inicial apresenta o petshop, e a página de produtos exibe nomes, descrições e preços. A navegação destaca a página ativa e se adapta a telas pequenas. Não há processamento de compras.

## Equipe e responsabilidades

| Integrante | RM | Responsabilidades |
| --- | --- | --- |
| Victor Ulisses de Morais Silva | 572634 | Tech Lead: configuração inicial, integração, revisão, validação e entrega |
| Henrique Giusti de Souza | 570766 | Home, Produtos e ajustes de CSS |
| Pietro Alexandre Guerato | 571232 | Navbar, Footer, Card e rotas no App |

Repositório público da organização: https://github.com/LOJADEBRINQUEDO/PETSHOP

Os dados para entrega no Teams estão em [`integrantes.txt`](./integrantes.txt).

## Executar

A validação desta entrega foi realizada com Node.js 25.8.1 e npm 11.11.0.

```bash
git clone https://github.com/LOJADEBRINQUEDO/PETSHOP.git
cd PETSHOP
git switch main
npm ci
npm run dev
```

Abra o endereço exibido pelo Vite no terminal.

```bash
npm run lint     # Verifica o código com ESLint
npm run build    # Gera a versão de produção em dist/
npm run preview  # Serve a versão compilada localmente
```

O projeto usa BrowserRouter. Em uma hospedagem, configure o servidor para servir `index.html` também ao acessar diretamente `/produtos` ou outra rota da aplicação.

## Estrutura

```text
.vscode/                 Configurações e extensões recomendadas
src/
  components/
    Navbar.jsx
    Footer.jsx
    Card.jsx
  pages/
    Home.jsx
    Produtos.jsx
  App.jsx                Layout e configuração de rotas
  main.jsx               Inicialização do React
  index.css              Tailwind e estilos globais
integrantes.txt          Nomes, RMs e link para entrega
```

No VS Code, instale as extensões recomendadas pelo workspace: ESLint e Tailwind CSS IntelliSense. As configurações compartilhadas aplicam correções do ESLint ao salvar explicitamente.

## Fluxo de contribuição

1. Atualize `dev` e crie uma branch para a tarefa.
2. Desenvolva a demanda com pelo menos três commits semânticos por tarefa e por integrante, conforme o enunciado.
3. Execute `npm run lint` e `npm run build`.
4. Envie a branch e abra um Pull Request com destino a `dev`.
5. O Tech Lead revisa a entrega e integra as alterações.
6. Após a validação final, integre `dev` em `main`, preservando os commits.

Formato: `tipo(escopo): descrição`, com escopo opcional.

- `feat`: nova funcionalidade.
- `fix`: correção de problema.
- `chore`: manutenção e configuração.
- `docs`: documentação.
- `style`: formatação de código.
- `refactor`: reorganização sem mudança de comportamento.

Os novos commits não devem incluir `Co-authored-by`.

## Entrega

O Tech Lead deve enviar o arquivo `integrantes.txt` na tarefa do Teams e conferir que a versão final está disponível na branch `main` do repositório público.

O histórico anterior à finalização contém tarefas com menos de três commits. Os ajustes finais não substituem a exigência individual do enunciado; cada integrante deve conferir suas próprias contribuições.
