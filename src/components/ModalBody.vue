<template>
    <div>
jlkjllkjlk<br/>jlkjllkjlk<br/>jlkjllkjlk<br/>jlkjllkjlk<br/>jlkjllkjlk<br/>jlkjllkjlk<br/>jlkjllkjlk<br/>
    </div>
</template>
<script>
    export default {
        name: 'ModalBody',
        data() {
            return {
                paragraphs: [null, null],
                timer: null
            }
        },
        methods: {
            beforeOpen(event) {
                console.log('before-open', event)
            },
            beforeClose() {
                clearInterval(this.timer)
                this.timer = null
            },
            opened(event) {
                this.timer = setInterval(() => {
                    this.paragraphs.push(null)
                }, 5000)
                // e.ref should not be undefined here
                console.log('opened', event)
                console.log('ref', event.ref)
            },
            closed(event) {
                this.paragraphs = []
                console.log('closed', event)
            }
        }
    }
</script>
<style>
    .size-modal-content {
        padding: 10px;
        font-style: 13px;
    }
    .v--modal-overlay[data-modal='size-modal'] {
        background: rgba(0, 0, 0, 0.5);
    }
    .demo-modal-class {
        border-radius: 5px;
        background: #f7f7f7;
        box-shadow: 5px 5px 30px 0px rgba(46, 61, 73, 0.6);
    }
</style>