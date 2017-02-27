<template>
    <div class="tip">
        <mu-icon value="developer_mode"></mu-icon>
        <span>MV 功能正在开发中...</span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'mv'
            }
        }
    }

</script>

<style lang="scss" scoped>
    .tip {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .mu-icon {
            font-size: 128px;
            color: #a8a8a8;
            margin-bottom: 24px;
        }
        span{
            color: #c8c8c8;
        }
    }
</style>