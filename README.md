## webpack-react-typescript

Template for react app using webpack and typescript.

###

<img src="https://i.morioh.com/bffbbd66ea.png" alt="webpack-react-typescript" />

###

## Quick Start

**Start the development**

-   `git clone`
-   `yarn install` or `yarn`
-   `yarn start`

**Build project**

-   `yarn build`

**Lint project**

-   `yarn lint`

**Fix autofixable eslint errors**

-   `yarn lint:fix` or `npm run lint:fix`

If `husky` pre-commit hook willn't work, please run `npx husky-init` command with cli (in project directory)<br /> and
replace new `.husky/pre-commit` file with our.

## Used technologies

-   [React 18](https://reactjs.org/blog/2020/10/20/react-v18.html) as a front-end library.
-   [Webpack 5](https://webpack.js.org/) as a bundler.
-   [TypeScript](https://www.typescriptlang.org/) for type checking.
-   [React Router v6](https://v5.reactrouter.com/web/guides/quick-start) for application routing.
-   [eslint](https://eslint.org/) for lint code.
-   [prettier](https://prettier.io/) for format code.
-   [husky](https://typicode.github.io/husky/#/) for run any script before commit.
-   [commitlint](https://commitlint.js.org/#/) for conventional commit messages.

## Commit Rules

We are use commitlint for lint our commit messages and it has several rules for commits. <br />

**Commit types**

-   `chore`: a commit of the type chore includes the most important commits.
-   `docs`: a commit of the type docs includes the update of documentation.
-   `feat`: a commit of the type feat introduces a new feature to the codebase.
-   `fix`: a commit of the type fix patches a bug in your codebase.
-   `style`: a commit of the type style includes a css styling commit.
-   `refactor`: a commit of the type refactor includes a code refactoring to the codebase.
-   `revert`: a commit of the type revert is used when a developer wants to revert an old commit.
-   `unit`: a commit of the type unit includes a unit testing commit.
-   `test`: a commit for a testing the app work at difference environments
-   `wip`: work in process

**Examples**

```
    git commit -m "feat(readme): generate a readme file"
    git commit -m "fix(header): show current banner"
    git commit -m "chore(release): new release is ready"
```
