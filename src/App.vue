<template>
  <div class="column" style="height: 100%;">
    <div class="row header">
      <el-date-picker
      class="el-input__wrapper"
      v-model="date"  
      type="date"
      />
      <div>
        <el-icon>
          <ArrowLeft @click="subtractDay"/>
        </el-icon>
        <el-icon>
          <ArrowRight @click="addDay"/>
        </el-icon>
      </div>
    </div>
    <ClickableCard v-for="attendance of list" :course="attendance.course" :discipline="attendance.discipline"
    :id="attendance.id" :status="attendance.status" :key="attendance.id"/>
  </div>
</template>

<script>
import ClickableCard from './components/Card.vue'

export default {
  name: 'Teste',
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
      ],
      date: '2022-08-30'
    }
  },
  mathods: {
    addDay: function () {

    }
  }
}
</script>

<style>

body {
  margin: 0px
}

:root {
  --background-grey: #F4F6F8;
}

#app {
  font-family: Nunito, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  background-color: var(--background-grey);
  min-height: 100vh;


}

.column {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  flex-direction: row;
}

.header {
  background-color: #fff;
  height: 5em;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px 0px 16px;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
}

.el-input__wrapper {
  border: none !important
}
</style>
