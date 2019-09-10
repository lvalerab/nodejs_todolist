*INSTALACION*
usar en el directorio raiz
npm init

*LISTA DE COMANDOS*

app [command]

Comandos:
  app crear       Crear un elemento
  app actualizar  Actualiza el estado de completado a una tarea
  app listar      Lista las tareas guardadas
  app mostar      Muestra una entrad concreta
  app eliminar    Elimina una tarea

Opciones:
  --version  Muestra número de versión                                [booleano]
  --help     Muestra ayuda                                            [booleano]


app crear

Crear un elemento

Opciones:
  --version          Muestra número de versión                        [booleano]
  --help             Muestra ayuda                                    [booleano]
  --descripcion, -d  Descripcion de la tarea por hacer               [requerido]


app actualizar

Actualiza el estado de completado a una tarea

Opciones:
  --version          Muestra número de versión                        [booleano]
  --help             Muestra ayuda                                    [booleano]
  --elemento, -e     Indice del elemento a actualizar                [requerido]
  --descripcion, -d  Descripcion de la tarea por hacer               [requerido]
  --completado, -c   Indica si la tarea esta completada o no     [defecto: true]


app listar

app eliminar

Elimina una tarea

Opciones:
  --version       Muestra número de versión                           [booleano]
  --help          Muestra ayuda                                       [booleano]
  --elemento, -e  Indice del elemento a actualizar                   [requerido]