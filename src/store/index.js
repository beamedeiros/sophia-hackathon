import { createStore} from "vuex";
import dayjs from 'dayjs';

const store = createStore({
  state () {
    return {
      date: dayjs().format('YYYY-MM-DD'),
      course: ''
    }
  },
  getters: {
    date (state) {
      return state.date
    },
    course (state) {
      return state.course
    },
    discipline (state) {
      return state.discipline
    },
    description (state) {
      return state.description
    },
    listType (state) {
      return state.listType
    }
  },
  mutations: {
    setDate (state, date) {
      state.date = date
    },
    setCourse (state, course) {
      state.course = course
    },
    setDiscipline (state, discipline) {
      state.discipline = discipline
    },
    setDescription(state, description) {
      state.description = description
    },
    setListType(state, type) {
      state.listType = type
    }
  }
})

export default store