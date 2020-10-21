<template>
    <section>
        <h1>Users Page</h1>
        <ul>
            <li v-for="user of users" :key="user.id">
                <n-link :to="{name: 'users-id', params: {id: user.id}}">
                    User {{ user.name }}
                </n-link>
            </li>
        </ul>
    </section>
</template>

<script>
export default {

    async fetch({store}) {
        if (!store.getters['users/users'].length) {
            await store.dispatch('users/fetch')
        }
    },

    computed: {
        users() {
            return this.$store.getters['users/users']
        }
    }
}
</script>