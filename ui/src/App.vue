<template>
  <v-app>
    <v-app-bar color="primary" prominent>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Boilerplate</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-title>
                <v-icon icon="mdi-vuejs" class="mr-2"></v-icon>
                Welcome to Boilerplate
              </v-card-title>
              <v-card-text>
                <p>This is a boilerplate project with:</p>
                <v-list>
                  <v-list-item>
                    <v-list-item-title
                      >Node.js with Workspaces</v-list-item-title
                    >
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title
                      >TypeScript (strict disabled)</v-list-item-title
                    >
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Express API</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Vue 3 + Vite</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Vuetify + MDI Icons</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
// App component
</script>

<style lang="scss" module>
// Component styles
</style>
