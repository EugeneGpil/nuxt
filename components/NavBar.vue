<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Nuxt SSR</a>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <n-link exact active-class='active' class='nav-link' :to="{name: 'index'}">
            Home
          </n-link>
        </li>
        <li class="nav-item">
          <n-link exact active-class='active' class='nav-link' :to="{name: 'about'}">
            About
          </n-link>
        </li>
        <li class="nav-item">
          <n-link exact active-class='active' class='nav-link' :to="{name: 'users'}">
            Users
          </n-link>
        </li>
        <li class="nav-item" v-if="!hasToken">
          <n-link exact active-class='active' class='nav-link' :to="{name: 'login'}">
            Login
          </n-link>
        </li>
        <li class="nav-item" v-if="hasToken">
          <a exact active-class='active' class='nav-link' href="#" @click.prevent="logout()">
            Logout
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    hasToken() {
      return this.$store.getters.hasToken
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('clearToken')
      this.$router.push({name: 'index'})
    }
  }
}
</script>