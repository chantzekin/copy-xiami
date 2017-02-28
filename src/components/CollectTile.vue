<template>

    <div class="collect-tile" @clcik="handleClick">
        <div class="collect-tile__cover">
            <slot name="cover"></slot>
            <i class="collect-tile__play-count">
                <slot name="playCount"></slot>
            </i>
        </div>
        <div class="collect-tile__title">
            <slot name="title"></slot>
        </div>
        <div class="collect-tile__author">
            <slot name="author"></slot>
        </div>
    </div>

</template>

<script>
    export default {
        props: {

        },
        methods: {
            handleClick(e) {
                this.$emit('click', e)
            },
        }
    }

</script>

<style lang="scss">
    .collect-tile {
        width: 31.5%;
        margin-bottom: 16px;
    }
    
    .collect-tile__cover {
        position: relative;
        img {
            display: block;
            width: 100%;
            margin-bottom: 6px;
        }
    }
    
    .collect-tile__title,
    .collect-tile__author {
        font-size: 13px;
        line-height: 1.2;
    }
    
    .collect-tile__title {
        height: 2.3em;
        margin-bottom: .8em;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    .collect-tile__play-count {
        position: absolute;
        display: block;
        bottom: 5px;
        color: #fff;
        padding-left: 6px;
        font-style: normal;
        font-size: 11px;
        line-height: 1;
        text-shadow: rgba(0, 0, 0, .2) 1px 1px 2px;
        .mu-icon {
            display: inline-block;
            position: relative;
            top: 1px;
            font-size: 11px;
            line-height: 1;
            margin-right: 2px;
        }
    }
    
    .collect-tile__author {
        color: #9D9D9D;
    }
</style>