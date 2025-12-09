# Boilerplate

A modern boilerplate project with Node.js workspaces, postgres, knex, non-strict TypeScript, Express APIs, Vite, SCSS, [Vuetify](https://vuetifyjs.com/), [MDI icons](https://pictogrammers.com/library/mdi/) and Vue 3 UI.

## Project Structure

```
.
├── api/          # Express API workspace
├── ui/           # Vue 3 + Vite + Vuetify UI workspace
└── package.json  # Root workspace configuration
```

## Features

- **Node.js Workspaces**: Monorepo setup with npm workspaces
- **TypeScript**: TypeScript with strict checking disabled
- **API**: Express server with TypeScript
- **PostgreSQL**: Database with [Knex.js](https://knexjs.org/) query builder
- **UI**: Vue 3 with Vite, [Vuetify](https://vuetifyjs.com/), and [MDI icons](https://pictogrammers.com/library/mdi/)
- **Vuetify**: [Material Design component framework](https://vuetifyjs.com/) for Vue 3
- **Prettier**: Code formatting
- **ESLint**: Code linting

## Getting Started

### Prerequisites

This project uses Node.js. We recommend using [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager) to manage Node.js versions.

#### Installing nvm

**macOS/Linux:**

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

Or using `wget`:

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

After installation, restart your terminal or run:

```bash
source ~/.bashrc
# or
source ~/.zshrc
```

**Windows:**
Download and run the installer from [nvm-windows](https://github.com/coreybutler/nvm-windows/releases).

#### Using nvm with this project

This project includes an `.nvmrc` file that specifies the required Node.js version.

To install and use the correct Node.js version:

```bash
# Install the Node.js version specified in .nvmrc
nvm install

# Use the Node.js version specified in .nvmrc
nvm use
```

### VS Code Extensions

This project includes recommended VS Code extensions for the best development experience. When you open the project in VS Code, you'll be prompted to install them.

**Recommended Extensions:**

- **ESLint** (`dbaeumer.vscode-eslint`) - Linting support
- **Prettier** (`esbenp.prettier-vscode`) - Code formatting
- **Volar** (`vue.volar`) - Vue 3 language support

**To install manually:**

1. Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
2. Type "Extensions: Show Recommended Extensions"
3. Click "Install All" or install them individually

**Note:** The project is configured with Format on Save using Prettier, so make sure the Prettier extension is installed for the best experience.

### Install Dependencies

```bash
npm install
```

### Environment Variables Setup

**Copy the example environment file**

Copy the `.env.example` file to create your `.env` file:

```bash
cp .env.example .env
```

### Database Setup

This project uses PostgreSQL with Knex.js for database management.

#### Step 1: Installing PostgreSQL

You need to install PostgreSQL before setting up the database. Choose the installation method for your operating system:

**macOS (using Homebrew):**

```bash
brew install postgresql@15
brew services start postgresql@15
```

**Linux (Ubuntu/Debian):**

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

**Windows:**
Download and install from [PostgreSQL Downloads](https://www.postgresql.org/download/windows/)

#### Step 2: Creating the Database

After installing PostgreSQL, create the development database:

```bash
# Connect to PostgreSQL
psql -U postgres

# Create the database
CREATE DATABASE boilerplate_dev;

# Exit psql
\q
```

**Note:** The database configuration is already set up in your `.env` file (created in the Environment Variables Setup step above). Make sure the values match your PostgreSQL installation.

**Default values in `.env.example`:**

- `DB_HOST=localhost`
- `DB_PORT=5432`
- `DB_NAME=boilerplate_dev`
- `DB_USER=postgres`
- `DB_PASSWORD=postgres`

**Note:** For production, also set `DB_SSL=true` if using a managed PostgreSQL service.

#### Step 3: Running Migrations

After setting up the database, run migrations to create the database schema:

```bash
# From the project root
npm run migrate:latest --workspace=api

# Or from the api directory
cd api
npm run migrate:latest
```

#### Step 4: Running Seeds

To populate the database with initial data:

```bash
# From the project root
npm run seed:run --workspace=api

# Or from the api directory
cd api
npm run seed:run
```

#### Database Management Commands

**Create a new migration:**

```bash
npm run migrate:make --workspace=api -- <migration_name>
```

**Rollback the last migration:**

```bash
npm run migrate:rollback --workspace=api
```

**Create a new seed file:**

```bash
npm run seed:make --workspace=api -- <seed_name>
```

### Development

Run the API server:

```bash
npm run api
```

Run the UI development server:

```bash
npm run ui
```

### Build

Build the API:

```bash
npm run build:api
```

Build the UI:

```bash
npm run build:ui
```

### Linting

Lint all workspaces:

```bash
npm run lint
```

### Formatting

Format all code:

```bash
npm run format
```

## Workspaces

### API (`/api`)

Express API server running on port 3000 (default).

- Entry point: `api/src/index.ts`
- Build output: `api/dist/`
- **Database**: PostgreSQL with Knex.js
- **Database connection**: `api/src/db.ts`
- **Migrations**: `api/migrations/`
- **Seeds**: `api/seeds/`
- **Knex config**: `api/knexfile.ts`

### UI (`/ui`)

Vue 3 application with Vite and [Vuetify](https://vuetifyjs.com/), running on port 5173 (default).

- Entry point: `ui/src/main.ts`
- Build output: `ui/dist/`
- **Vuetify**: [Material Design component framework](https://vuetifyjs.com/) with pre-built components and theming support
