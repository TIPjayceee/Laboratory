<template>

 <v-card
    class="ma-15"
    max-width="544"
    color=""
 >
  <v-card-title> String Manipulator </v-card-title>

   <v-text-field label="Enter a String" v-model="Input"></v-text-field>

   <v-card-actions  >
   <v-btn @click="doCountVowel" >
        Convert
   </v-btn>
   </v-card-actions>
   
   <h4>Uppercase</h4>{{uppercase}}
   <h4>Vowel Count</h4>{{vowelCount}}
   <h4>Consonant Uppercase</h4>{{consonant}}
   <h4>Convert</h4>{{voweltoast}}
 </v-card>  

</template>

<script setup>
import {ref} from 'vue'

const Input = ref('')
const vowelCount = ref(0)
const uppercase = ref(0)
const voweltoast = ref(0)
const consonant = ref(0)

function doCountVowel () {
     uppercase.value = Input.value.toUpperCase()
     vowelCount.value = Input.value.match(/[aeiou]/gi).length
     consonant.value = Input.value.toUpperCase().match(/[BCDFGHJKLMNPQRSTVWXYZ]/gi)
     voweltoast.value = Input.value.replace(/[aeiou]/gi, '*')
     
}

</script>
