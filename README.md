# Café Andino: proyecto Angular de práctica

Página web hecha con Angular siguiendo la estructura que explicó el profesor (header, footer y páginas con rutas). Sirve para repasar.

## Cómo verla en Visual Studio Code

1. Abre la carpeta del proyecto en Visual Studio Code (Archivo > Abrir carpeta).
2. Abre la terminal (Terminal > Nueva terminal).
3. Si no existe la carpeta `node_modules`, escribe: `npm install`
4. Escribe: `ng serve`
5. Abre en el navegador: http://localhost:4200

Para detener el servidor: `Ctrl + C` en la terminal.

## Estructura (qué hace cada archivo)

```
src/
  index.html            Página base. Aquí vive <app-root>
  styles.css            Estilos generales de toda la página
  main.ts               Arranca la aplicación
  app/
    app.ts / app.html   Componente principal: header + contenido + footer
    app.config.ts       Configuración (aquí se activa el router)
    app.routes.ts       Lista de rutas: qué página se muestra en cada dirección
    components/
      header/           Menú de navegación (se repite en todas las páginas)
      footer/           Pie de página
    pages/
      home/             Inicio  (ruta "/")
      about/            Nosotros (ruta "/about")
      product/          Productos (ruta "/product")
      contact/          Contacto (ruta "/contact")
    services/
      product.service.ts  Datos de los productos (los usan Inicio y Productos)
```

Cada componente tiene 3 archivos principales:

- `nombre.ts`: la lógica (datos y funciones).
- `nombre.html`: lo que se ve.
- `nombre.css`: los estilos solo de ese componente.

## Ideas clave para repasar

**Componente.** Es una pieza de la página. Se declara con `@Component` y tiene un `selector` (por ejemplo `app-header`) que se usa como etiqueta HTML.

**imports del componente.** Para usar otro componente o una herramienta (`RouterLink`, `DecimalPipe`, `FormsModule`) hay que ponerla en el arreglo `imports` del componente que la usa.

**Rutas (`app.routes.ts`).** Cada ruta une una dirección con un componente: `{path: 'about', component: About}`. La ruta `**` atrapa cualquier dirección que no exista. En `app.html`, `<router-outlet>` es el espacio donde se muestra la página elegida.

**`routerLink`.** Reemplaza al `href` en los enlaces internos: `<a routerLink="/about">`. Cambia de página sin recargar. `routerLinkActive="activo"` agrega la clase `activo` al enlace de la página actual.

**Interpolación `{{ }}`.** Muestra un dato de la clase en el HTML: `{{ p.nombre }}`.

**`@for`.** Repite un bloque por cada elemento de una lista:
```html
@for (p of productos; track p.id) { <article>{{ p.nombre }}</article> }
```
`track` ayuda a Angular a identificar cada elemento. `@empty` se muestra si la lista está vacía.

**`@if`.** Muestra algo solo si se cumple una condición: `@if (enviado()) { ... }`.

**Signals.** Un `signal` guarda un valor que, cuando cambia, actualiza la pantalla solo. Se lee con paréntesis `categoriaActual()` y se cambia con `.set(...)`. `computed` calcula un valor a partir de signals y se actualiza solo.

**Eventos `( )`.** `(click)="elegir(c)"` ejecuta una función al hacer clic.

**Propiedades `[ ]`.** `[class.activo]="condicion"` agrega la clase si la condición es verdadera. `[disabled]="formulario.invalid"` desactiva el botón.

**Formularios con `ngModel`.** `[(ngModel)]="nombre"` conecta un campo con una variable en ambos sentidos. Requiere `FormsModule` en `imports`. `(ngSubmit)` se ejecuta al enviar.

**Servicio.** Clase con `@Injectable` que guarda datos o lógica compartidos. Se usa con `inject(ProductService)`. Así Inicio y Productos usan los mismos datos sin repetirlos.

**Pipe.** Da formato a un valor: `{{ p.precio | number:'1.2-2' }}` muestra siempre 2 decimales.

## Cómo agregar una página nueva (por ejemplo "Ofertas")

1. Crear el componente: `ng generate component pages/offers`
2. En `app.routes.ts`: importar `Offers` y agregar `{path: 'offers', component: Offers}`.
3. En `header.html`: agregar `<a routerLink="/offers" routerLinkActive="activo">Ofertas</a>`.

## Comandos útiles

| Comando | Para qué sirve |
|---|---|
| `ng serve` | Ver la página mientras programas (se actualiza sola) |
| `ng generate component ruta/nombre` | Crear un componente nuevo |
| `ng generate service services/nombre` | Crear un servicio |
| `ng build` | Preparar la versión final |
| `ng test` | Ejecutar las pruebas |

## Preguntas de repaso

1. **¿Qué es un componente?** Una pieza reutilizable de la página con su lógica (.ts), su HTML y su CSS.
2. **¿Para qué sirve `selector`?** Es el nombre de la etiqueta con la que se usa el componente.
3. **¿Qué hace `<router-outlet>`?** Muestra el componente que corresponde a la ruta actual.
4. **¿Diferencia entre `href` y `routerLink`?** `routerLink` navega dentro de la app sin recargar la página.
5. **¿Qué es un signal?** Un valor que avisa a Angular cuando cambia para que actualice la pantalla.
6. **¿Para qué sirve `@for` y por qué `track`?** Para repetir elementos de una lista; `track` identifica cada elemento.
7. **¿Qué es un servicio y cómo se usa?** Una clase con datos o lógica compartida; se pide con `inject()`.
8. **¿Qué hace `[(ngModel)]`?** Enlaza un campo del formulario con una variable en ambos sentidos.
9. **¿Qué significa `providedIn: 'root'`?** Que existe una sola copia del servicio para toda la aplicación.
10. **¿Por qué el header y el footer están en `app.html` y no en cada página?** Para escribirlos una vez y que aparezcan en todas.
