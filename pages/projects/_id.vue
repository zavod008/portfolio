<template>
    <section class="page-content">
        <h1 class="title">
            {{ post.title }}
        </h1>
        <a :href="post.link" target="_blank">
            <img :src="post.image.full" alt="">
        </a>
        <div class="text-content" v-html="post.description">
        </div>
    </section>
</template>

<script>
import portfolioList from '~/components/Project/projects.js'

export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },
    computed: {
        post() {
            return portfolioList.find(({id}) => id === +this.id)
        }
    }
}
</script>

<style scoped>

</style>
