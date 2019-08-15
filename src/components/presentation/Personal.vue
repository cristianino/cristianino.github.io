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
    title: '',
    text: [
      'Hola, mi nombre es Cristian Niño. Soy programador y DevOp web. Soy un gran apasionado por la tecnología blockchain. Soy una persona muy curiosa, con muchas ganas de aprender tanto del campo tecnológico como de cada grupo de trabajo. Me considero una persona líder y empática. En la siguiente página expondré 3 puntos, primero mi historia como programador, en segundo lugar mis proyectos personales y por último mis conocimiento y experiencia.'
    ]
  })
}
</script>

<style lang="scss" scoped>
</style>
