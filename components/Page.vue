<template>
    <div class="page">
        <div class="container">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Page'
}
</script>

<style lang="scss">
  .page {
    padding: 0 15px;
    background-color: #f8dbd5;
    overflow-y: auto;

    @include respond-to(phone) {
      padding-bottom: 75px;
    }
  }

  .container {
    padding: 15px 0;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    max-width: 1280px;
  }
</style>
