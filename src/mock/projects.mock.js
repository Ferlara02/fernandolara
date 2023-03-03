import Calc from "../assets/calc.JPG";
import Wrg from "../assets/wrg.JPG";
import Movie from "../assets/movie.JPG";

export const projects = [
    {
        id: 1,
        name: "Movie Store ReactJS",
        description: "Un proyecto maquetado con React JS, que simula un eCommerce de películas en Blu-Ray. Resuelve una base de datos de productos en Firebase, como a su vez crea una colección de Ventas en el mismo.",
        img: Movie,
        vivo: "https://movie-store-fer.netlify.app/",
        github: "https://github.com/Ferlara02/movieStore-reactJS"
    },
    {
        id: 2,
        name: "Sitio Web oficial de WRG - HTML5 & SASS",
        description: "Proyecto real para un taller mecánico de embergadura. Estuve a cargo del diseño, desarrollo de marca y maquetado desde 0. Sitio web full responsive con SASS y Bootstrap, con prácticas SEO y de optimización de carga.",
        img: Wrg,
        vivo: "https://williamrallygroup.000webhostapp.com/",
        github: "https://github.com/Ferlara02/tallerMecanico"
    },
    {
        id: 3,
        name: "Calculador de baldozas JS",
        description: "Una calculadora de baldozas que indica al usuario la cantidad que necesita para su piso, en función de los metros cuadrados y del tamaño de la misma. Incluye un cart para agregar las baldozas calculadas.",
        img: Calc,
        vivo: "https://ferlara02.github.io/CursoJS/index.html",
        github: "https://github.com/Ferlara02/CursoJS"
    } 
]