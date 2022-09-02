<template>
  <div class="container column">
    <div class="row header">
      <el-input v-model="professorCode" style="width: 2em;"></el-input>
      <el-date-picker
      class="el-input__wrapper"
      v-model="date"  
      type="date"
      />
      <div>
        <el-button @click="subtractDay">
          <el-icon>
            <ArrowLeft/>
          </el-icon>
        </el-button>
        <el-button @click="addDay">
          <el-icon>
            <ArrowRight/>
          </el-icon>
        </el-button>
      </div>
    </div>
    <div v-if="list.length == 0" class="no-list">
        <div>
          <h1 style="font-weight: bold; font-size: large;" >Sem chamadas hoje :)</h1>
        </div>
        <img style="height: 15em;" src="../assets/no-list.svg"/>
    </div>
    <div class="card-container column" v-else>
      <ClickableCard 
      v-for="attendance of list" 
      :course="attendance.course" 
      :discipline="attendance.discipline"
      :id="attendance.id" 
      :description="attendance.description"
      :status="attendance.status"
      :key="attendance.id" 
      @click="openList(attendance)"
    />
    </div>
  </div>
</template>

<script>
import ClickableCard from '../components/Card.vue'
import dayjs from 'dayjs'
import SophiaAPI from '../helpers/sophiaAPI'

export default {
  name: 'SelectAttendanceList',
  components: {
    ClickableCard,
  },
  data: function () {
    return {
      list: [],
      date: dayjs().format('YYYY-MM-DD'),
      professorCode: 1
    }
  },
  created: async function () {
    await this.updateList(this.date)
  },
  methods: {
    addDay: function () {
      this.date = dayjs(this.date).add(1, 'day').format('YYYY-MM-DD')
    },
    subtractDay: function () {
      this.date = dayjs(this.date).subtract(1, 'day').format('YYYY-MM-DD')
    },
    openList: function (attendance) {
      //TODO: Figure out how to use types
      this.$router.push(`/attendanceList/${attendance.id}`)
      this.$store.commit('setDate', dayjs(this.date).format('YYYY-MM-DD'))
      this.$store.commit('setCourse', attendance.course)
      this.$store.commit('setDiscipline', attendance.discipline)
      this.$store.commit('setDescription', attendance.description)
      this.$store.commit('setListType', attendance.type)
    },
    updateList: async function(newDate) {
      const sophiaAPI = await SophiaAPI.init(6000, 'antonio', 'antonio')
      const date = dayjs(newDate)
      
      if (this.professorCode == 1) {
        this.list = await sophiaAPI.getAttendanceLists(2, 318, 30, date.format('MM/DD/YYYY'))
      } else {
        this.list = await sophiaAPI.getAttendanceLists(1, 290, 30, date.format('MM/DD/YYYY'))
      }
      
      
    }
  },
  watch: {
    date: function (newDate) {
      this.updateList(newDate)
    },
    professorCode: function () {
      this.updateList(this.date)
    }
  }
}
</script>

<style scoped>
.container {
  flex: 1 1 auto;
  width: 100vw;
  /* max-height: 100vh; */
}

.header {
  background-color: #fff;
  min-height: 5em;
  flex: 0 1 auto;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px 0px 16px;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
}

.card-container {
  flex: 1 1 auto;
  /* min-height: 100%; */
  overflow-y: scroll;
}

.no-list {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>
