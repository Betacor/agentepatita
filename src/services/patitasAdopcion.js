export class PatitasAdopcion {
    static patitasAdopcion = [
      {
        "id": "1",
        "nombreMascota": "OREO",
        "especie": "Perro",
        "sexo": "Macho",
        "descripcion": "Oreo es un pequeño peludo de 8 meses, mestizo de poodle. Es muy juguetón, tiene la misma energía de un cachorro, le encanta jugar con peluches, personas y otros perros, también es muy cariñoso, se acuesta a dormir al lado tuyo y te sigue a todas partes. Este tierno perrito se da en adopción con sus vacunas al día, desparasitado y esterilizado.",
        "imagen": require("@/assets/img/oreo.jpeg") ,
        "nombre": "Mauricio",
        "apellido": "Fuentes",
        "email": "m.fuentesb@gmail.com",
        "telefono": "+56975863241"
      },
      {
        "id": "2",
        "nombreMascota": "KOBA",
        "especie": "Gato",
        "sexo": "Hembra",
        "descripcion": "1 mes 2 semanas Sabe usar el arenero Sin pulgas Desparasitado Come pellets Se busca: - Hogar responsable - Si es departamento: malla obligatoria en todas las ventanas - Compromiso de esterilización/ vacunas/ visitas al vet - Compromiso de enviar fotos de seguimiento - Constante acompañamiento",
        "imagen": require("@/assets/img/koba.jpeg") ,
        "nombre": "Yolanda",
        "apellido": "Alfaro",
        "email": "yolitrini@hotmail.com",
        "telefono": "+56956483658"
      },
      {
        "id": "3",
        "nombreMascota": "TAMI",
        "especie": "Perro",
        "sexo": "Hembra",
        "descripcion": "Tami es una perrita robusta de tamaño mediano, mestiza de shar pei. Es muy juguetón, tiene la misma energía de un cachorro, le encanta jugar con pelotas y dar muchos besos.Tami se da en adopción con sus vacunas al día, desparasitada y esterilizada.",
        "imagen": require("@/assets/img/tamy.jpeg") ,
        "nombre": "David",
        "apellido": "Galvez",
        "email": "david456@gmail.com",
        "telefono": "+56952496873"
      },
      {
        "id": "4",
        "nombreMascota": "TAMI",
        "especie": "Gato",
        "sexo": "Hembra",
        "descripcion": "Gatita rescatada de 4 meses blanco negro. Busca un hogar amoroso y muy responsable.",
        "imagen": require("@/assets/img/manchita.jpg") ,
        "nombre": "Olga",
        "apellido": "Arenas",
        "email": "olguita@gmail.com",
        "telefono": "+56914685237"
      },
    ];
  
      static getAllPatitasAdopcion() {
      return this.patitasAdopcion;
    }
  
  }