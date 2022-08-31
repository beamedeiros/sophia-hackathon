<template>
  <div class="column" style="height: 100%;">
    <div class="row header">
      <div>
        <el-icon>
          <ArrowLeft @click="PrevClass"/>
        </el-icon>
        <el-icon>
          <ArrowRight @click="NextClass"/>
        </el-icon>
      </div>
    </div>
    <CardList v-for="student of list" :name="student.name" :img="student.picture" :present="student.present" :key="student.id"/>
  </div>
</template>

<script>

import CardList from '../components/List.vue'
import SophiaAPI from '@/helpers/sophiaAPI'

export default {
  name: 'StudentList',
  components: {
    CardList,
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
  created: async function () {
    const sophiaAPI = await SophiaAPI.init(6000, 'antonio', 'antonio')

    this.list = await sophiaAPI.getStudentsFromAttendanceListCode(this.$route.params.id)
    console.log(this.list)
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
  margin-bottom: 2rem;
}

</style>
