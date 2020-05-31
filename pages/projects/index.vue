<template>
    <section class="page-content">
        <h1 class="title">
            Проекты
        </h1>
        <div class="text-content">
            <p>
                Конечно, здесь представлены не все проекты, в которых я принимал участие. Веб такая штука, что сайты создаются
                и загинаются, с невероятной скоростью, и все что остается после них, это макеты.
            </p>
            <p>
                Сегодня ты молодой и красивый пыхтишь над версткой, а через полгода, сайта уже не существует, что довольно
                таки удручает.
            </p>
        </div>
        <div class="project-list">
            <ProjectCard v-for="card in projectList"
                :key="card.id"
                :card="card"/>
        </div>
    </section>
</template>

<script>
import ProjectCard from '~/components/Project/ProjectCard'
import projectList from '~/components/Project/projects.js'

export default {
    components: {
        ProjectCard
    },
    data() {
        return {
            projectList: []
        }
    },
    mounted() {
        this.projectList = projectList;
    }
}
</script>

<style lang="scss">
  .project-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 30px;
  }
</style>

