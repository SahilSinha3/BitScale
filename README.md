# Bitscale Assignment

This repo hosts a Next.js (App Router + Turbopack) playground tailored for the Bitscale assignment. It ships with TypeScript, React 19, Cypress-powered testing, and a friendly automation layer so quality checks and formatting stay on autopilot.

## What's inside

- ⚡️ Next.js 16 with Turbopack dev/build commands for fast feedback.
- 🧱 TypeScript tooling powered by `typescript-eslint`, `tsc --noEmit`, and Next’s own lint rules.
- 🧪 Cypress e2e + component harness with `cypress-axe` for accessibility and `@cypress/code-coverage` hooks.
- 🧹 Prettier + ESLint + lint-staged, all wired through Husky so every commit is clean.
- 🎨 UI shell styled with vanilla CSS modules that live under `styles/` (components/ui folders) so everything stays organized.
- 📄 Utility libraries ready for product features: `html2canvas`, `jspdf`, and `lucide-react`.

## Getting started

```bash
npm install
npm run dev              # starts Next.js with Turbopack at http://localhost:3000
```

Your changes live-reload automatically, so you can keep iterating on `app/page.tsx` (or any component) with almost no wait time.

## Scripts you’ll use often

| Script                            | Does what                                                                        |
| --------------------------------- | -------------------------------------------------------------------------------- |
| `npm run dev`                     | Spins up Next.js locally with Turbopack                                          |
| `npm run build`                   | Production build (also Turbopack) – runs `npm run validate` first via `prebuild` |
| `npm run lint` / `lint:fix`       | ESLint flat config (Next + Cypress + Prettier integration)                       |
| `npm run format` / `format:check` | Prettier formatting entire workspace                                             |
| `npm run type-check`              | Strict TypeScript checking with `tsc --noEmit`                                   |
| `npm run validate`                | Lint ➜ type-check ➜ Prettier check (used before builds/CI)                       |
| `npm run test`                    | Headless Cypress run (all specs)                                                 |
| `npm run test:e2e`                | Launches dev server and runs the e2e suite against it                            |
| `npm run test:open`               | Same as above but opens Cypress runner for debugging                             |
| `npm run cypress:run:component`   | Component testing mode (Next-aware dev server)                                   |

CI-friendly helpers like `npm run validate:fix` (auto-fixing lint/format before a type-check) and `npm run ci` (validate + build) are also available.

## Quality + automation details

- **ESLint** combines `@eslint/js`, `typescript-eslint`, and `eslint-config-next` so JS, TS, React, and Cypress code get consistent rules. Prettier runs inside ESLint for red/green feedback, while `eslint-config-prettier` disables conflicting style rules.
- **Prettier** has its own config/ignore files and gets invoked automatically on staged files through lint-staged. Run `npm run format` whenever you want to tidy the whole repo.
- **TypeScript** stays honest via `npm run type-check`. Lint rules use the project TS program too, so things like unused exports or invalid generics get caught early.
- **Husky + lint-staged**: `npm run prepare` installs local Git hooks; the pre-commit hook runs lint-staged, which in turn executes ESLint (`--fix` + `--max-warnings=0`) and Prettier on just the files you staged. Commits fail fast if anything needs attention.
- **Validation workflow**: `npm run validate` (and its fixing sibling `validate:fix`) bundle linting, type-checking, and Prettier checks into a single command so you can sanity-check your branch or wire it into CI without extra scripting.

## Testing & accessibility

- **End-to-end + component tests** live under `cypress/`. Drop your own specs in `cypress/e2e` or component tests in `cypress/component` and they’ll automatically pick up the shared support code (including `cypress-axe` + coverage hooks).
- `npm run cypress:open` launches the interactive runner, while `npm run test:e2e`/`npm run test:open` automatically boot Next.js (via `start-server-and-test`) before executing the suite—no manual window juggling required.
- **Code coverage** hooks (`@cypress/code-coverage`) are already registered in `cypress.config.ts` and support files. Add your preferred Istanbul instrumentation (ex: Babel or SWC plugins) if you want to publish coverage reports later.

## Pre-commit life

Husky drops a `.husky/pre-commit` hook that sources lint-staged. Any time you run `git commit`, the staged files will be reformatted with Prettier and linted via ESLint before the commit proceeds. You still keep control—fixes happen locally, and you can review them before committing.

## Libraries at your disposal

- **UI helpers**: `lucide-react` for icons, CSS modules for layout/theming, and extra DOM helpers to make PDF exports with `html2canvas` + `jspdf`.
- **Testing**: Cypress, `cypress-axe` (accessibility), `@cypress/code-coverage`, and `start-server-and-test` to orchestrate dev server lifecycles.
- **Tooling**: Prettier, Husky, lint-staged, `typescript-eslint`, and friends keep the repo consistent.

Feel free to extend this setup—drop more Cypress specs under `cypress/e2e`, add component tests, or wire coverage uploads into CI. The heavy lifting for formatting, linting, type safety, accessibility, and automated testing is already in place so you can focus on building features. Have fun! 🎧🩺
