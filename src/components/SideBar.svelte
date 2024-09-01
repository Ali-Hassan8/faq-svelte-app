<script>
	import { onMount } from 'svelte';
    import {store} from '../store.js'

    //onMount(()=>{
        //stateFromSize();
        //setTimeout(function(){document.querySelector(".igen-sidebar").style.display='block';},200);
    //})
        
    function closeSidebar() {
        store.toggleSidebar();
    }

    function stateFromSize() {
        if (
            window.getComputedStyle(document.body, ':before').content === '"small"'
        ) {
            store.toggleSidebar();
        } else {
            store.toggleSidebar();
        }
    }

    function sidebarScroll() {
        const mainNavLinks = document.querySelectorAll(
        '.topic.active + ul .sub-topic'
        );
        const fromTop = window.scrollY;

        mainNavLinks.forEach(link => {
        const section = document.querySelector(link.hash);
        const allCurrent = document.querySelectorAll('.current');
        let i;

        if (section.offsetTop <= fromTop) {
            for (i = 0; i < allCurrent.length; i += 1) {
            allCurrent[i].classList.remove('current');
            }
            link.classList.add('current');
        } else {
            link.classList.remove('current');
        }
        });
    }
</script>
<aside
    class="igen-sidebar {
        $store.state.sidebarOpen ? 'sidebar--open': '' 
    }"
    >
    <!-- <scroll
        active-class="active"
        offset="79"
        scrollOffset="90"
        duration="200"
        clickToScroll="true"
    > -->
    <nav class="scroll-nav">
        {#each categories as category}
            <a
                class="scroll-item"
                href="#{category.u}"
                    on:click={closeSidebar()}
            >
            {@html category.c}
            </a>
        {/each}
    </nav>
    <!-- </scroll> -->
</aside>

<style type="text/scss">
    @import "../assets/scss/_variables.scss";
    @import "../assets/scss/_mediaQueries.scss";
    .igen-sidebar {
      
        z-index: 999;
        transition: background 0.15s ease-in-out, transform 0.15s ease-in-out,
        border-color 0.15s linear;
        padding: 100px 30px 30px;
        width: 300px;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 9;
        will-change: transform;
        transform: translateX(-300px);
        background: var(--sidebarBg);
        overflow: auto;

        &.sidebar--open {
            transform: translateX(0);
        }

        &--open {
            transform: translateX(0);
        }

        @include respond-above(sm) {
            padding: 0 30px 30px;
        }

        @include respond-above(sm) {
            transform: translateX(0);
            display: block;
        }
    }

    nav {
        padding-top: 20px;
        position: relative;
        min-height: 90%;
        padding-bottom: 40px;
        display: flex;
        flex-direction: column;
    }

    .scroll-item {
        font-size: 0.875rem;
        position: relative;
        padding: 5px 0;
        transition: all 0.15s ease;
        color: var(--sidebartxtColor);
        text-decoration: none;

        &:hover {
            font-weight: 600;
            padding-left: 2px;
        }

        &.active {
            font-weight: bold;
            color:#fff;
        }
    }
</style>