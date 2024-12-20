# Template description

This is a template of the microservice on the NestJS with a base structure.

## Example of the Service Methods

An example of how to name methods of services that perform CRUD operations on entities:

| Method              | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| `get()`             | Fetches single entity that matches the filter criteria.                     |
| `all()`             | Fetches all entities that match the provided filter criteria.               |
| `byID()`            | Fetches an entity by its unique ID.                                         |
| `list()`            | Fetches all entities based on the provided filter criteria with pagination. |
| `create()`          | Creates new entity using the provided parameters.                           |
| `createMultiple()`  | Creates multiple entities using the provided parameters.                    |
| `update()`          | Updates an existing entity using the provided parameters.                   |
| `updateAll()`       | Updates all entities that match the provided criteria.                      |
| `updateByID()`      | Updates an existing entity by its unique ID using the provided parameters.  |
| `delete()`          | Deletes single entity that matches the provided filter criteria.            |
| `deleteAll()`       | Deletes all entities that match the provided filter criteria.               |
| `deleteByID()`      | Deletes an entity by its unique ID.                                         |

## License

This project is licensed under the MIT License.

