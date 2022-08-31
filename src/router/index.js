import {createRouter, createWebHashHistory} from 'vue-router'

//views
import SelectAttendanceList from '../views/SelectAttendanceList.vue'
import AttendanceList from '../views/AttendanceList.vue'



const routes = [
  {
    path: '/',
    component: SelectAttendanceList
  },
  {
    path: '/attendanceList/:id',
    component: AttendanceList
  }
]

const router = new createRouter({
  history:  createWebHashHistory(),
  routes
});


export default router;
