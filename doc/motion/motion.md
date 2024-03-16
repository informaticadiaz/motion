# Motion

[motion dev](https://motion.dev/)

Framer Motion es una biblioteca de movimiento simple pero potente para React.

El núcleo de Motion es el componente <motion/>.  Piense en <motion/> como un elemento HTML o SVG.

**Animations**


Para animar un componente <motion/>
Debemos pasar los [animate prop](https://www.framer.com/docs/animation/)

```jsx
<motion.div animate={{ x: 100 }} />
```

**Gestures**

 extiende el sistema de eventos de React con potentes reconocedores de gestos. Soporta hover, tap, pan y drag.

**Variants**

Son utilizados para animar sub-árboles de componentes.

```jsx
const list = { hidden: { opacity: 0 } }
const item = { hidden: { x: -10, opacity: 0 } }

return (
  <motion.ul animate="hidden" variants={list}>
    <motion.li variants={item} />
    <motion.li variants={item} />
    <motion.li variants={item} />
  </motion.ul>
)
```

**Scroll-triggered animations**

Los elementos pueden animarse a medida que ingresan y abandonan la ventana gráfica con el accesorio WhileInView.

```jsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
/>
```

**Server-side rendering**

La animación se renderizará en el servidor para evitar parpadeos de contenido.

```jsx
<motion.div initial={false} animate={{ x: 100 }} />
```
**MotionValues**


Son valores que se utilizan para representar el estado y la velocidad de una animación.

```jsx
const x = useMotionValue(0)
const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])

return <motion.div drag="x" style={{ x, opacity }} />
```

**Layout animations**















Índice

[the motion component](https://www.framer.com/docs/component/)

[the animate prop](https://www.framer.com/docs/animation/)

[flexible transition prop](https://www.framer.com/docs/transition/)

[powerful gesture recognisers](https://www.framer.com/docs/gestures/)

[Variants](https://www.framer.com/docs/animation/#variants)

[MotionValues](https://www.framer.com/docs/motionvalue/)

[enter and leave the viewport](https://www.framer.com/docs/scroll-animations/#scroll-triggered-animations)

[MotionValues](https://www.framer.com/docs/motionvalue/)













