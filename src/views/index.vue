<template>

    <div>
        <div class="topbar-fix">
            <mu-appbar title="虾米音乐">
                <mu-icon-button icon='menu' slot="left" />
                <div slot="right">
                    <mu-icon-button icon='search' />
                    <mu-icon-button icon='code' @click="toGithub" />
                </div>                
            </mu-appbar>
            <mu-tabs class="view-tabs" :value="activeTab" @change="handleTabChange">
                <mu-tab value="home" title="首页" />
                <mu-tab value="collect" title="精选集" />
                <mu-tab value="rank" title="排行榜" />
                <mu-tab value="radio" title="电台" />
                <mu-tab value="mv" title="MV" />
            </mu-tabs>
        </div>

        <transition :name="transitionName">
            <keep-alive>
                <router-view class="child-view"></router-view>
            </keep-alive>
        </transition>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                transitionName: 'fade',
                activeTab: 'home'
            }
        },
        created() {
            var tmpArr = this.$route.path.split('/')
            if (tmpArr[1] === 'index') {
                this.handleTabChange(tmpArr[2])
            }
        },
        watch: {
            '$route'(to, from) {
                const path = to.path
                var tmpArr = path.split('/')
                if (tmpArr[1] === 'index') {
                    this.handleTabChange(tmpArr[2])
                }
            }
        },
        methods: {
            handleTabChange(val) {
                this.activeTab = val
                this.$router.replace({ path: '/index/' + val })
            },
            toGithub(){
                window.open("https://github.com/Naraku777/copy-xiami");
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
    
    .child-view {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding-top: 104px;
        overflow-y: auto;
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
        padding-bottom: 56px;
        transition: all .3s cubic-bezier(.55, 0, .1, 1);
    }
    
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s ease;
    }
    
    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>