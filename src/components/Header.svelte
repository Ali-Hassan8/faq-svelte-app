<script>
    import Logo from './Logo.svelte';
    import MenuToggle from './MenuToggle.svelte';
    import ThemeSwitch from './ThemeSwitch.svelte';

    let logoColor = 'bright';
    let pageScrolled = false;
    
    function updateLogo() {
        logoColor = logoColor === 'dark' ? 'bright' : 'dark';
    }

    // Applies scrolled class
    function headerScroll() {
        const fromTop = window.scrollY;
        if (
        (fromTop > 20 && pageScrolled === false) ||
        (fromTop <= 20 && pageScrolled === true)
        ) {
            pageScrolled = !pageScrolled;
        }
    }
</script>

<header class="header { pageScrolled ? 'header--scrolled': ''  }">

    <MenuToggle/>

    <!-- <Logo /> -->
    <nav class="nav">
        <ThemeSwitch on:theme-change={updateLogo} />
    </nav>
</header>

<style type="text/scss">
    @import "../assets/scss/_variables.scss";
    @import "../assets/scss/_mediaQueries.scss";
    .header {
        display: flex;
        justify-content: space-between;
        @include respond-above(sm) {
        justify-content: flex-end;
        z-index: 1;
        }
        align-items: center;
        position: fixed;
        top: 0;
        right: -12px;
        left: 0;
        z-index: 10;
        padding: 15px 30px;
        transition: padding 0.15s linear, background 0.15s linear,
        border-color 0.15s linear;
        will-change: padding, background;
        border-bottom: 1px solid transparent;

        @include respond-above(sm) {
            padding: 30px 30px 0 30px;
        }
        @include respond-below(sm) {
            background: var(--headerBg);
            border-color: var(--headerBorder);
            padding: 15px 30px 15px 20px;
        }
    }

    nav {
        display: flex;
    }
</style>