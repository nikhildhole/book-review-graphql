# Book Review GraphQL

A Node.js + GraphQL server for managing books, users, and reviews.

## 🚀 Scripts

- `pnpm dev` – Run development server (Nodemon)
- `pnpm lint` – Run ESLint
- `pnpm lint:fix` – Auto-fix linting issues
- `pnpm format` – Format code with Prettier
- `pnpm test` – Run tests

## 🛠️ Setup

```bash
git clone https://github.com/nikhildhole/book-review-graphql.git
cd book-review-graphql
pnpm install
pnpm dev
```

## 🐳 Docker

You can build and run the API using Docker:

### Build the Docker image

```bash
docker build -t book-review-api .
```

### Run the container

```bash
docker run -d -p 4000:4000 --name book-review-api book-review-api
```

The API will be available at `http://localhost:4000`.

## 📦 Tech Stack

- Node.js
- GraphQL (Apollo)
- pnpm
- ESLint + Prettier
- Jest (for testing)

---

### 3. **LICENSE**

Open source? Add MIT license:

```text
MIT License
```
