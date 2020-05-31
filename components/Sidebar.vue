<template>
    <div class="sidebar">
        <div class="sidebar__image">
            <img src="images/avatar.jpg" alt="">
        </div>
        <Menu/>
        <Socials class="sidebar__socials"/>
    </div>
</template>

<script>
import Menu from './Menu'
import Socials from './Socials'

export default {
    name: 'Sidebar',
    components: {
        Menu,
        Socials
    }
}
</script>

<style lang="scss">
  .sidebar {
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: $blue;
    border-right: 5px solid $text;
    z-index: 10;

    @include respond-to(phone) {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      border-right: none;
      border-top: 5px solid $text;
      display: block;
    }

    &__image {
      margin-bottom: 15px;
      max-width: 150px;
      background-color: #fff;
      padding: 25px;
      border-radius: 10px;

      @include respond-to(phone) {
        display: none;
      }
    }

    &__socials {

      @include respond-to(phone) {
        display: none;
      }
    }
  }
</style>
