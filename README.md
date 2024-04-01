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
- Gradle
- Java 21
- Spring Boot 3
- PostgreSQL 16
- GraphQL
- Testcontainers
- Kubernetes (k3s)

Frontend stack is as follows *(TBD)*:
- PNPM
- Vite
- Vue 3
- Pinia
- Tailwind CSS (?)
- Apollo Client (?)
- Phosphor Icons

## DEVELOPMENT

### Prerequisites
To build and run this application, you need:
- [JDK 21](https://adoptium.net/temurin/releases/?version=21) - runtime & dev tools for the application
- [Rancher Desktop](https://rancherdesktop.io/) - to run the application in a local Kubernetes (actually k3s) cluster
- [Tilt](https://tilt.dev/) - to build and run the application in the local Kubernetes cluster
- [PNPM](https://pnpm.io/) - to manage the frontend dependencies

### Running the application
1. Start Rancher Desktop
2. Start Tilt
```shell
tilt up
```
3. Open the application in a web browser
```shell
open http://localhost
```

### Per service access
1. Get IP address of the node
```shell
kubectl get nodes -o wide
```
2. Use the IP address to access the service adding the port number