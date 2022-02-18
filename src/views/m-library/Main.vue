<template>
  <div id="Main" style="height: 100%;">
    <v-container style="height: 100%;">
      <v-row justify="center" style="position: relative; top: 60%;">
        <v-col cols="12" md="3" class="d-flex justify-center">
          <CardMenu name="Self-Learning Center" :items="items" />
        </v-col>
        <v-col cols="12" md="3" class="d-flex justify-center">
          <CardMenu name="Learning Profile" :items="items2" />
        </v-col>
        <v-col cols="12" md="3" class="d-flex justify-center">
          <CardMenu name="Guidelines and tools" :items="items3" />
        </v-col>
        <v-col cols="12" md="3" class="d-flex justify-center">
          <CardMenu name="Activity/Event Calendar" :items="items4" />
        </v-col>
      </v-row>
    </v-container>
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
        { name: 'Partner Code of Conduct', link: `/course/Partner Code of Conduct` },
        { name: 'Labor and human rights', link: `/course/` },
        { name: 'Health and safety', link: `/course/` },
        { name: 'Environmental', link:`/course/` },
        { name: 'Ethics', link: `/course/` },
        { name: 'Management System', link: `/course/` },
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
/* .bg_main {
  height: 100%;
  width: 100%;
  background-image: url('../../assets/background/Home_BG.jpg');
  background-size: 100%;
  background-position: 100% 0%;
  background-repeat: no-repeat;
} */
</style>
