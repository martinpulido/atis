# ATIS

ATIS es un ejercicio de diseño de una compañía de reservas por parte de [Pat Wasik](https://dribbble.com/glash) para [Symu.co](https://symu.co/freebies/templates-4/atis-psd-template/) que he convertido a HTML, CSS.

## Diseño vs Maquetación
* *Diseño*: https://symu.co/freebies/templates-4/atis-psd-template/
* *Maquetación*: https://martinpulido.github.io/atis/

## Desarrollo

En base al diseño *as-is* ofrecido por Symu.co, construimos una versión responsive del portal, para ello utilizaremos HTML, CSS puros, sin frameworks y JS con jQuery para dotar de funcionalidad básica.

## Herramientas utilizadas

* [Adobe Photoshop](https://www.adobe.com/products/photoshop.html) - Para examinar el documento y obtener, capas, imágenes, medidas, etc.
* [GULP]() - Como automatizador de tareas de front.
* [SASS / SCSS](http://sass-lang.com/) - Como herramienta de preprocesado de CSS, compilando archivos SCSS a CSS.
* [Autoprefixer](https://github.com/postcss/autoprefixer) - Extensión de PostCSS para añadir prefijos de vendedores a reglas de CSS.
* [SourceMaps](https://www.npmjs.com/package/gulp-sourcemaps) - Para generar un mapa de equivalencia entre las líneas del CSS compilado y la línea y archivo de SASS en el que se encuentra.
* [Browser Sync](https://browsersync.io/) - Para refrescar los cambios en archivos SCSS / CSS / HTML en el navegador en tiempo real sin necesidad de actualizar manualmente la página.
* [Git](https://git-scm.com/) - Como control de versiones a través de GitHub.

## Autores

* **Santi Martin** - Desarrollo del interfaz con HTML, CSS, JS (+ jQuery)

## Licencia

Este proyecto está realizado bajo la licencia MIT.

## Observaciones

Algunas observaciones y particularidades que he tenido mientras construía la maquetación:
* Las fotos de los sitios populares están tintadas de azul en la propia imagen -al igual que el lugar destacado-. Como quería replicar ese filtro con HTML y/o CSS, busqué esas mismas imágenes en directorios de stock para usarlas (o algunas similares) a condición de que fueran libres de derechos.
* Los iconos del buscador aunque se les había ajustado el color y la opacidad mediante filtros, no estaban trazados, eran mapa de bits. Ante la dificultad de encontrarlos en formato vectorial, me decido por usar Font Awesome con unos iconos lo más parecidos posible.
* Todos los campos del formulario de búsqueda son visualmente iguales y no se indica si permiten escritura o selección, así que tomo la decisión de convertir los campos City, Rooms, Adults, Children, Stars en select nativos estilizados con CSS. Los campos Check In y Check Out serán campos tipo date nativos de HTML5 para dispositivos móviles, siendo de tipo texto con un *datepicker* para escritorio. Tomo esta decisión debido a la dificultad / imposibilidad de dar estilo al desplegable de fecha nativo de HTML5 en escritorio.
* Me propongo construir la estructura de los Sitios Más Populares (*Most Popular Places*) utilizando CSS Grid Layout.

