<template>
   
    <h1>Axios Demo</h1>
    <v-card
    class="ma-15"
    max-width="1000"
    color="red">

    <p>{{Deez.data}} </p>

    </v-card>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios'

  const  Deez=ref([])

  async function getDeez () {
       axios({
                method: 'GET',
                url: 'https://deez-nuts-jokes.p.rapidapi.com/jokes',
                params: {max_results: '47'},
                headers: {
                    'X-RapidAPI-Key': '81d6187a28msh84a7bb3e24724e2p1f8cb2jsnc808d27f573d',
                    'X-RapidAPI-Host': 'deez-nuts-jokes.p.rapidapi.com'
                        }  
            }).then( response => {
       Deez.value=response.data;
       console.log(Deez.value)
      })
  
  }
   onMounted( async () => {
       await getDeez()
   })

</script>

