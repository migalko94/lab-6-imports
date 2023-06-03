# Módulo 6 - Imports - Laboratorio

> Partimos del ejercicio con las correcciones que tenemos hasta ahora, sin perjuicio de trasladar aquellas otras más que puedan hacerse.

# Apartados obligatorios

Lo realizamos con la _sandbox_ de TS.

## Modelo

Extraemos la parte que define el modelo de datos a un fichero _model.ts_ y hacemos limpia en _main.ts_.

Se nos generó la problemática de que no podíamos modificar las variables fuera del fichero _model_. En concreto _puntuacion_. Lo resolvimos encapsulándola en un objeto y renombrándola a _partida.puntuacion_.

Nos aseguramos de que sigue todo funcionando y no salen errores por consola. Todo funciona.

## Motor

Extraemos la parte que define las reglas a un fichero _motor.ts_ y hacemos limpia en _main.ts_. Resulta que al importar del modelo, no se está usando ni el tipo _EstadoPartida_ ni la función _comprobarEstadoPartida_ así que los eliminamos. Al importar a _main_ desde _motor_, _setPuntos_ no se utiliza. Se usa de forma interna en el motor. Le sustraemos el _export_.

Nos aseguramos de que sigue todo funcionando y no salen errores por consola. Todo funciona.

## UI

Extraemos la parte que define el UI a un fichero _ui.ts_ y hacemos limpia en _main.ts._
En _UI_ tiene que estar toda la interacción con el HTML menos los _eventListeners_ y el arranque de partida.
Nos damos cuenta de que _puntuacionACero_ es arranque de partida y lo retornamos a _main_.
Copiamos todas las funciones que consideramos de _UI_. Nos dan errores que requerirían que importaramos los botones de _main_, pero ello generaría una dependencia circular. Trasladamos los botones a _UI_ y allí sólo dejamos los _eventListeners_. Elimino lo que no se usa en _main_. Añadimos _EstadoPartida_ a las importaciones en _UI_.

Nos aseguramos de que sigue todo funcionando y no salen errores por consola. Todo funciona.

## Más cambios

Nos llevamos _puntuacionACero_ a _motor_ y _reinicioImagen_ a _ui_, puesto que son funciones de reinicio de la partida, que se corresponden con estos módulos. De hecho, ello nos lleva a darnos cuenta de que podemos llamar directamente a _handlerNuevaPartida_ en el _DOMContentLoaded_. Hacemos también este cambio. Todo sigue funcionando.

# Apartados opcionales

## Objeto partida

Creamos un objeto partida y su método de ayuda para crear una partida.
Nos llevamos _puntuacionACero_ a _model_, lo metemos en el objeto partida y modificamos _puntuacionACero_ por _partida.puntuacionACero_.
De forma similar procedemos con _reinicioImagen_. El resto de funciones incluidas en _handlerNuevaPartida_ no las incluimos en el objeto partida, puesto que supondría la generación de dependencias circulares.

Nos aseguramos de que sigue todo funcionando y no salen errores por consola. Todo funciona.
