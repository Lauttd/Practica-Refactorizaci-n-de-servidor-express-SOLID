Aplicación de Principios SOLID en el Proyecto

1) Principio de Responsabilidad Única
Se refactorizó la arquitectura del servidor dividiendo la aplicación en distintas capas para garantizar que cada módulo tenga una única razón para cambiar:

Routes: Solo definen los endpoints y los dirigen al controlador correspondiente.

Controllers: Se encargan exclusivamente de manejar las peticiones HTTP (req) y enviar las respuestas (res).

Services: Centralizan toda la regla de negocio, como el cálculo matemático del salario final según la antigüedad.

Repositories: Son los únicos responsables de interactuar de forma directa con la base de datos (MongoDB).

ErrorHandler: Middleware dedicado exclusivamente a la captura, formateo y emisión de errores globales.

2) Principio de Inversión de Dependencias
Para evitar un alto acoplamiento entre los módulos, las capas superiores no instancian directamente a las inferiores. En su lugar, se implementó el patrón de Inyección de Dependencias:

El EmployeeController no crea el servicio, sino que recibe una abstracción/instancia de EmployeeService a través de su constructor.

El EmployeeService recibe el EmployeeRepository de la misma manera.
Esta estructura hace que el sistema sea mucho más escalable y facilita la implementación de pruebas unitarias en el futuro.

3) Análisis del archivo docker-compose.yml
Función General: El archivo funciona como una receta automatizada para Docker. Su objetivo es descargar y ejecutar la base de datos en un entorno aislado (contenedor), permitiendo que cualquier persona levante el entorno con el comando docker compose up -d sin tener que instalar MongoDB manualmente.

Servicios Configurados: Configura un único servicio llamado mongodb.

Se reinicia automáticamente si falla

Mapea el puerto 27017 del contenedor con el de la computadora host para permitir la conexión.

Crea un volumen persistente para que los registros de los empleados no se borren si el contenedor se apaga.

Relación con la Aplicación: Actúa como la capa de persistencia de datos. Gracias al mapeo de puertos, el servidor Express puede acceder a la base de datos mediante la URI local como si estuviera instalada directamente en el sistema.