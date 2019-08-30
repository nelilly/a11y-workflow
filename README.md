# Accessibility Workflow
Code and NPM packages to implement an accessibility workflow.

1. Test early.
1. Test often.
1. Make it painless to remember.
1. Make it painful to forget.

[Accessibility Workflow Presentation](https://docs.google.com/presentation/d/1aENJvDoKtUL0n1fpzoSs-KxlNNVuggwvhi85dg6IkR8/edit?usp=sharing)

## Installation Instructions
> ☛ TLDR: Assuming you already have stylelint, eslint, react, and jest created in your codebase... ```npm install stylelint-a11y eslint-plugin-jsx-a11y react-axe jest jest-axe husky --saveDev``` and create/update the appropriate config files.

The following packages are installed through the package.json with `npm install`. Config information for `.babelrc` and `.eslintrc` is contained within the package.json file.

### Accessibility Packages
#### [axe-core](https://github.com/dequelabs/axe-core)
Axe is the open-source accessibility testing engine that runs the Axe extension in Chrome and Firefox. Installed as a dependency for some of the other packages.

### Linting
#### [stylelint-a11y](https://github.com/YozhikM/stylelint-a11y)
Style lint will lint your CSS files and `stylelint-ally` will check that your CSS is using best practices to prevent accessibility issues. Config information is for this repo contained within the package.json file under the `stylelint` key.

#### [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
Config information for this repo is contained within the package.json file under the `eslintConfig` key.

#### custom linting

### Console Warnings
#### [react-axe](https://github.com/dequelabs/react-axe)
`react-axe` will display accessibility issues in the console in an environment of your choosing (`dev`, `local`, etc.).

### Unit Tests
#### [jest-axe](https://github.com/nickcolley/jest-axe)
If you&rsquo;re using Jest for your unit testing then this package can be used in conjunction with it. To use `jest-axe` you just need to add some simple code into your unit tests.

### Commit Hooks
#### [husky](https://github.com/typicode/husky)
Husky allows you to prevent code from being committed or pushed if it doesn't pass validation, linting, or testing. Config information for this repo is contained within the package.json file under the `husky` key.

## Automated Continuous Integration
- [jest-puppeteer-axe](https://github.com/WordPress/gutenberg/tree/master/packages/jest-puppeteer-axe)

## Manual Testing
Visit the [a11y-manual-testing repository](https://github.com/nelilly/a11y-manual-testing) for instructions on setting up the appropriate resources for manual accessibility testing. The chief components are: 

- Creating a home page or bookmark folder with accessibility resources (rules, guidelines, application documentation, samples, patterns, etc.)
- Use your favorite virtual machine software with the appropriate platform image (Win10 or MacOS) for cross-platform testing.
- Add screen readers
- Add accessibility testing extensions
