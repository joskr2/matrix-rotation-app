# Matrix Rotation App

Este proyecto es una aplicación construida con Next.js 14, TypeScript, TailwindCSS y Shadcn que permite rotar una matriz cuadrada NxN 90 grados en sentido anti-horario. La aplicación cuenta con una interfaz de usuario que permite ingresar la matriz en formato JSON y visualizar tanto la matriz original como la rotada.

## Características

- **Rotación de Matrices NxN**: La aplicación rota matrices cuadradas 90 grados en sentido anti-horario.
- **Interfaz Intuitiva**: Permite ingresar matrices en formato JSON y muestra los resultados de forma clara y ordenada.
- **Estilizado con TailwindCSS y Shadcn**: La interfaz es responsiva y utiliza componentes UI modernos.

## Tecnologías Utilizadas

- **Next.js 14**: Framework de React para aplicaciones web.
- **TypeScript**: Superconjunto tipado de JavaScript.
- **TailwindCSS**: Framework CSS para un diseño rápido y responsivo.
- **Shadcn**: Componentes UI accesibles y estilizados.
- **Jest**: Framework de pruebas para JavaScript y TypeScript.

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas en tu sistema:

- **Node.js** (versión 14 o superior)
- **npm** o **yarn** como gestor de paquetes.

## Instalación y Configuración

Sigue estos pasos para levantar el proyecto localmente:

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/tu-usuario/matrix-rotation-app.git
   cd matrix-rotation-app
   ```

2. **Instalar las dependencias**
   Si usas npm:

   ```bash
   npm install
   ```

   O si prefieres yarn:

   ```bash
   yarn install
   ```

3. **Ejecutar la aplicación**
   Para levantar el servidor de desarrollo, usa el siguiente comando:
   
   Si usas npm:

   ```bash
   npm run dev
   ```

   O si prefieres yarn:

   ```bash
   yarn dev
   ```

4. **Abrir la aplicación en el navegador**
   La aplicación estará disponible en http://localhost:3000.

## Uso de la Aplicación

1. **Ingresar la matriz**
   - En la interfaz, ingresa una matriz cuadrada en formato JSON en el área de texto.
   - Ejemplo de matriz 3x3: `[[1,2,3],[4,5,6],[7,8,9]]`

2. **Rotar la matriz**
   - Haz clic en el botón “Rotate Matrix”.
   - Verás la matriz original y la matriz rotada mostradas en pantalla.

## Estructura del Proyecto

- **app/**: Contiene la página principal del proyecto.
- **components/ui/**: Contiene los componentes de la interfaz de usuario importados de Shadcn.
- **lib/**: Contiene la lógica para rotar la matriz.
- **styles/**: Contiene el archivo de estilos globales de TailwindCSS.
- **utils/**: Contiene funciones utilitarias, incluyendo la lógica de rotación de matriz.
- **tests/**: Contiene las pruebas unitarias para la lógica del proyecto.

## Pruebas

Las pruebas unitarias están configuradas usando Jest. Para ejecutar las pruebas, usa:

   ```bash
   npm run test
   ```

   O

   ```bash
   yarn test
   ```

Asegúrate de que las pruebas pasen antes de realizar cualquier cambio en el código.

## Ejemplos de Entrada

Aquí tienes algunos ejemplos de matrices que puedes ingresar en la aplicación:

- **Matriz 2x2**: `[[1,2],[3,4]]`
- **Matriz 3x3**: `[[1,2,3],[4,5,6],[7,8,9]]`
- **Matriz 4x4**: `[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]`

## Contribuir

Si deseas contribuir a este proyecto:

1. Haz un fork del repositorio.
2. Crea una rama con tu nueva funcionalidad (`git checkout -b nueva-funcionalidad`).
3. Realiza los cambios y haz commit (`git commit -m 'Agregar nueva funcionalidad'`).
4. Sube los cambios a tu rama (`git push origin nueva-funcionalidad`).
5. Abre un Pull Request para revisión.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
# matrix-rotation-app
