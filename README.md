# Wuuu - Storytelling Platform

<img align="right" src="./logo.svg" height="150" width="150" alt="Wuuu Logo">

**Wuuu** is SaaS developed to address the needs of storytelling. 
The platform is also designed to be social, allowing users to share 
their stories with others and collaborate on new stories.

It built with ideas in mind:
- procedural generation of stories;
- oriented to be used in games and interactive fiction;
- social features to share and collaborate on stories;
- easy to use and intuitive interface.

Non-commercial use is free, but commercial use requires a license.
Suggestions and contributions are welcome.

## Stack
Backend stack is as follows:
- Gradle;
- Java 21;
- Spring Boot 3;
- PostgreSQL 16: *used as a relational database for user data*;
- Neo4j 5: *used as a graph database for story entities and relationships*;
- GraphQL;
- Testcontainers;
- Kubernetes (k3s).

Frontend stack is as follows *(TBD)*:
- Node.js;
- Vite;
- Nuxt 3;
- Pinia;
- Phosphor Icons.

## DEVELOPMENT

### Prerequisites
To build and run this application, you need:
- [JDK 21](https://adoptium.net/temurin/releases/?version=21) - runtime & dev tools for the application
- [Rancher Desktop](https://rancherdesktop.io/) - to run the application in a local Kubernetes (actually k3s) cluster
- [Tilt](https://tilt.dev/) - to build and run the application in the local Kubernetes cluster
- [Node.js 21+](https://nodejs.org/) - to build the frontend

### Running the application
1. Start Rancher Desktop
2. Disable Traefik in `Preferences > Kubernetes > Traefik`
3. Install Nginx Ingress:
```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.2/deploy/static/provider/cloud/deploy.yaml
```
4. Start Tilt
```shell
tilt up
```
5. Open the application in a web browser
```shell
open http://localhost
```

### Per service access
1. Get IP address of the node
```shell
kubectl get nodes -o wide
```
2. Use the IP address to access the service adding the port number