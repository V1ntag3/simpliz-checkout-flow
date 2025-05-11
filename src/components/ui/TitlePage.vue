<template>
    <v-col class="title-page-container">
        <h1 class="title-page">{{ title }}</h1>
        <hr class="mx-9">
    </v-col>
</template>

<script>
export default {
    name: "TitlePage",
    props: {
        title: String
    }
};
</script>

<style lang="css" scoped>
.title-page-container{
    margin-bottom: 50px;
}
.title-page {
    font-family: var(--simpliz-title-font);
    color: white;
    font-size: 2.6rem;
    text-align: center;
}

@media (max-width:998px) {
    .title-page {
        font-size: 2rem;
    }
}

@media (max-width:768px) {
    .title-page {
        font-size: 1.8rem;
    }
}

@media (max-width:576px) {
    .title-page {
        font-size: 1.5rem;
    }
}
</style>