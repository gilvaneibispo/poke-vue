<template>
    <footer class="footer">
        <div class="content has-text-centered">
            <p>
                <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                <span>by <a href="https://gilvaneibispo.com">Gilvanei Bispo</a></span>
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