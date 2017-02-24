<template>

    <div class="collect-grid">
        <slot></slot>
        <div class="collect-grid__bd">
            <slot name="gridContent"></slot>
        </div>
    </div>

</template>

<script>

</script>

<style lang="scss">
    .collect-grid__bd{
        padding-left: 16px;
        padding-right: 16px;
        display: flex;
        flex-wrap:wrap;
        justify-content: space-between;
    }
</style>