<template>
	
	<div class="container-fluid">
    <div>
      <h1>🔎Publica tu mascota</h1>
      <div class="container-btn">
        <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#formAdopcion">Doy en Adopción una Mascota</button>
        <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#formPerdidosEncontrados">Perdí/Encontré una Mascota</button>
      </div>
    </div>
  </div>

  <!-- Modal Mascotas en Adopción -->

  <div class="modal fade" id="formAdopcion" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Formulario Mascotas en Adopción</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">
          <!-- Datos Mascota -->
          <h5 class="modal-title" id="exampleModalLabel">Datos de la Mascota</h5>
          <form>
            <div class="mb-3">
              <label for="nombreMascota" class="form-label">Nombre Mascota:</label>
              <input v-model="nombreMascota" type="text" class="form-control" id="nombreMascota" required>
            </div>
            <div class="mb-3">
              <label for="especie" class="form-label">Especie:</label>
              <input v-model="especie" type="text" class="form-control" id="especie" required>
            </div>
            <div class="mb-3">
              <label for="sexo" class="form-label">Sexo:</label>
              <select class="form-select" aria-label="Default select example" required v-model="sexo">
                <option value="">---</option>
                <option value="1">Hembra</option>
                <option value="2">Macho</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="microchip" class="form-label">Tiene Microchip:</label>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="optionsRadios" id="radioSi" value="si" >
                <label class="form-check-label" for="radioSi">Sí</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="optionsRadios" id="radioNo" value="no" >
                <label class="form-check-label" for="radioNo">No</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="optionsRadios" id="radioNoLoSe" value="noLoSe" >
                <label class="form-check-label" for="radioNoLoSe">No sé</label>
              </div>
              
            </div>
            <div class="mb-3">
              <label for="formFile" class="form-label">Subir Imagen:</label>
              <input class="form-control" id="formFile" type="file">
            </div>
            <div class="mb-3">
              <label for="descripcion" class="form-label">Descripcion</label>
              <textarea v-model="descripcion" class="form-control" id="descripcion" rows="3"></textarea>
            </div>
            <!-- Datos Reportante -->
            <h5 class="modal-title" id="exampleModalLabel">Datos del Reportante</h5>
            
            <div class="mb-3">
              <label for="nombre" class="form-label">Tu Nombre</label>
              <input v-model="nombre" type="text" class="form-control" id="nombre" required>
            </div>
            <div class="mb-3">
              <label for="apellido" class="form-label">Tu Apellido</label>
              <input v-model="apellido" type="text" class="form-control" id="apellido" required>
            </div>
            <div class="mb-3">
              <label for="correo" class="form-label">Correo</label>
              <input v-model="correo" type="email" class="form-control" id="correo" required>
            </div>
            <div class="mb-3">
              <label for="telefono" class="form-label">Teléfono</label>
              <input v-model="telefono" type="number" class="form-control" id="telefono" placeholder="+56912345678" required>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          <button @click.prevent="validacion()"  type="button" class="btn btn-primary">Enviar</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Mascotas Perdidas/Encontradas -->

  <div class="modal fade" id="formPerdidosEncontrados" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Formulario Mascotas Perdidas/Encontradas</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">
          <h5 class="modal-title" id="exampleModalLabel">Datos de la Mascota</h5>

          <form>
            <div class="mb-3">
              <label for="nombreMascota" class="form-label">Nombre:</label>
              <input v-model="nombreMascota" type="text" class="form-control" id="nombreMascota" required>
            </div>
            <div class="mb-3">
              <label for="especie" class="form-label">Especie:</label>
              <input v-model="especie" type="text" class="form-control" id="especie" required>
            </div>
            <div class="mb-3">
              <label for="sexo" class="form-label">Sexo:</label>
              <select class="form-select" aria-label="Default select example" required v-model="sexo">
                <option value="">---</option>
                <option value="1">Hembra</option>
                <option value="2">Macho</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="microchip" class="form-label">Tiene Microchip:</label>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="optionsRadios" id="radioSi" value="si" >
                <label class="form-check-label" for="radioSi">Sí</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="optionsRadios" id="radioNo" value="no" >
                <label class="form-check-label" for="radioNo">No</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="optionsRadios" id="radioNoLoSe" value="noLoSe" >
                <label class="form-check-label" for="radioNoLoSe">No sé</label>
              </div>
              
            </div>
            <div class="mb-3">
              <label for="formFile" class="form-label">Subir Imagen:</label>
              <input class="form-control" id="formFile" type="file">
            </div>
            <div class="mb-3">
              <label for="descripcion" class="form-label">Descripcion</label>
              <textarea v-model="descripcion" class="form-control" id="descripcion" rows="3"></textarea>
            </div>
            <div class="mb-3">
              <label for="direccion" class="form-label">Dirección del Suceso:</label>
              <input v-model="direccion" type="text" class="form-control" id="direccion" required>
            </div>
            <div class="mb-3">
              <label for="fechaSuceso" class="form-label">Fecha del Suceso</label>
              <input v-model="fechaSuceso" type="date" class="form-control" id="fechaSuceso" required>
            </div>



            <h5 class="modal-title" id="exampleModalLabel">Datos del Reportante</h5>
            
            <div class="mb-3">
              <label for="nombre" class="form-label">Tu Nombre</label>
              <input v-model="nombre" type="text" class="form-control" id="nombre" required>
            </div>
            <div class="mb-3">
              <label for="apellido" class="form-label">Tu Apellido</label>
              <input v-model="apellido" type="text" class="form-control" id="apellido" required>
            </div>
            <div class="mb-3">
              <label for="correo" class="form-label">Correo</label>
              <input v-model="correo" type="email" class="form-control" id="correo" required>
            </div>
            <div class="mb-3">
              <label for="telefono" class="form-label">Teléfono</label>
              <input v-model="telefono" type="number" class="form-control" id="telefono" placeholder="+56912345678"  required>
            </div>
            
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          <button @click.prevent="validacion()"  type="button" class="btn btn-primary">Enviar</button>
        </div>
      </div>
    </div>
  </div>
  
	
    
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: "publicaAviso",
  
  data() {
    return {
      nombreMascota: "",
      especie: "",
      sexo: "",
      microchip: "",
      descripcion: "",
      direccion: "",
      fechaSuceso: "",
      nombre: "",
      apellido: "",
      correo: "",
      telefono: "",
      
    };
  },
  
  methods: {

    validacion() {
      if (!this.nombreMascota) {
        Swal.fire({
          icon: 'error',
          title: 'Faltan Datos',
          text: 'Ingresa el nombre de la Mascota.',
        });
        return;
      } else if (!this.especie) {
        Swal.fire({
          icon: 'error',
          title: 'Faltan Datos',
          text: 'Ingresa la especie.',
        });
        return;
      } else if (!this.sexo) {
        Swal.fire({
          icon: 'error',
          title: 'Faltan Datos',
          text: 'Ingresa el sexo de la mascota.',
        });
        return;
      
      } else if (!this.descripcion) {
        Swal.fire({
          icon: 'error',
          title: 'Faltan Datos',
          text: 'Ingresa una descripción.',
        });
        return;
      // } else if (!this.direccion) {
      //   Swal.fire({
      //     icon: 'error',
      //     title: 'Faltan Datos',
      //     text: 'Ingresa la dirección aproximada donde se perdió o encontraste la mascota.',
      //   });
      //   return;
      // } else if (!this.fechaSuceso) {
      //   Swal.fire({
      //     icon: 'error',
      //     title: 'Faltan Datos',
      //     text: 'Ingresa la fecha cuando se perdió o encontraste la mascota.',
      //   });
      //   return;
      } else if (!this.nombre) {
        Swal.fire({
          icon: 'error',
          title: 'Faltan Datos',
          text: 'Ingresa tu nombre.',
        });
        return;
      } else if (!this.apellido) {
        Swal.fire({
          icon: 'error',
          title: 'Faltan Datos',
          text: 'Ingresa tu apellido.',
        });
        return;
      } else if (!this.correo) {
        Swal.fire({
          icon: 'error',
          title: 'Faltan Datos',
          text: 'Ingresa tu correo electrónico.',
        });
        return;
        // Validar formato de correo
      } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.correo)) {
        // Swal("Error", "El correo electrónico no es válido.", "error");
        Swal.fire({
          icon: 'error',
          title: 'Faltan Datos',
          text: 'Ingrese un correo electrónico válido.',
        });
        return;
      } else if (!this.telefono) {
        Swal.fire({
          icon: 'error',
          title: 'Faltan Datos',
          text: 'Ingresa tu número de teléfono.',
        });
        return;
        } else {
      // const imagen = document.getElementById('formFile').files[0];
      // if (!imagen) {
      //   Swal.fire({
      //     icon: 'error',
      //     title: 'Faltan Datos',
      //     text: 'Selecciona una imagen.',
      //   });
      //   return;
      // }

      // const microchipNo = document.getElementById('radioNo');
      // const microchipSi = document.getElementById('radioSi');
      // const microchipNoLoSe = document.getElementById('radioNoLoSe');

      // if (!microchipNo.checked && !microchipSi.checked && !microchipNoLoSe.checked) {
      //   Swal.fire({
      //     icon: 'error',
      //     title: 'Faltan Datos',
      //     text: 'Selecciona si la mascota tiene microchip.',
      //   });
      //   return;
      // }

        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: '¡Tus datos fueron enviados correctamente!',
        }).then(() => {
        }).then(() => {
          // Ocultar los formularios utilizando JavaScript puro
          document.getElementById('formAdopcion').style.display = 'none';
          document.getElementById('formPerdidosEncontrados').style.display = 'none';
          window.location.href = '/';
        });
      }   
    }
  }
}

</script>

<style scoped>

h1{
  display: block;
}

.container-fluid{
  background-color: #e59244;
  height: 20em;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1{
  text-align: center;
}
.btn{
  margin: 5px;
  padding: 15px;
  font-size: 1.5em;

}

.container-btn{
  display: flex;
  justify-content: center;
  align-items: center;

}

a{
  text-decoration: none;
  color: white;
}

</style>