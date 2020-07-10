<template>
    <div id="objective-sidebar">
        <h3 class="sidebar-title"> -Objectives- </h3>
        <div class="sidebar-content">
            <transition name="fade-text" class="objective-fade">
                <ul v-if="currentObjective === this.activeObjective" class="objective-row-container">
                    <li class="objective-item">{{ objectives[activeObjective].text }}</li>
                </ul>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'objective-sidebar',
        props: {
            activeObjective: Number,
            objectives: Array
        },
        data() {
            return {
                currentObjective: this.activeObjective
            }
        },

        watch: {
            activeObjective() {
                setTimeout(() => {
                    this.currentObjective = this.activeObjective
                }, 500)
            }
        }
    }
</script>

<style>
    #objective-sidebar {
        display: inline-block;
        position: absolute;
        right: 0;
        bottom: 15%;
        width: 25%;
        height: 55%;
        padding-top: 2%;
        overflow: auto;
        font-family: PressStart2P-Regular, sans-serif;
        color: #8b9999;
    }

    .sidebar-title {
        padding: 2%;
        margin: 0;
        font-size: 1.5rem;
        color: darkred;
        border-bottom-style: solid;
        border-color: darkred;
        border-width: .1rem;
    }

    .sidebar-content {
        margin-top: 3%;
    }

    .objective-row-container {
        padding-left: 5%;
        margin: 0;
    }

    .objective-item {
        padding: 5% 0;
        margin-left: 5%;
        list-style-type: none;
        text-align: left;
        font-size: 1.25rem;
    }

    .fade-text-enter-active,
    .fade-text-leave-active {
        transition: all 2s;
    }

    .fade-text-enter,
    .fade-text-leave-to {
        color: darkred;
        opacity: 0;
    }
</style>
