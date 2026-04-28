<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<div style="text-align: center;">
  <h1>ImperatorTask: Frontend</h1>
  <p>
    &acd;
    <a href="https://imperator-task.vercel.app/" target="_blank">PRUEBA LA DEMO</a>
    &acd;
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabla de Contenidos</summary>
  <ol>
    <li>
      <a href="#acerca-del-proyecto">Acerca del Proyecto</a>
      <ul>
        <li><a href="#tecnologías-utilizadas">Tecnologías utilizadas</a></li>
      </ul>
    </li>
    <li>
      <a href="#guía-de-inicio">Guía de Inicio</a>
      <ul>
        <li><a href="#prerrequisitos">Prerrequisitos</a></li>
        <li><a href="#instalación-del-proyecto-local">Instalación del Proyecto local</a></li>
      </ul>
    </li>
    <li>
      <a href="#uso-en-local">Uso en local</a>
    </li>
    <li>
      <a href="#uso-de-la-demo-subida-en-vercel">Uso de la demo subida en Vercel</a>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## Acerca del Proyecto

![Project Screenshot][project-screenshot]

Se trata del frontend del dashboard que consume la [API Rest desarrollada](https://github.com/dauncosaciar/imperator-task-backend) que gestiona `Usuarios`, `Proyectos`, `Tareas`, `Notas` y `Colaboradores` de la siguiente forma:

1. `Usuarios`:
   - Registro de usuarios usando un email.
   - Habilitar cuentas de usuarios usando un token que llega al email utilizado para registrar una cuenta.
   - Reestablecer contraseña de usuarios usando un token que llega al email utilizado para registrar una cuenta.
   - Inicio y cierre de sesión de usuarios.
   - Modificación de datos del usuarios.

2. `Proyectos`:
   - Alta de un nuevo Proyecto.
   - Edición de los datos generales de un Proyecto existente.
   - Eliminación de un Proyecto existente junto con todos los Colaboradores, Tareas y Notas asociados.
   - Asignación de nuevos Colaboradores.

3. `Tareas`:
   - Alta de nuevas Tareas por Proyecto.
   - Edición de los datos generales de una Tarea existente.
   - Eliminación de una Tarea existente junto con todas las Notas asociadas.
   - Cambio de estado de las Tareas.

4. `Notas`:
   - Alta de nuevas Notas por Tarea.
   - Eliminación de Notas existentes.

5. `Colaboradores` o `Miembros`:
   - Son Usuarios registrados que se asignan a un Proyecto que no les pertenece para ayudar con la conclusión de sus Tareas. Un Usuario que crea un Proyecto es su **Mánager**.
   - Los Colaboradores no pueden modificar los datos generales de un Proyecto ni eliminarlos.
   - Los Colaboradores sí pueden ver el contenido de un Proyecto: Tareas y Notas asociadas.
   - Los Colaboradores no pueden agregar ni eliminar Tareas y Colaboradores nuevos a un Proyecto que no sea de ellos.
   - Los Colaboradores sí pueden cambiar el estado de una Tarea.
   - Los Colaboradores sí pueden crear una Nota en una Tarea mas no pueden eliminar Notas creadas por otros Usuarios.

<p style="text-align: right;">[<a href="#readme-top">volver hacia arriba</a>]</p>

### Tecnologías utilizadas

![React.js][React.js] ![Typescript][Typescript] ![Javascript][Javascript] ![React-Router][React-Router] ![SASS][SASS] ![React-Query][React-Query] ![React-Hook-Form][React-Hook-Form] ![BEM][BEM] ![ZOD][ZOD]

<p style="text-align: right;">[<a href="#readme-top">volver hacia arriba</a>]</p>

<!-- GETTING STARTED -->

## Guía de Inicio

A continuación, se detallan las consideraciones a tener en cuenta para ejecutar este Proyecto de forma local con la finalidad de probar su funcionamiento.

### Prerrequisitos

El listado siguiente **es lo que debes tener instalado y configurado en tu máquina local** antes de poder instalar y ejecutar el Proyecto ImperatorTask Backend.

1. **Instalar Node.js**: Debes instalar la versión `22.21.1` de Node.js para poder ejecutar sin problemas el proyecto. Además, con node se instala automáticamente NPM.

### Instalación del Proyecto local

Abre una terminal con permisos de administrador (recomendado) y realiza lo siguiente:

1. Clona el repositorio:

   ```sh
   git clone https://github.com/dauncosaciar/imperator-task-frontend.git
   ```

2. Dirígite al directorio e ingresa a la carpeta del repositorio clonada.

3. Instala las dependencias con:

   ```sh
   npm install
   ```

4. Haz una copia del archivo `.env.example` y cambiale el nombre a `.env.local`.

5. Debes editar el archivo `.env.local` cambiando los valores de las variables de entorno presentes con tus valores reales. En este caso, debes colocar el valor a la variable `VITE_API_URL` a `http://localhost:3333/api`, que es donde se ejecuta el backend que consume este proyecto.

6. Levanta el proyecto con:

   ```sh
   npm run dev
   ```

   Al ejecutar este comando, el frontend se levantará en el puerto `7777` ya que así fue configurado en el archivo `vite.config.ts`, en el apartado:

   ```js
   server: {
     port: 7777;
   }
   ```

   Si deseas utilizar otro puerto, puedes cambiar el valor de la propiedad `port` por otro número de puerto de tu agrado pero al hacer esto también tendrás que modificar el valor de la variable de entorno `FRONTEND_URL` del `.env` del proyecto backend.

   Ahora, si el ejecutar el comando de npm mencionado, en la consola ves algo parecido a esto:

   ```sh
    > imperator-task-frontend@0.0.0 dev
    > vite


      VITE v6.2.5  ready in 179 ms

      ➜  Local:   http://localhost:7777/
      ➜  Network: use --host to expose
      ➜  press h + enter to show help
   ```

   Quiere decir que has instalado correctamente el proyecto en tu máquina y ya puedes utilizarlo.

## Uso en local

Para utilizar el proyecto que levantaste, ingresa al navegador web de tu gusto y en la barra de direcciones escribe:

```http
http://localhost:7777/auth/login
```

Esto te llevará a la página de **Login** para que inicies sesión. Sino tienes una cuenta en el Dashboard, puedes hacer click en el link de **Regístrate** que aparece en la misma página de inicio de sesión y cuyo link es:

```http
http://localhost:7777/auth/register
```

Una vez te registres, si configuraste MAILTRAP estableciendo correctamente los valores de las variables de entorno de EMAIL TESTING del backend, te llegará un email de confirmación al **sandbox** en Mailtrap. Debes confirmar la cuenta para que puedas comenzar a utilizarla.

## Uso de la demo subida en Vercel

Para usar la demo, en tu navegador debes ingresar a:

[https://imperator-task.vercel.app/](https://imperator-task.vercel.app/)

Los datos de los usuarios que puedes usar para probar la app son los siguientes:

**USUARIO 1**:

```
email: john.smith@imperatortask.com
password: 12345678
```

**USUARIO 2**:

```
email: anita.johnson@imperatortask.com
password: 12345678
```

¡FELIZ USO!

<p style="text-align: right;">[<a href="#readme-top">volver hacia arriba</a>]</p>

<!-- MARKDOWN LINKS & IMAGES -->

[project-screenshot]: public/assets/img/imperatortask-screenshot.jpg
[React.js]: https://img.shields.io/badge/React-58C4DC?style=for-the-badge&logo=react&logoColor=23272F
[React-Router]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[Typescript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[Javascript]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[SASS]: https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white
[React-Query]: https://img.shields.io/badge/React_Query-FD5C23?style=for-the-badge&logo=tanstack&logoColor=white
[React-Hook-Form]: https://img.shields.io/badge/React_Hook_Form-ec5990?style=for-the-badge&logoColor=white
[BEM]: https://img.shields.io/badge/bem-d1d5db?style=for-the-badge&logoColor=white
[ZOD]: https://img.shields.io/badge/zod-418bff?style=for-the-badge&logoColor=white
