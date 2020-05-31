<template>
    <section class="page-content">
        <h1 class="title">
            Контакты
        </h1>
        <div class="text-content">
            <p>
                Почта: <br>
                <a href="mailto:zavod1357@mail.ru">zavod1357@mail.ru</a>
            </p>
            <p>
                Телефон: <br>
                <a href="tel:+79954160283">+79954160283</a>
            </p>
            <p>
                <Socials/>
            </p>
        </div>
    </section>
</template>

<script>
import Socials from '~/components/Socials';
export default {
    components: {
        Socials
    }
}
</script>

<style lang="scss">

</style>

