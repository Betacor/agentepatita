export class PatitasEncontradas {
    static patitasEncontradas = [
      {
        "id": "1",
        "nombreMascota": "SIN NOMBRE",
        "especie": "Gato",
        "sexo": "Hembra",
        "descripcion": "La tengo en mi casa llamar para devolverla.",
        "imagen": require("@/assets/img/gato-gris.jpg") ,
        "nombre": "Sonia",
        "apellido": "San Martín",
        "email": "sonymartin@gmail.com",
        "telefono": "+56936587498",
        "fecha" : "11/01/2023",
        "direccion": "Arratia 351",
        "microchip": "no"
      },
      {
        "id": "2",
        "nombreMascota": "TOM",
        "especie": "Perro",
        "sexo": "Macho",
        "descripcion": "Perro macho castrado, nueve meses aprox. con chip encontrado en Las Araucarias con Central, se encuentra en la veterinaria municipal.",
        "imagen": require("@/assets/img/tom.jpg") ,
        "nombre": "Adrian",
        "apellido": "Vera",
        "email": "a.vera@gmail.com",
        "telefono": "+56924568703",
        "fecha" : "31/03/2023",
        "direccion": "Las Araucarias 540",
        "microchip": "no tiene"
      },
      {
        "id": "3",
        "nombreMascota": "JERRY",
        "especie": "Gato",
        "sexo": "Macho",
        "descripcion": "Gato de 1 año y 2 meses castrado y asustadizo en calles blanco-gris atigrado con collar verde-naranjo patas blancas, cola gris, una oreja blanca y la otra gris y ojos verdes. ",
        "imagen": require("@/assets/img/jerry.jpg") ,
        "nombre": "Miguel",
        "apellido": "Ordenes",
        "email": "productosordenes@gmail.com",
        "telefono": "+56986579214",
        "fecha" : "02/05/2023",
        "direccion": "Avenida Valparaiso 1598",
        "microchip": "no tiene"
      },
      {
        "id": "1",
        "nombreMascota": "MAXIE",
        "especie": "Perro",
        "sexo": "Macho",
        "descripcion": "Es muy manso, se nota que es de casa por su actitud y creemos que es un perro joven. Ahora esta con nosotros pero queremos encontrar a sus dueños. Tiene 3 años y cuenta con chip, implantado en Municipalidad de Quillota",
        "imagen": require("@/assets/img/Maxie.jpg") ,
        "nombre": "Cristian",
        "apellido": "Ramirez",
        "email": "crisram@gmail.com",
        "telefono": "+56986524792",
        "fecha" : "21/04/2023",
        "direccion": "Marcoleta 5896",
        "microchip": "996587424587469"
      }
    ];
  
      static getAllPatitasEncontradas() {
      return this.patitasEncontradas;
    }
  
  }