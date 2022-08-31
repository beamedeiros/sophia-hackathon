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
    <!-- <ClickableCard v-for="attendance of list" :course="attendance.course" :discipline="attendance.discipline"
    :id="attendance.id" :status="attendance.status" :key="attendance.id"/> -->
    <CardList v-for="student of list" :name="student.name" :img="student.picture" :present="student.present" :key="student.id"/>
  </div>
</template>

<script>

import CardList from './components/List.vue'

export default {
  name: 'StudentList',
  components: {
    CardList,
  },
//     created: function() {
//       console.log(this.list)
//   },
  data: function () {
    return {
      list: [
        {
          id: 1,
          name: 'Beatriz Medeiros',
          picture: 'https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg',
          present: true
        },
        {
          id: 2,
          name: 'Cauê Lima',
          picture: 'https://seres.vet/blog/wp-content/uploads/2022/06/gato-irritado-1.jpg',
          present: true
        },
        {
          id: 3,
          name: 'Kauan Leone',
          picture: 'https://seres.vet/blog/wp-content/uploads/2022/06/gato-irritado-1.jpg',
          present: true
        },
        {
          id: 4,
          name: 'Lorenzo Sá',
          picture: 'https://seres.vet/blog/wp-content/uploads/2022/06/gato-irritado-1.jpg',
          present: true
        },
        {
          id: 5,
          name: 'Sophia Meca',
          picture: 'https://seres.vet/blog/wp-content/uploads/2022/06/gato-irritado-1.jpg',
          present: true
        },
      ],
    }
  },
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

.el-input__wrapper {
  border: none !important
}
</style>
