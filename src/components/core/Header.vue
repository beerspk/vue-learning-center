<template>
  <div id="Header">
    <v-app-bar color="grey lighten-2" height="100px" app>
      <!-- <v-app-bar-nav-icon class="p-10"></v-app-bar-nav-icon> -->
      <v-btn large icon>
        <v-icon class="ml-10" size="50px">mdi-menu</v-icon>
      </v-btn>

      <h2 class="ml-15">Partner Collaboration center</h2>

      <v-spacer></v-spacer>

      <v-row justify="end">
        <v-col cols="12">
          <v-row justify="end" class="mt-5">
            <v-btn large icon>
              <v-icon>mdi-home</v-icon>
            </v-btn>

            <v-btn large icon>
              <v-icon>mdi-phone</v-icon>
            </v-btn>

            <v-btn large icon>
              <v-icon>mdi-logout</v-icon>
            </v-btn>

            <v-menu left bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn large icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                  <v-list-item-title>Option {{ n }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-row>
        </v-col>
        <v-row justify="end" class="mt-2">
          <v-col cols="4">
            <v-text-field class="input-small" solo label="Search" dense></v-text-field>
          </v-col>

          <v-col cols="1" class="ml-5">
            <v-text-field class="input-small" solo label="FAQs" dense></v-text-field>
          </v-col>
        </v-row>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.col {
  padding: 0px;
  margin: 0px;
}
.row {
  padding: 0px;
  margin: 0px;
}
</style>
