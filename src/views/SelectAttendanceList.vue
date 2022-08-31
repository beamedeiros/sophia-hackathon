<template>
  <div class="column" style="height: 100%;">
    <div class="row header">
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
    <ClickableCard 
      v-for="attendance of filteredLists" 
      :course="attendance.course" 
      :discipline="attendance.discipline"
      :id="attendance.id" 
      :status="attendance.status" 
      :key="attendance.id" 
      @click="openList(attendance.id)"
    />
  </div>
</template>

<script>
import ClickableCard from '../components/Card.vue'
import dayjs from 'dayjs'

export default {
  name: 'SelectAttendanceList',
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
          status: 'pending',
          date: '2022-08-30'
        },
        {
          course: '2˚ Ano',
          discipline: 'Português',
          id: 2,
          status: 'done',
          date: '2022-08-31'
        },
        {
          course: '5˚ Ano',
          discipline: 'História',
          id: 4,
          status: 'late',
          date: '2022-08-31'
        },
      ],
      date: dayjs().format('YYYY-MM-DD')
    }
  },
  methods: {
    addDay: function () {
      this.date = dayjs(this.date).add(1, 'day').format('YYYY-MM-DD')
    },
    subtractDay: function () {
      this.date = dayjs(this.date).subtract(1, 'day').format('YYYY-MM-DD')
    },
    openList: function (id) {
      this.$router.push(`/attendanceList/${id}`)
    }
  },
  computed: {
    filteredLists: function () {
      return this.list.filter(list => list.date == this.date)
    }
  }
}
</script>

<style lang="scss">

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

</style>
