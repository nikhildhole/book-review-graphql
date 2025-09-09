# 📖 Commit Message Conventions

We follow the **Conventional Commits** standard to keep commit history clean, consistent, and machine-readable.

## ✅ Commit Message Format

```
type(scope): short description
[optional body]
[optional footer(s)]
```

### Example

feat(auth): add JWT-based authentication
added login and register mutations
updated GraphQL schema
BREAKING CHANGE: old session-based login removed
Closes #123

---

## 🔹 Commit Types

| Type         | Meaning                            | Example                                              |
| ------------ | ---------------------------------- | ---------------------------------------------------- |
| **feat**     | A new feature                      | `feat(ui): add dark mode toggle`                     |
| **fix**      | A bug fix                          | `fix(api): correct book review pagination`           |
| **docs**     | Documentation only                 | `docs(readme): update install guide`                 |
| **style**    | Formatting, whitespace             | `style: format book model file`                      |
| **refactor** | Code refactor (no behavior change) | `refactor(auth): simplify token validation`          |
| **perf**     | Performance improvements           | `perf(db): optimize book review query`               |
| **test**     | Adding/updating tests              | `test(resolvers): add review mutation tests`         |
| **build**    | Build system / dependencies        | `build(deps): bump graphql to v16`                   |
| **ci**       | CI/CD configuration                | `ci(github-actions): add commitlint job`             |
| **chore**    | Maintenance, no src/test changes   | `chore: update eslint rules`                         |
| **revert**   | Revert a commit                    | `revert: revert "feat(auth): add login with Google"` |

---

## 🔹 Breaking Changes

- Add a `!` after the type/scope  
  `feat(auth)!: remove legacy login API`
- Or add a `BREAKING CHANGE:` footer

---

✅ By following this, we ensure:

- Clean and consistent commit history
- Automatic changelog generation possible
- Easier collaboration & reviews

---
