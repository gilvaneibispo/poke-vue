<template>
    <div class="page-wrap d-flex flex-row align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12 text-center">
                    <span class="display-1 d-block">404</span>
                    <div class="mb-4 lead">The page you are looking for was not found.</div>
                    <a href="#" @click.prevent="goBack()" class="btn btn-link">&#171; Back to Home</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Page404"
    }
</script>

<style scoped>

</style>