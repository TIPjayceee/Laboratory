import { createRouter, createWebHistory } from 'vue-router'
import PersonalLife from '../views/PersonalLife.vue'
import ProgrammingSkill from '../views/ProgrammingSkill.vue'
import AboutProgram from '../views/AboutProgram.vue'
import AboutTIP from '../views/AboutTIP.vue'
import Calculator from '../views/Calculator.vue'
import string from '../views/StringAppView.vue'
import vuetify from '../views/Vuetify.vue'
import api from '../views/API.vue'
import areas from '../views/Areas.vue'
import axios from '../views/axious.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/PersonalLife',
      name: 'PersonalLife',
      component: PersonalLife
    },
    {
      path: '/ProgrammingSkill',
      name: 'ProgrammingSkill',
      component: ProgrammingSkill
    },
    {
      path: '/AboutProgram',
      name: 'AboutProgram',
      component: AboutProgram
    },
    {
      path: '/AboutTIP',
      name: 'AboutTIP',
      component: AboutTIP
    },
    {
      path: '/Calculator',
      name: 'Calculator',
      component: Calculator
    },
    {
      path: '/string',
      name: 'string',
      component: string
    },
    {
      path: '/api',
      name: 'api',
      component: api
    },
    {
      path: '/vuetify',
      name: 'vuetify',
      component: vuetify
    },
    {
      path: '/areas',
      name: 'areas',
      component: areas
    },
    {
      path: '/axios',
      name: 'axios',
      component: axios
    },
  ]
})

export default router
