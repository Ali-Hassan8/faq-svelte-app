<script>
    import { fade} from 'svelte/transition';
    import { elasticOut } from 'svelte/easing';
    import { MenuIcon, XIcon } from 'svelte-feather-icons';
    import {store} from '../store.js'

    function toggleSidebar() {
        store.toggleSidebar();
    }
    function spin(node, { duration }) {
		return {
			duration,
			css: t => {
				const eased = elasticOut(t);
				return `
					transform: rotateZ(-180deg);
					`
			}
		};
	}
</script>

<button
    on:click={()=>toggleSidebar()}
    class="toggle"
    aria-label="Toggle the sidebar"
    >
    {#if !$store.state.sidebarOpen}
        <span in:fade={250}>
            <MenuIcon size="24" class="open" />
        </span> 
    {:else}
       <span in:fade={250}>
            <XIcon size="24" class="close" />
        </span> 
    {/if}
</button>

<style type="text/scss">
    @import "../assets/scss/_variables.scss";
    @import "../assets/scss/_mediaQueries.scss";
    button {
        background: none;
        border: 0;
        padding: 0;
        transition: color 0.15s ease-in-out;
        cursor: pointer;
        width: 48px;
        height: 48px;
        position: relative;

        @include respond-above(sm) {
            display: none;
        }

        &:focus {
            outline: none;
        }
        color: var(--textColor);
    }

    svg {
        position: absolute;
        top: 12px;
        left: 12px;
    }

    .toggle-enter-active,
    .toggle-leave-active {
        transition: transform 0.25s ease-in-out, opacity 0.25s ease-in-out;
    }
    .toggle-enter, .toggle-leave-to /* .fade-leave-active below version 2.1.8 */ {
        transform: rotateZ(-180deg);
        opacity: 0;
    }
</style>