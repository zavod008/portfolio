<template>
    <n-link :to="{name: 'projects-id', params: {id: card.id}}" class="project-card">
        <img
            :src="card.image.card"
            alt=""
            class="project-card__image">
        <div class="project-card__hover" :style="cardHoverStyle">
            <span>{{ card.title }}</span>
        </div>
    </n-link>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: {
        card: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            hoverColors: ['#56423E', '#D0A096', '#005aba', '#A4AE97', '#0091A4', '#E96955', '#005aba', '#90ABDE']
        }
    },
    computed: {
        cardHoverStyle() {
            return {
                'background-color': this.hoverColors[Math.floor(Math.random() * this.hoverColors.length)]
            }
        }
    },
}
</script>

<style lang="scss">
  .project-card {
    display: flex;
    overflow: hidden;
    border-radius: 10px;
    position: relative;
    box-shadow:  -10px -10px 20px #d3bab5,
    10px 10px 20px #fffcf5;
    transition: .3s;

    $this: &;

    &:hover {
      color: #fff;

      #{$this}__hover {
        opacity: 1;
      }
    }

    &__image {
      width: 100%;
      object-fit: cover;
    }

    &__hover {
      transition: .3s;
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 1.25rem;
      font-family: "Press Start 2P", sans-serif;
    }
  }
</style>
