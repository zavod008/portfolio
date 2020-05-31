<template>
    <div class="wrapper">
        <Sidebar/>
        <Page>
            <nuxt/>
        </Page>
    </div>
</template>

<script>
import Sidebar from '~/components/Sidebar'
import Page from '~/components/Page'

export default {
    components: {
        Sidebar,
        Page
    },
    middleware: 'portfolio'
}
</script>

<style lang="scss">
  .wrapper {
    display: grid;
    grid-template-columns: 300px 1fr;
    height: 100vh;
    width: 100vw;
    overflow: hidden;

    @include respond-to(phone) {
      grid-template-columns: 1fr;
    }
  }
</style>
