export class PatitasPerdidas {
    static patitasPerdidas = [
      {
        "id": "1",
        "nombreMascota": "KIARA",
        "especie": "Gato",
        "sexo": "Hembra",
        "descripcion": "Gatica de 5 meses, con manchas cafés, negras y doradas (atigrada) esterilizada hace pocos dias, aun conserva los puntos de la cirugia.",
        "imagen": require("@/assets/img/kiara.jpg") ,
        "nombre": "Marlenee",
        "apellido": "Malagon",
        "email": "marmalagon@gmail.com",
        "telefono": "+56985478965",
        "fecha" : "01/04/2023",
        "direccion": "Bernardo Larrain 12869",
        "microchip": "991001005278058"
      },
      {
        "id": "1",
        "nombreMascota": "MIKO",
        "especie": "Perro",
        "sexo": "Macho",
        "descripcion": "Blanco, Macho, tamaño mediano, 5 años",
        "imagen": require("@/assets/img/miko.jpeg") ,
        "nombre": "Isidora",
        "apellido": "Prado",
        "email": "isprarem@gmail.com",
        "telefono": "+56954682793",
        "fecha" : "28/02/2023",
        "direccion": "Camino entre lomas 10334",
        "microchip": "998547632541587"
      },
      {
        "id": "1",
        "nombreMascota": "LULU",
        "especie": "Gato",
        "sexo": "Hembra",
        "descripcion": "Gata Bengali cafe atigrada, hembra, 3 años y medio.",
        "imagen": require("@/assets/img/lulu.jpg") ,
        "nombre": "Javier",
        "apellido": "Muñoz",
        "email": "ja.munoz@gmail.com",
        "telefono": "+56957842695",
        "fecha" : "05/05/2023",
        "direccion": "Rodolfo Galleguillos 1598",
        "microchip": "998564721354287"
      },
      {
        "id": "1",
        "nombreMascota": "MAYA",
        "especie": "Perro",
        "sexo": "Hembra",
        "descripcion": "Hembra de casi 3 años color negro con visos cafes",
        "imagen": require("@/assets/img/maya.jpg") ,
        "nombre": "Lorena",
        "apellido": "Duran",
        "email": "loladm@gmail.com",
        "telefono": "+56956472135",
        "fecha" : "18/04/2023",
        "direccion": "Pudeto 389B",
        "microchip": "986574824359687"
      }
    ];
  
      static getAllPatitasPerdidas() {
      return this.patitasPerdidas;
    }
  
  }