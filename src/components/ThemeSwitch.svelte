<script>

    import { fade} from 'svelte/transition';
    import { MoonIcon, SunIcon } from 'svelte-feather-icons';

    let theme = 'bright';
    setTheme();
    
    function setTheme() {
        
        const body = document.querySelector('body');

        if (localStorage.getItem('theme') === null) {
            localStorage.setItem('theme', 'bright');
            theme = 'bright';
        }

        body.classList.add(localStorage.getItem('theme'));
        theme = localStorage.getItem('theme');
    }

    async function toggleTheme() {
        const body = document.querySelector('body');

        if (body.classList.contains('dark')) {
            localStorage.setItem('theme', 'bright');
            body.classList.remove('dark');
            body.classList.add('bright');
            theme = 'bright';
        } else {
            localStorage.setItem('theme', 'dark');
            body.classList.remove('bright');
            body.classList.add('dark');
            theme = 'dark';
        }
        console.log(theme);
        //dispatch
        //this.$emit('theme-change');
    }
</script>

<button
    id="themeSwitch"
    on:click={()=>toggleTheme()}
    aria-label="Switch theme between light and dark"
    >
    {#if theme === 'bright'}
        <span in:fade={250}>
            <MoonIcon size="24" class="moon" />
        </span>
    {:else}
        <span in:fade={250}>
            <SunIcon size="24" class="sun" />
        </span>
    {/if}
</button>


<style type="text/scss">
    @import "../assets/scss/_variables.scss";
    button {
        background: none;
        border: 0;
        padding: 0;
        transition: color 0.15s ease-in-out;
        cursor: pointer;
        width: 48px;
        height: 48px;
        position: relative;

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

    .theme-anim {
        transition: transform 0.25s ease-in-out, opacity 0.25s ease-in-out;
        opacity : 1;
    }
    .animStart{
        transform: translateY(20px) scale(0.5);
        opacity: 0;
    }
</style>