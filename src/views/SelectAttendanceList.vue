<template>
  <div class="column">
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
    <div class="card-container column">
      <ClickableCard 
      v-for="attendance of list" 
      :course="attendance.course" 
      :discipline="attendance.discipline"
      :id="attendance.id" 
      :classNum="attendance.classNum"
      :status="attendance.status"
      :key="attendance.id" 
      @click="openList(attendance.id, attendance.type)"
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
    openList: function (id, type) {
      console.log(type)
      //TODO: Figure out how to use types
      this.$router.push(`/attendanceList/${id}`)
    },
    updateList: async function(newDate) {
      const sophiaAPI = await SophiaAPI.init(6000, 'antonio', 'antonio')
      const date = dayjs(newDate).format('MM/DD/YYYY')
      this.list = await sophiaAPI.getAttendanceLists(1, 290, 30, date)

      console.log(this.list)
    }
  },
  watch: {
    date: function (newDate) {
      this.updateList(newDate)
    }
  }
}
</script>

<style>
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

.card-container {
  flex: 1 1 auto;
  min-height: 100%;
}

</style>
