<template>
  <div id="Home" :class="isMobile ? 'bg-mobile' : 'bg-web'">
    <v-container class="fill-height d-flex align-end">
      <v-row justify="center">
        <v-col cols="12">
          <!-- <v-bottom-sheet value="true" persistent inset> -->
          <v-card>
            <div class="line"></div>
            <v-card-title class="d-flex justify-center">
              <div :style="`color:#F9A825`" class="text-center">
                Join Us with your e-mail to Access the Educational Tools and
                Resources
                <br />
                You Need to Stay Ahead and Compliant in the Responsible
                Appliance Business, Labor, Ethics and
                <br />
                Environment
              </div>
            </v-card-title>

            <v-card-text>
              <v-row justify="space-around">
                <v-col cols="12" md="2">
                  <card-icon
                    icon="mdi-account-multiple-plus"
                    text="Join"
                    routeName="Join"
                  />
                </v-col>
                <v-col cols="12" md="2">
                  <card-icon
                    icon="mdi-account-multiple-plus"
                    text="Educate"
                    textColor="#0D47A1"
                  />
                </v-col>
                <v-col cols="12" md="2">
                  <card-icon
                    icon="mdi-account-multiple-plus"
                    text="Assessment"
                    textColor="#33691E"
                  />
                </v-col>
                <v-col cols="12" md="2">
                  <card-icon
                    icon="mdi-account-multiple-plus"
                    text="Tools"
                    textColor="#C2185B"
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <!-- </v-bottom-sheet> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CardIcon from '@/components/CardIcon'
export default {
  components: {
    CardIcon,
  },
  name: 'Home',
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 960
    },
  },
  data() {
    return { isMobile: false }
  },
  beforeDestroy() {
    if (typeof window === 'undefined') return

    window.removeEventListener('resize', this.onResize, { passive: true })
  },
}
</script>

<style scoped>
.line {
  border: solid 8px lightblue;
}
</style>
