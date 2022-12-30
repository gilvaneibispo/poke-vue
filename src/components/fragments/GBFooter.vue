<template>
    <footer class="footer">
        <div class="content has-text-centered">
            <p>
                <strong class="text-gray-100">Poke.JS</strong>
                <span>by <a href="https://gilvaneibispo.com.br">Gilvanei Bispo</a></span>
            </p>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "GBFooter"
    }
</script>

<style scoped>

    span{
        display: block;
    }

    .footer{
        padding: 2rem 1.5rem;
        background: linear-gradient(-30deg, #4f38a4, #a244bc 45%, #4f38a4 45%) #4f38a4;
        color: #fff;
    }

    .footer a{
        color: #00d1b2;
    }
</style>