<template>

    <div>
        <div class="topbar-fix">
            <mu-appbar title="虾米音乐">
                <mu-icon-button icon='menu' slot="left" />
                <mu-icon-button icon='search' slot="right" />
            </mu-appbar>
            <mu-tabs class="view-tabs" :value="activeTab" @change="handleTabChange">
                <mu-tab value="home" title="首页" />
                <mu-tab value="collect" title="精选集" />
                <mu-tab value="rank" title="排行榜" />
                <mu-tab value="radio" title="电台" />
                <mu-tab value="mv" title="MV" />
            </mu-tabs>
        </div>

        <div class="view">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                activeTab: 'home'
            }
        },
        methods: {
            handleTabChange(val) {
                this.activeTab = val
            }
        }
    }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .topbar-fix {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 15;
    }
    
    .view-tabs {
        background-color: #fff;
        color: rgba(0, 0, 0, .87);
        &>.mu-tab-link {
            color: rgba(102, 102, 102, 1);
        }
        &>.mu-tab-active {
            color: #FF8833;
        }
    }
    
    .view {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding-top: 104px;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }
</style>