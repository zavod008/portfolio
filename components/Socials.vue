<template>
    <div class="socials">
        <ul class="socials__list">
            <li v-for="social in socials"
                :key="social.id"
                class="socials__item">
                <a class="socials__link"
                    target="_blank"
                    :href="social.link"><svg-icon width="24"
                    height="24"
                    :name="social.icon"/></a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Socials',
    data() {
        return {
            socials: [
                {
                    id: 1,
                    link: 'https://github.com/zavod008',
                    icon: 'github'
                }, {
                    id: 2,
                    link: 'https://t.me/zavod008',
                    icon: 'telegram'
                },  {
                    id: 3,
                    link: 'https://vk.com/zavod1357',
                    icon: 'vk'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.socials {

  &__list {
    display: flex;
  }

  &__item {

    &:not(:last-of-type) {
      margin-right: 15px;
    }
  }
}
</style>
