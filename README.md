# Cashew Production Management System (CPMS)

Angular front-end foundation for a modular Cashew Production Management System.

## Technology

- Angular 16
- Angular Material
- Bootstrap
- NgRx Store / Effects / DevTools
- SCSS
- Lazy-loaded feature modules
- Dynamic reusable forms
- JWT-ready authentication interceptor

## Main Architecture

```text
src/
├── app/
│   ├── core/
│   │   ├── authentication/
│   │   ├── guards/
│   │   ├── interceptors/
│   │   ├── layouts/
│   │   └── settings/
│   ├── sessions/
│   │   ├── login/
│   │   ├── register/
│   │   ├── forgot-password/
│   │   ├── reset-password/
│   │   └── change-password/
│   ├── shared/
│   │   ├── components/
│   │   ├── models/
│   │   ├── pipes/
│   │   ├── directives/
│   │   ├── validators/
│   │   └── utilities/
│   ├── store/
│   ├── modules/
│   ├── services/
│   ├── theme/
│   └── libs/
├── assets/
└── environments/
```

## Feature Modules

- Dashboard
- Farmers
- Farms
- Cashew Trees
- Farm Activities
- Production Plans
- Input Management
- Disease Management
- Spraying
- Harvesting
- Post Harvest
- Production
- Warehouses
- Sales
- Reports
- Notifications
- Users
- Settings

## Important Design Rule

Business features belong in `modules`.

Reusable UI belongs in `shared`.

Global application infrastructure belongs in `core`.

HTTP API calls belong in feature/global services.

Application-wide state belongs in `store`, but NgRx should only be used where shared state is useful.

## Installation

```bash
npm install
npm start
```

Then open:

```text
http://localhost:4200
```

## Backend URL

Development backend configuration is in:

```text
src/environments/environment.ts
```

Default:

```ts
apiUrl: 'http://localhost:8080/api/v1'
```

## Authentication Endpoints Expected

```text
POST /api/v1/auth/login
POST /api/v1/auth/register
```

Expected login response:

```json
{
  "token": "jwt-token",
  "user": {
    "id": 1,
    "fullName": "Example User",
    "username": "example",
    "email": "example@example.com",
    "roles": ["USER"]
  }
}
```

Adjust `AuthService` if the backend uses a different response.

## Registration vs Farmer Registration

`/auth/register` creates a system login account.

The Farmers module should later contain a separate farmer-registration workflow because a farmer record is a business entity and does not always need a system account.

## Suggested Next Implementation Order

1. Connect authentication API.
2. Build dashboard API statistics.
3. Build farmer management.
4. Build farm registration.
5. Build cashew-tree inventory.
6. Build production plans.
7. Build seasonal farm activities.
8. Build disease/spraying workflows.
9. Build harvesting and post-harvest.
10. Add warehouses, sales, notifications and reports.
"# cpms" 
