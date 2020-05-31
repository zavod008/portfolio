<template>
    <div class="menu">
        <ul class="menu__list">
            <li class="menu__item">
                <n-link to="/projects" class="menu__link">
                    Проекты
                </n-link>
            </li>
            <li class="menu__item">
                <n-link to="/about" class="menu__link">
                    Обо мне
                </n-link>
            </li>
            <li class="menu__item">
                <n-link to="/contact" class="menu__link">
                    Контакты
                </n-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Menu'
}
</script>

<style lang="scss">
  .menu {
    margin-bottom: 15px;

    @include respond-to(phone) {
      margin-bottom: 0;
    }

    &__list {
      display: flex;
      flex-direction: column;
      align-items: center;

      @include respond-to(phone) {
        flex-direction: row;
        justify-content: space-between;
      }
    }

    &__item {

      &:not(:last-of-type) {
        margin-bottom: 10px;

        @include respond-to(phone) {
          margin-bottom: 0;
        }
      }
    }

    &__link {
      text-transform: uppercase;
      font-weight: 700;
      font-family: 'Press Start 2P', sans-serif;
      white-space: nowrap;

      &.nuxt-link-active {
        color: #1d3557;
      }

      @include respond-to(phone) {
        font-size: .75rem;
      }
    }
  }
</style>
