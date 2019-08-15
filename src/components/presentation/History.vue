<template lang="html">
  <Layout
  :title="title"
  :content="text"
  />
</template>

<script>
import Layout from './Layout'
export default {
  components: {
    Layout
  },
  data: () => ({
    title: 'Mi Historia',
    text: [
      'Empecé a programar cuando tenía 12 años de edad con el lenguaje C, cuando hacía un curso de sistemas y ensamblaje de pc. Mis primeros códigos era un cajero electrónico, o sistemas propios de gestión, recuerdo uno que hice para gestionar mis tareas en casa. Pero para ese entonces no entendía muy bien el poder de la programación, no tenia idea que podía manejar procesos de mi código por interfaz gráfica, para mi la única forma de interactuar con mi programa era a través de la consola.',
      'Luego en la universidad, en el año 2013, volví a ver programación pero esta vez con JAVA, y aunque las clases eran bastantes básicas fue suficiente para hacerme entender el poder de código.',
      'A partir de entonces empecé a buscar libros, foros y tutoriales de internet sobre programación web en donde aprendí también de maquetación y uso multimedia con html5, diseño con css3, e interactividad con javascript, donde este último fue el que más me llamó la atención.',
      'Luego de aprender lo suficiente de lo que hoy llamamos front-end me di cuenta que para empezar a buscar trabajo con poca experiencia era necesario un certificado, así que decidí entrar a la academia digital NextU, en donde finalice todos los cursos con un promedio de 98/100, siendo estos en: HTML5, CSS3, JAVASCRIPT, JQUERY, JQUERY UI, PHP AVANZADO Y POO, MYSQL Y GIT.',
      'Al tiempo en el que iba avanzando en mi carrera universitaria me llamó la atención el área de automatización de infraestructura y domótica; por lo que me puse a estudiar del tema, en donde aprendí bastante de circuitos, protocolos y uso de los materiales. En el proceso entendí que lo difícil no trataba de conectar un dispositivo con tu celular o red privada, lo difícil era mantener todo el sistema seguro.',
      'Esto último me llevó a estudiar bastante sobre seguridad informatica, hacking etico y pentesting, en donde aprendí a utilizar herramientas como wifislax y kali linux. Pero un día buscando sobre procesos de datos en un foro me encontre un articulo que decía algo así como “La seguridad informática con la blockchain”. Este artículo cambió mi vida ya que enseñaba la sencillez y genialidad que hay detrás de la tecnología, pero además la última frase fue la que realmente cambió todo “La blockchain es la tecnología en donde está montado el protocolo Bitcoin” Yo ya había oído hablar de Bitcoin, pero de haber sabido de sus características antes, también me hubiese interesado mucho antes.',
      'Desde entonces he leído mucho sobre el Bitcoin hasta que logré entender la matemática que hay detrás de él. En este punto desarrolle una blockchain en javascript. Y también de la tecnología blockchain, de la que aprendí de muchos otros protocolos como Ethereum y su lenguaje solidity, NEM con javascript y sus mosaicos sencillos de implementar, y Cardano con sus contratos verificados.'
    ]
  })
}
</script>

<style lang="scss" scoped>
</style>
