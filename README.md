# Nginx + Nodejs

The main idea is that when a user accesses nginx, it will make a call to our node.js application. 
The application will add a record to the mysql database, and then return
```html
<h1>Full Cycle Rocks!</h1>

- List of users registered 
```
The application should return the response when accessing the [http://localhost:8080](http://localhost:8080)

## Executing project
- Clone the typing git clone [repo](https://github.com/MarcosPaesLeme/fullcycle-nodenginx-challenge-2.git)
- Access the folder you cloned the repo
- Execute on terminal `docker compose -up -d`

### Used commands to developed
- `docker compose up -d --build` - To build the image in case of changes
- `docker compose ps` - Checking the current running containers
- `docker logs <container_id>` - Checking the container logs
- `docker compose down` - Stop and remove the containers
- `docker compose stop` - Stop the containers