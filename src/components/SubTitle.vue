<template>
    <div class="sub-header" :class="{'inset': inset}">
        <slot></slot>
        <span class="sub-header-right">
            <slot name="right"></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'sub-header',
        props: {
            inset: {
                type: Boolean,
                default: false
            }
        }
    }

</script>

<style lang="scss">
    .sub-header {
        color: rgba(0, 0, 0, 0.541176);
        font-size: 14px;
        line-height: 48px;
        padding-left: 16px;
        padding-right: 16px;
        width: 100%;
        &.inset {
            padding-left: 72px;
        }
    }
    
    .sub-header-right {
        float: right;
    }
</style>