# TC3041 Proyecto Final

# *DocWallet*
---

##### Integrantes:
1. *Marcela Fuentes Lecuona* - *A01748161* - *CSF*
2. *Carla Pérez Gavilán Del Castillo* - *A01023033* - *CSF*

---
## 1. Aspectos generales

Las orientaciones del proyecto se encuentran disponibles en la plataforma **Canvas**.

Este documento es una guía sobre qué información debe entregar como parte del proyecto, qué requerimientos técnicos debe cumplir y la estructura que debe seguir para organizar su entrega.

### 1.1 Requerimientos técnicos

A continuación se mencionan los requerimientos técnicos mínimos del proyecto, favor de tenerlos presente para que cumpla con todos.

* El equipo tiene la libertad de elegir las tecnologías de desarrollo a utilizar en el proyecto.
* El proyecto debe utilizar al menos dos modelos de bases de datos diferentes, de los estudiados en el curso.
* La arquitectura debe ser modular, escalable, con redundancia y alta disponibilidad.
* La arquitectura deberá estar separada claramente por capas (*frontend*, *backend*, *API RESTful*, datos y almacenamiento).
* Los diferentes componentes del proyecto (*frontend*, *backend*, *API RESTful*, bases de datos, entre otros) deberán ejecutarse sobre contenedores [Docker](https://www.docker.com/) o desplegarse en un servicio en la nube.
* Todo el código, *datasets* y la documentación del proyecto debe alojarse en este repositorio de GitHub siguiendo la estructura que aparece a continuación.

### 1.2 Estructura del repositorio
El proyecto debe seguir la siguiente estructura de carpetas:
```
- / 			        # Raíz de todo el proyecto
    - README.md			# Archivo con los datos del proyecto (este archivo)
    - frontend			# Carpeta con la solución del frontend (Web app)
    - api			# Carpeta con la solución de la API o el backend
    - dbs			# Carpeta con los modelos, catálogos y scripts necesarios para generar las bases de datos
    - docs			# Carpeta con la documentación del proyecto
```

### 1.3 Documentación  del proyecto

Como parte de la entrega final del proyecto, se debe incluir la siguiente información:

* Justificación de los modelo de *bases de datos* que seleccionaron.
* Descripción del o los *datasets* y las fuentes de información utilizadas.
* Guía de configuración, instalación y despliegue de la solución.
* Documentación de la API (si aplica). Puede ver un ejemplo en [Swagger](https://swagger.io/). 
* El código debe estar documentado siguiendo los estándares definidos para el lenguaje de programación seleccionado.

## 2. Descripción del proyecto

En la realidad actual, los registros en papel son cosa del pasado. Basada en MongoDB, Redis, y [herramienta para la página web], DocWallet es una plataforma web que agiliza el proceso digital de llevar el control de tus documentos en la nube. Basta con crear un usuario, y subir tus documentos, DocWallet se encargará de que tengas todo organizado en un solo lugar y de avisarte antes de que estos sean eliminados. Si buscas tener más orden y almacenamiento temporal para tus archivos, DocWallet es la solución más eficiente y práctica para ti.

## 3. Solución

A continuación aparecen descritos los diferentes elementos que forman parte de la solución del proyecto.

### 3.1 Modelos de *bases de datos* utilizados

Tras realizar un análisis extensivo, se tomó la decisión de utilizar dos modelos de bases de datos: [MongoDB](https://www.mongodb.com/why-use-mongodb) y [Redis](https://redis.io/topics/introduction).
¿Por qué? A continuación se presentarán las razones de cada modelo.

El modelo y arquitectura de **MongoDB** permiten que la aplicación web sea escalable, eficiente en cuestiones de tiempo, y con la posibilidad de evolucionar en el futuro. Además de tener la capacidad de manejar cantidades enormes de datos y tráfico, MongoDB es una herramienta muy poderosa que permite que los desarrolladores tengan felxibilidad con los datos almacenados y la estructura de los mismos.

**Redis** es una herramienta extremadamente rápida con la capacidad de resolver peticiones en milisegundos, permitiendo así que se puedan procesar grandes números de operaciones en poco tiempo. Gracias a esto, Redis es una excelente opción para generar un caché (almacenamiento temporal) de datos ya que todos los datos en Redis están guardados en memoria en lugar de un disco y pueden ser accesados casi inmediatamente.

### 3.2 Arquitectura de la solución

Como fue mencionado anteriormente, EquineX utiliza los modelos de bases de datos MongoDB y Redis para poder brindar funcionalidad a sus usuarios. En la instancia de MongoDB se tienen 2 tablas (Caballos y Users) con el propósito de almacenar los datos. Por otra parte, se utiliza Redis como almacenamiento temporal de los datos de Users para comprobar que estos datos existan sin la necesidad de accesar a MongoDB.

![Diagrama](,/../frontend/Img/Diagrama.png)

### 3.3 Frontend
EquineX tiene varias pantallas, cada una con alguna funcionalidad en especial:
- **Pantalla de inicio:** Darle la bienvenida al usuario
- **Login y registro:** Permite al usuario accesar a su cuenta y realizar operaciones de registro
- **Pantalla de operaciones:** Permite que los usuarios que han iniciado sesión realicen operaciones de agregación, edición, o eliminación
- **Búsqueda:** Seleccionar entre tipo de atleta y buscar por nombre

#### 3.3.1 Lenguaje de programación
Se utilizó el lenguaje [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) para la creación de las páginas de la aplicación web y el lenguaje [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) para darle estilo a las mismas.
#### 3.3.2 Framework
Para el framework del proyecto se utilizaron funcionalidades de [Express](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs), el cual está escrito en [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) y funciona en el ambiente de [Node.js](https://nodejs.org/en/about/)
#### 3.3.3 Librerías de funciones o dependencias
Las dependencias del proyecto son:
 1. [body-parser](https://www.geeksforgeeks.org/body-parser-middleware-in-node-js/) para analizar gramáticamente y transformar la petición para que esta pueda ser entendida por el sistema.
 2. [Express](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs) para darle funcionalidad a la aplicación web.
 3. [MongoDB](https://www.mongodb.com) para almacenar datos de los usuarios y caballos.
 4. [Redis](https://redis.io/topics/introduction) para generar un almacén temporal para los datos accesados recientemente.
 5. [path](https://nodejs.org/docs/latest/api/path.html) para poder trabajar con direcciones de archivos y directorios.
 6. [node](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction) para poder generar herramientas y aplicaciones utilizables en JavaScript.

### 3.4 API o backend
Para generar el backend del proyecto se utilizó un archivo JavaScript con todas las funcionalidades y funciones requeridas para el funcionamiento de la aplicación web.

#### 3.4.1 Lenguaje de programación
Para darle funcionalidad y vida a las funcionalidades de EquineX se utilizó el lenguaje [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript).
#### 3.4.2 Framework
Para el framework del proyecto se utilizaron funcionalidades de [Express](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs), el cual está escrito en [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) y funciona en el ambiente de [Node.js](https://nodejs.org/en/about/)
#### 3.4.3 Librerías de funciones o dependencias
Las dependencias del proyecto son:
 1. [body-parser](https://www.geeksforgeeks.org/body-parser-middleware-in-node-js/) para analizar gramáticamente y transformar la petición para que esta pueda ser entendida por el sistema.
 2. [Express](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs) para darle funcionalidad a la aplicación web.
 3. [MongoDB](https://www.mongodb.com) para almacenar datos de los usuarios y caballos.
 4. [Redis](https://redis.io/topics/introduction) para generar un almacén temporal para los datos accesados recientemente.
 5. [path](https://nodejs.org/docs/latest/api/path.html) para poder trabajar con direcciones de archivos y directorios.
 6. [node](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction) para poder generar herramientas y aplicaciones utilizables en JavaScript.

## 3.5 Pasos a seguir para utilizar el proyecto
1. Descargue las dependencias necesarias declaradas en el package.json utilizando el comando *npm install*
2. Asegurese de tener en su computadora los siguientes pre-requisitos: 
* MongoDB
* Redis
* npm 
* node.js
* nodemon
3. Corra la aplicación-servidor y aplicación-cliente desde sus respectivas carpetas con el comando *npm start*
4. Si desea desplegarlo con un contenedor de kubernetes siga el siguiente tutorial [aquí](https://blog.carbonteq.com/mern-stack-with-kubernetes/)

## El problema a resolver
El servicio de renovación de cualquier documetno oficial suele ser un obstáculo grande para varias personas. La mayoría de los procesos son tediosos y no son automatizados. Además de que en caso de emergencias todos los documentos que se tienen en físico pueden dañarse, sin posibilidad de recuperación. No cabe duda que una herramienta que nos permite llevar el proceso de renovación de ellos, poder accederlos desde cualquier lado siempre y cuando se tengan las correctas credenicales es esencial para mejorar esta experiencia de usuario. 

## Arquitectura 
![MERN](/mern.jpeg)
Se utilizó un arquitecutra de tipo MERN: 
* MongoDB: se utiliza para almacenar los datos prinicpales de una forma dinámica, y com principal base de datos de almacenamiento. 
* Express: se generó la API para la inserción, eliminación y obtención de datos de la Base de Datos. 
* React: para el desarrollo del frontend y poder desarrollar de forma ordenada y visualmente atractiva la interfaz de usuario. 
* NodeJS: para programar cualquier interacción con el frontend incluyendo la recepción de los datos para la inserción de la base de datos, el dar click a un botón, iniciar sesió o cerrarla. 

Le agregamos como método de Caché la Base de Datos Redis: 

* Redis: se utilizó como caché para agilizar las consutlas, y poder decrementar la latencia de las mismas. Sobretodo una vez la base de datos supere una cierta cantidad de datos. De esta forma si se tienen consultas de manera más seguida Redis nos permite no tener que utilizar el API de mongoDB. 

## ¿Por qué Redis y Mongo?

### MongoDB
* Tiene una arquitectura escalable de manera horizontal. 
* Variabilidad de los datos: por ser una base de datos orientada a documentos se permite la posibilidad de cambiar el esquema de los documentos. 
* Compatibilidad con JS, existen múltiples librerías que nos permiten la implementació con Redis y la programación con un stack MERN. 
### Redis 
* Misma posibilidad de clusterizar la base de datos y desplegarla en un ambiente de alta disponibilidad. 
* Nos permite establecier un tiempo de vida a los datos, para luego eliminaros lo que es esencial cuando se trata de un servicio de caché. 
* Promueve la repliación asíncrona: se puede tener en una topología de cluster un mismo dato varias veces. Nos asegura la persistencia. 



## Casos de negocio
Num | Caso | Descripción |   
--- | --- | --- | 
1 | Eliminación de Archivo | Se elimina un archivo que ya se había utilizado porque ya se ha renovado | 
2 | Edición de Archivo | Se edita un archivo cuando se le da click | 
3 |  Creación de Archivo | Se crea un archivo y se sube una imagen del mismo para desplegarlo en la aplicación | 

## Estructura del proyecto
* Servidor: contiene todo el backend incluyendo una pequeña API que permite la creación, edición y eliminación en MongoDB. Se agrega REDIS con npm para las peticiones de tipo GET. 
* Cliente: contiene todo el frontend incluyendo vistas, componentes, imagenes y estilos. Se tienen los endpoints de la api, las llamadas a la misma y la recolección de informaicón para realizar peticiones al backend. 

## Alta disponibilidad y escalabilidad
Se planea desplegar de forma local el proyecto con kubernetes utilziando el siguiente tutorial: 
!(https://blog.carbonteq.com/mern-stack-with-kubernetes/)

## 4. Referencias
Inspiración para el proyecto:
- [Federación Ecuestre Mexicana](https://fem.org.mx)
- [Fédération Equestre Internationale](https://www.fei.org)

Herramientas útiles:
- [Por qué usar MongoDB](https://www.mongodb.com/why-use-mongodb)
- [Implementando cachés con Redis](https://codeburst.io/implement-caching-with-redis-in-express-js-and-mongodb-9aa09f9146ce)
- [Funcionalidad de Redis](https://aws.amazon.com/redis/)