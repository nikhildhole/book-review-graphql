# Auto Release Workflow & Versioning Guide

This document describes the **Auto Release** GitHub Actions workflow and the **Semantic Versioning (SemVer)** rules used in this repository.

---

## Workflow Name

**Auto Release**

## Trigger

The workflow runs automatically on:

- Pushes to the `main` branch
- Pushes to the `develop` branch

on:
  push:
    branches:
      - main
      - develop

---

## Jobs

### Release Job

* **Runs on:** `ubuntu-latest`
* **Node environment:** `production`

#### Steps

1. **Checkout Repository**

```yaml
- uses: actions/checkout@v3
```

2. **Setup Node.js**

```yaml
- uses: actions/setup-node@v3
  with:
    node-version: 22
```

3. **Setup pnpm**

```yaml
- uses: pnpm/action-setup@v2
  with:
    version: 10
```

4. **Install Dependencies**

```yaml
- run: pnpm install
```

5. **Linting**

```yaml
- run: pnpm run lint
```

6. **Run Tests**

```yaml
- run: pnpm test
```

7. **Determine Environment**

```yaml
- run: |
    if [ "${GITHUB_REF_NAME}" == "develop" ]; then
      echo "ENV=development" >> $GITHUB_ENV
    else
      echo "ENV=production" >> $GITHUB_ENV
    fi
```

8. **Set Up Git User**

```yaml
- run: |
    git config --global user.email "github-actions[bot]@users.noreply.github.com"
    git config --global user.name "github-actions[bot]"
```

9. **Bump Version & Create Tag**

```yaml
- id: version
  run: |
    if [ "${GITHUB_REF_NAME}" == "develop" ]; then
      pnpm run release -- --prerelease alpha
    else
      pnpm run release
    fi
    echo "VERSION=$(node -p "require('./package.json').version")" >> $GITHUB_ENV
```

10. **Push Changes & Tags**

```yaml
- uses: stefanzweifel/git-auto-commit-action@v6
  with:
    commit_message: 'chore(release): v${{ env.VERSION }}'
    tag: 'v${{ env.VERSION }}'
    branch: ${{ github.ref_name }}
    push_options: '--follow-tags'
```

11. **Create GitHub Release**

```yaml
- uses: ncipollo/release-action@v1
  with:
    tag: 'v${{ env.VERSION }}'
    name: 'Release v${{ env.VERSION }}'
    body: 'Automated release from commit ${{ github.sha }} on branch ${{ github.ref_name }}'
    token: ${{ secrets.GH_PAT }}
```

---

## Versioning Guide

This project uses **Semantic Versioning (SemVer)**:

```
MAJOR.MINOR.PATCH
```

Example: `2.5.1` → `MAJOR=2`, `MINOR=5`, `PATCH=1`

### When to Bump Versions

| Version Type | Increment When                              | Example           |
| ------------ | ------------------------------------------- | ----------------- |
| **Major**    | Breaking changes / incompatible API changes | `2.0.0` → `3.0.0` |
| **Minor**    | New features in a backwards-compatible way  | `2.3.1` → `2.4.0` |
| **Patch**    | Bug fixes or small improvements             | `2.3.1` → `2.3.2` |

### Pre-releases

* For features not production-ready, e.g., `2.4.0-alpha.1` or `2.4.0-beta.1`.
* Typically used on `develop` branch before merging into `main`.

---

### How This Workflow Handles Versioning

* **Develop Branch (`develop`)** → pre-release (alpha)
* **Main Branch (`main`)** → regular release
* Version bump type is determined automatically by `pnpm release` based on commit messages (following **conventional commits**).

```yaml
if [ "${GITHUB_REF_NAME}" == "develop" ]; then
  pnpm run release -- --prerelease alpha
else
  pnpm run release
fi
```

---

## Notes

* Ensure that `GH_PAT` is set as a **secret** in your repository with permissions to create releases and push tags.
* Compatible with **pnpm-managed projects**.
* Adjust Node.js or pnpm versions as required.

```

---

If you want, I can also make a **more visual version** with a **flow diagram showing develop vs main branch releases**—it’s great for onboarding new contributors.  

Do you want me to create that too?
```
