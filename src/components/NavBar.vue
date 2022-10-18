<template>
  <nav>
      <v-toolbar app>
       <v-app-bar-nav-icon @click='toggleDrawer'></v-app-bar-nav-icon>
      <v-toolbar-title >
        <span class="font-weight-light">Midterm Laboratory-- </span>
        <span>1</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
    <v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Dropdown
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          router
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

      <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
      
      
      </v-toolbar>

     <v-navigation-drawer app v-model="drawer" >
       <v-list-item
          v-for="item in items"
          :key="item.title"
          router 
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          
        </v-list-item>
      
     </v-navigation-drawer>
  </nav>
</template>

<script setup>
  import { ref } from 'vue'
    
  const drawer = ref(false)

  const  items =  ref([
           { title: 'Personal Life', icon: 'mdi-view-dashboard', path: '/PersonalLife' },  
           { title: 'Programming Skill', icon: 'mdi-view-dashboard', path: '/ProgrammingSkill' },
           { title: 'About Program', icon: 'mdi-view-dashboard', path: '/AboutProgram' },        
           { title: 'About TIP', icon: 'mdi-view-dashboard', path: '/AboutTIP'},
           { title: 'Calculator', icon: 'mdi-view-dashboard', path: '/Calculator'},
           { title: 'String Manipulation', icon: 'mdi-view-dashboard', path: '/string'},
           { title: 'Vuetify', icon: 'mdi-view-dashboard', path: '/vuetify'},
           { title: 'API', icon: 'mdi-view-dashboard', path: '/api'},
           { title: 'Compute Areas', icon: 'mdi-view-dashboard', path: '/areas'},
           { title: 'Axios', icon: 'mdi-view-dashboard', path: '/axios'},
        ])

 function toggleDrawer(){
  return drawer.value = !drawer.value
 }

 
</script>