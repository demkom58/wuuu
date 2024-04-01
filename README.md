# Wuuu

Wuuu is software developed to address the needs of storytelling in a digital world. It is a platform that allows users to create, share, and consume stories in a variety of formats. The platform is designed to be flexible and extensible, allowing users to create stories in a variety of formats, including text, images, audio, and video. The platform is also designed to be social, allowing users to share their stories with others and collaborate on new stories.

It built with idea in mind of procedural generation of stories, where the platform can generate stories based on user input and preferences. The platform is also designed to be extensible, and can be used in a variety of contexts, including games, interactive fiction, and other forms of digital storytelling.

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

## DEV UX

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