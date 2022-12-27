# School Website

```sh
gh repo clone ElektronPlus/school-website
```

## Development

```sh

### Run Front-end

```sh
cd apps/frontend
pnpm install
pnpm dev
```

### Run Back-end

#### CMS

```sh
cd backend/cms
bash generate-secrets.sh
pnpm install
pnpm dev
```