<template>
  <div class="column" style="height: 100%">
    <router-view></router-view>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'App',
  data: function () {
    return {
      list: [],
      date: dayjs().format('YYYY-MM-DD')
    }
  },
  methods: {
    addDay: function () {
      this.$router.push('/attendanceList')
      this.date = dayjs(this.date).add(1, 'day').format('YYYY-MM-DD')
    },
    subtractDay: function () {
      this.date = dayjs(this.date).subtract(1, 'day').format('YYYY-MM-DD')
    }
  }
}
</script>

<style>

body, html {
  margin: 0px;
  min-height: 100vh;
  min-width: 100vw;
  display: flex
}

:root {
  --background-grey: #F4F6F8;
  --cyan: #00B8AD
  --red: #E86161
}

#app {
  font-family: Nunito, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: var(--background-grey);
  flex: 1 1 auto;

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
