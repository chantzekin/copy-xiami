<template>

    <span class="play-count" v-show="count">
        <mu-icon v-if="showIcon" value="hearing"/>
        {{ count | formatCount }}
    </span>

</template>

<script>

    export default {
        data() {
            return {

            }
        },
        props: {
            count: Number,
            showIcon: Boolean
        }
    }

</script>

<style scoped>
    .play-count{
        position: absolute;
        left: 4px;
        bottom: 6px;
        display: flex;
        align-items: center;
        font-size: 12px;
        line-height: 1;
        color: #fff;
        text-shadow: 0 0 2px rgba(0, 0, 0, .1)
    }
    .play-count .mu-icon{
        font-size: 12px;
        margin-right: 4px;
    }
</style>