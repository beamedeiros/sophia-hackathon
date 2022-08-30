<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <ClickableCard v-for="attendance of list" :course="attendance.course" :discipline="attendance.discipline"
    :id="attendance.id" :status="attendance.status" :key="attendance.id"/>
</template>

<script>
import ClickableCard from './components/Card.vue'

export default {
  name: 'App',
  components: {
    ClickableCard,
  },
  data: function () {
    return {
      list: [
        {
          course: '1˚ Ano',
          discipline: 'Matemática',
          id: 1,
          status: 'pending'
        },
        {
          course: '2˚ Ano',
          discipline: 'Português',
          id: 2,
          status: 'done'
        },
        {
          course: '5˚ Ano',
          discipline: 'História',
          id: 4,
          status: 'late'
        },
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.column {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  flex-direction: row;

}
</style>
