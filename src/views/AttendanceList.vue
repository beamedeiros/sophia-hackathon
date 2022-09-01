<template>
  <div class="column container" style="height: 100%;">
    <div class="row header">
      <div class= "class row">
            <el-icon>
                <ArrowLeft/>
            </el-icon>
            <div>
                <div>{{course}}</div>
                <div>{{description}} - {{discipline}}</div>
            </div>
            <el-icon>
                <ArrowRight/>
            </el-icon>
      </div>
    </div>
    <div class="card-container column">
      <CardList v-for="student of list" :name="student.name" :img="student.picture" :present="student.present" :key="student.id"/>
    </div>
    <div style="padding: 16px">
      <el-button color="#00B8AD" style="height: 4em; width: 90vw; font-size: large; font-weight: bold;">Finalizar</el-button>
    </div>
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
      list: [],
      course: this.$store.getters.course,
      date: this.$store.getters.date,
      discipline: this.$store.getters.discipline,
      description: this.$store.getters.description,
    }
  },
  created: async function () {
    const sophiaAPI = await SophiaAPI.init(6000, 'antonio', 'antonio')

    console.log(this.$store.getters)
    this.list = await sophiaAPI.getStudentsFromAttendanceListCode(this.$route.params.id)
    console.log(this.list)
  },
  
}

</script>

<style scoped>
.container {
  flex: 1 1 auto;
  width: 100vw;
  max-height: 100vh;
}

.header {
  background-color: #fff;
  min-height: 5em;
  flex: 1 1 auto;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px 0px 16px;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
}

.class {
    display: flex;
    align-items: center;
}

.card-container {
  flex: 1 1 auto;
  /* min-height: 100%; */
  overflow-y: scroll;
}

</style>
