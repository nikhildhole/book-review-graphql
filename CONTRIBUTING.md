# Contributing Guidelines

## Branching Strategy

- **main** → always production-ready, deployable.
- **feature/** → for new features. Example: `feature/add-login`.
- **bugfix/** → for bug fixes. Example: `bugfix/fix-typo`.
- **hotfix/** → for urgent production fixes. Example: `hotfix/critical-issue`.
- **release/** → (optional) for release prep. Example: `release/v1.0.0`.

> For solo development, you can work directly on `main`, but it’s recommended
> to still use feature branches for practice.

---

## Pull Requests

- Always create a PR into `main` (even if you’re the only reviewer).
- GitHub Actions (lint, test, Gemini AI review) must pass.
- Resolve all comments before merging.
- Use squash merges to keep history clean.

---

## Branch Protection (future setup)

- Require pull requests before merging into `main`.
- Require status checks (lint + test + Gemini).
- Require conversation resolution.
- Restrict direct pushes to `main`.

---

## Commit Messages

Follow conventional commits:

- `feat: add login system`
- `fix: correct typo in README`
- `docs: update contributing guide`
- `chore: update dependencies`
- `test: add user model tests`

---

## Code Style

- Code must follow ESLint + Prettier rules.
- Format on save (VS Code: `"editor.formatOnSave": true`).
- Run locally: `pnpm lint && pnpm test`.

# Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Run `pnpm lint && pnpm test` before pushing
4. Submit a PR 🚀
