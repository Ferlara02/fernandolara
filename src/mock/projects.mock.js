import Calc from "../assets/calc.JPG";
import Wrg from "../assets/wrg.JPG";
import Movie from "../assets/movie.JPG";
import SyJ from "../assets/Captura.JPG";
export const projects = [
    {
        id: 0,
        name: "Despacho Jurídico S&J",
        description: "Proyecto real realizado para la firma de abogados S&J junto con otra desarrolladora, dos diseñadoras UX/UI y un Product Manager. Desarrollado en React JS, con funcionalidad de drag and drop para envío de currículums; pop ups interactivos y formulario de contacto.",
        img: SyJ,
        vivo: "",
        github: "https://github.com/nadiasantiago/despacho",
        category: "Reales"
    },
    {
        id: 1,
        name: "Movie Store ReactJS",
        description: "Un proyecto maquetado con React JS, que simula un eCommerce de películas en Blu-Ray. Resuelve una base de datos de productos en Firebase, como a su vez crea una colección de Ventas en el mismo.",
        img: Movie,
        vivo: "https://movie-store-fer.netlify.app/",
        github: "https://github.com/Ferlara02/movieStore-reactJS",
        category: "Prácticas"
    },
    {
        id: 2,
        name: "Sitio Web oficial de WRG - HTML5 & SASS",
        description: "Proyecto real para un taller mecánico de embergadura. Estuve a cargo del diseño, desarrollo de marca y maquetado desde 0. Sitio web full responsive con SASS y Bootstrap, con prácticas SEO y de optimización de carga.",
        img: Wrg,
        vivo: "https://williamrallygroup.000webhostapp.com/",
        github: "https://github.com/Ferlara02/tallerMecanico",
        category: "Reales"
    },
    {
        id: 3,
        name: "Calculador de baldozas JS",
        description: "Una calculadora de baldozas que indica al usuario la cantidad que necesita para su piso, en función de los metros cuadrados y del tamaño de la misma. Incluye un cart para agregar las baldozas calculadas.",
        img: Calc,
        vivo: "https://ferlara02.github.io/CursoJS/index.html",
        github: "https://github.com/Ferlara02/CursoJS",
        category:"Prácticas"
    } 
]