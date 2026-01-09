import memoria from "../../img/memoriaRAM.jpg";
import mouse from "../../img/mouse.jpg";
import teclado from "../../img/teclado1.png";
import auriculares from "../../img/auriculares.jpg";
import disco from "../../img/discoduro.jpg";
import monitor from "../../img/monitor.jpg";
import monitor2 from "../../img/monitor2.png";
import monitor3 from "../../img/monitor3.jpeg";


const productCargados = [
    {
    id: "1",
    nombre: "Monitor Gamer",
    slug: "monitorgamer",
    precio: 150000,
    stock: 2,
    categoria: "Monitores",
    img: monitor,
    descripcion: "Monitor Gamer de 24 pulgadas, resolución Full HD, tiempo de respuesta de 1ms y frecuencia de actualización de 144Hz. Ideal para juegos de alta velocidad y gráficos detallados.",
    },
    {
    id: "2",
    slug: "tecladomecanico",
    nombre: "Teclado Mecánico",
    precio: 80000,  
    stock: 5,
    categoria: "Periféricos",
    img: teclado,
    descripcion: "Teclado mecánico con retroiluminación RGB, switches táctiles y duraderos. Perfecto para gamers y escritores que buscan una experiencia de tecleo superior.",
    },
    {
    id: "3",
    nombre: "Mouse Inalámbrico",
    slug: "mouseinalambrico",
    precio: 60000,
    stock: 10,
    categoria: "Periféricos",
    img: mouse,
    descripcion: "Mouse inalámbrico ergonómico con alta precisión y batería de larga duración. Ideal para uso diario y gaming casual.",
    },
    {
    id: "4",
    nombre: "Auriculares Gaming",
    slug: "auricularesgaming",
    precio: 120000,
    stock: 3,
    categoria: "Audio",
    img: auriculares,
    descripcion: "Auriculares gaming con sonido envolvente 7.1, micrófono con cancelación de ruido y comodidad para largas sesiones de juego.",
    },
    {
    id: "5",
    nombre: "Disco Duro Externo",
    slug: "discoduroexterno",
    precio: 90000,
    stock: 7,
    categoria: "Almacenamiento",
    img: disco,
    descripcion: "Disco duro externo de 2TB con conexión USB 3.0 para transferencias rápidas de datos. Ideal para respaldos y almacenamiento adicional.",
    },
    {
    id: "6",
    nombre: "Memoria RAM 16GB",
    slug: "memoriaram16gb",
    precio: 110000,
    stock: 4,
    categoria: "Componentes",
    img: memoria,
    descripcion: "Memoria RAM DDR4 de 16GB a 3200MHz para mejorar el rendimiento multitarea y la velocidad del sistema.",
    },
    {
    id: "7",
    nombre: "Monitor Gamer",
    slug: "monitorgamer2",
    precio: 150000,
    stock: 2,
    categoria: "Monitores",
    img: monitor2,
    descripcion: "Monitor Gamer de 24 pulgadas, resolución Full HD, tiempo de respuesta de 1ms y frecuencia de actualización de 144Hz. Ideal para juegos de alta velocidad y gráficos detallados.",
    },
    {
    id: "8",
    nombre: "Monitor Gamer",
    precio: 185000,
    stock: 2,
    categoria: "Monitores",
    img: monitor3,
    descripcion: "Monitor Gamer de 24 pulgadas, resolución Full HD, tiempo de respuesta de 1ms y frecuencia de actualización de 144Hz. Ideal para juegos de alta velocidad y gráficos detallados.",
    }
]   

export default productCargados;