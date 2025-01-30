<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>


## Superhero API Description

Welcome to the Humble Superhero API, a simple and functional API that lets users manage superheroes with their names, superpowers, and humility scores. Superhero API is created based on [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Setup instructions

1. Clone the repository:
```
git clone https://github.com/anacicoare/HumbleSuperhero.git
```
2. Install dependencies:
```
npm install
```
3. Run the server:
```
npm run start:dev
```


API will be available at:
http://localhost:8000

## Features

- **Add a new superhero**: Provide the superhero's name, superpower, and a humility score (0–10).
- **List all superheroes**: Get a list of superheroes sorted by their humility scores in descending order.

## Testing

The project includes **Jest** unit tests to verify core functionality.

### Run Tests
```
npm run test
```
### Sample Tests
**SuperheroController:**
- Validates that superheroes can be added and retrieved correctly.
- Ensures that invalid humility scores trigger a BadRequestException.

## Technologies
- Node.js with NestJS framework
- TypeScript for static typing and code clarity
- Class Validator for data validation
- In-memory database (simple array) for quick prototyping

## Project Structure
```
src/
  ├── superhero/                  # Superhero module
  │   ├── superhero.controller.ts # Handles incoming requests and responses
  │   ├── superhero.service.ts    # Contains business logic and data handling
  │   └── superhero.dto.ts        # Data Transfer Object for input validation
  ├── app.module.ts               # Root application module
  └── main.ts                     # Entry point of the application
```

## Validation and Error handling
The ValidationPipe globally validates all incoming requests.

Errors return meaningful status codes (e.g., 400 Bad Request for validation failures).


## If I had more time

If I had more time, I would explore the following improvements:

### Persistent Database:
Replace the in-memory array with a database like PostgreSQL or MongoDB for persistent storage.

### Authentication:
Implement JWT-based authentication to secure the API, limiting access to authorized users.

### Swagger Documentation:
Add Swagger/OpenAPI documentation to provide an interactive interface for testing and exploring endpoints.

### Pagination and Filtering:
Enhance the GET /superheroes endpoint to support pagination and filtering by fields like name or humility score.

### Testing:
Increase test coverage, including integration tests for complete API flows.

