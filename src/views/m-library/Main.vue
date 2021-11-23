<template>
  <div id="Main" class="bg_main">
    <v-container style="height: 60%;"></v-container>
    <v-row justify="center" align="start">
      <v-col cols="12" md="3" class="d-flex justify-center">
        <CardMenu name="Self-Learning Center" :items="items" />
      </v-col>
      <v-col cols="12" md="3" class="d-flex justify-center">
        <CardMenu name="Learning Profile" />
      </v-col>
      <v-col cols="12" md="3" class="d-flex justify-center">
        <CardMenu name="Guidelines and tools" />
      </v-col>
      <v-col cols="12" md="3" class="d-flex justify-center">
        <CardMenu name="Activity/Event Calendar" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CardMenu from '@/components/CardMenu'
export default {
  components: {
    CardMenu,
  },
  data() {
    return {
      items: [
        { name: 'Partner Code of Conduct', link: '' },
        { name: 'Labor and human rights', link: '' },
        { name: 'Health and safety', link: '' },
        { name: 'Environmental', link: '' },
        { name: 'Ethics', link: '' },
        { name: 'Management System', link: '' },
      ],
      items2: [
        { name: 'Learning History', link: '' },
        { name: 'Transcipt', link: '' },
        { name: 'Survey', link: '' },
        { name: 'Web board', link: '' },
      ],
      items3: [
        { name: 'Manual', link: '' },
        { name: 'Guideline', link: '' },
        { name: 'Format', link: '' },
        { name: 'Report', link: '' },
      ],
      items4: [
        { name: 'Labor Law activity/event', link: '' },
        { name: 'EHS Law activity/event', link: '' },
        { name: 'TSE activity/event', link: '' },
      ],
    }
  },
}
</script>

<style>
.bg_main {
  height: 100%;
  width: 100%;
  background-image: url('../../assets/background/Home_BG.jpg');
  background-size: 100%;
  background-position: 100% 0%;
  background-repeat: no-repeat;
}
</style>
