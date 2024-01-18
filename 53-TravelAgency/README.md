# Travel Agency

## Descripción

Este proyecto consiste en una aplicación de agencia de viajes desarrollada en JavaScript utilizando el framework Express.

## Tecnologías y Herramientas Utilizadas

-   **Lenguaje de Programación:** JavaScript
-   **Framework:** [Express](https://expressjs.com/)
-   **Base de Datos:** MySQL
-   **Gestión de Base de Datos y Variables de Entorno:** [filess.io](https://filess.io/)
-   **Despliegue de la Aplicación:** [Render](https://render.com/)

## Arquitectura

-   **Base de Datos y Variables de Entorno:** [filess.io](https://filess.io/) se empleó para la gestión segura de la base de datos MySQL y las variables de entorno.

-   **Despliegue del Código:** La aplicación se despliega en [Render](https://render.com/), una plataforma confiable y fácil de usar para implementar aplicaciones de manera rápida.

-   **Lenguaje de Programación y Framework:** Se utiliza [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) con [Express](https://expressjs.com/) como framework.

-   **Dependencias Adicionales:** Incluyen [Pug](https://pugjs.org/api/getting-started.html) como motor de plantillas, [Bootstrap](https://getbootstrap.com/) para el diseño CSS, [Sequelize](https://sequelize.org/) como ORM, [Dotenv](https://www.npmjs.com/package/dotenv) para la gestión de variables de entorno, [Nodemon](https://www.npmjs.com/package/nodemon) para el reinicio automático del servidor y [Prettier](https://prettier.io/) para el formateo del código.

## Estructura del Proyecto

-   `controllers`: Contiene controladores que gestionan las interacciones entre el modelo y las vistas.
-   `models`: Contiene los modelos que representan las estructuras de datos utilizadas.
-   `routes`: Contiene las rutas que definen las URL disponibles y cómo se manejan.
-   `config`: Contiene scripts SQL para la creación y población de la base de datos.

## Configuración del Entorno de Desarrollo

1. Clona el repositorio en tu máquina local.
2. Instala las dependencias del proyecto con `npm install`.
3. Configura las variables de entorno necesarias para la conexión a la base de datos MySQL.
4. Ejecuta las migraciones de la base de datos utilizando los scripts SQL proporcionados en el directorio `config`.

## Ejecución del Proyecto

Para ejecutar el proyecto en tu entorno de desarrollo, utiliza el comando `npm start`.

## Contribución

Si deseas contribuir, realiza un fork del repositorio y envía un pull request con tus cambios.

## Licencia

Este proyecto está licenciado bajo los términos de la Licencia MIT.
