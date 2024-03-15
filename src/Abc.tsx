import "./App.css";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function Abc() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 10 });
    
    // Devuelve una función de limpieza para detener la animación cuando el componente se desmonte
    return () => animation.stop();
  }, []);

  return <motion.h1>{rounded}</motion.h1>;
}
