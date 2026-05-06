import productos from "./lista.js"
const { createApp, ref } = Vue

  createApp({
    data() {
      const message = ref('Hello vue!')
      const nuevoMensaje = () => {
        message = "ChauMundo";
      }

      return {
        message,
        productos,
        nuevoMensaje
      }
    }, methods: {
        reinicio() {
            this.message = 'Hola Mundo';
        }
    }
  }).mount('#app')