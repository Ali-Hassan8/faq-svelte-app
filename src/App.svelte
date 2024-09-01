<script>
  import {onMount} from 'svelte';
  import Header from './components/Header.svelte';
  import SideBar from './components/SideBar.svelte';
  import Questions from './components/Questions.svelte';
  import Search from './components/Search.svelte';
  import Support from './components/Support.svelte';
  import {store,searchVal} from './store.js' 
  
  import DialogFlow from './components/DialogFlow.svelte';


  onMount(()=>{

    if($store.state.languageCode === "en"){
      console.log('English, enable chat');
      store.toggleChat();
    }
    const sinput =document.getElementById(
        'faq-search'
    )
    if(document.location.hash && document.location.hash.length > 0){
      console.log('has hash')
      console.log(document.location.hash);
      
      const s = document.location.hash.split("#")[1];
      const q = questions.find(x=> x.u === s);
  
      $searchVal = q.q;
      sinput.focus();
      
    }

    if(selectedItem){
      const q = questions.find(x=> x.u === selectedItem.Url);
      $searchVal = q.q;
      sinput.focus();
    }
  })
</script>

<div id="app" class="{
    $store.state.chatOpen ? 'chat-is-open' : ''
  }">
    <Header />
    <SideBar/>
    <main
      class="main {
        $store.state.sidebarOpen ? 'main--sidebar-is-open':'' 
      }"
    >
      <div class="wrapper">
        <Search />
        <Questions/>
        <blockquote id="no-results">
          No results
        </blockquote>
      </div>
    </main>
    {#if $store.state.chatOpen}
      <DialogFlow />
    {:else}
      <Support />
    {/if}
  </div>

<style type="text/scss">
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
    @import "./assets/scss/_variables.scss";
    @import "./assets/scss/_mediaQueries.scss";
  #app {
    overflow-x: hidden;
    min-height: 100vh;
    color: var(--text-color);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 60px;
    background: var(--mainBg);
    margin: 0;
    padding: 0;
    line-height: 1.7;
    // transition: background 0.15s ease-in-out, color 0.15s ease-in-out;
    transition: all 0.15s linear;
  }

  .main {
    //max-width: 1200px;
    .wrapper {
      border-radius: 21px;
      margin-right: auto;
      margin-left: auto;
      background: var(--mainBg);

      @include respond-above(md) {
        //max-width: 600px;
      }
      @include respond-below(sm) {
        border: none;
        padding: 20px 15px;
      }

      h1 {
        display: none;
      }
    }
    background: var(--mainBg);
    color: var(--textColor);

    border-color: var(--gray);
    @include respond-above(sm) {
      padding: 100px 30px 30px;
      transform: translateX(300px);
      width: calc(100% - 300px);
    }
    &--no-sidebar {
      transform: translate(0);
      margin: 0 auto;
      width: 100%;
      max-width: 1400px;
    }

    &--sidebar-is-open {
      opacity: 0.5;
      filter: blur(3px);
      transition: filter 0.15s ease-in-out, opacity 0.15s ease-in-out;
    }

  

    // --- MAIN
    @media (min-width: 992px) {
      padding: 60px 80px 30px;
    }

    @media (max-width: 767px) {
      padding: 5rem 0 0;
    }

    :global(h1, h2, h3, h4) {
      font-weight: 700!important;
      line-height: 1.9;
      color: #777777;
    }

    :global(blockquote,
    pre,
    & .markdown img) {
      border-color: shade(black, 10%);
    }
    & #input-wrapper {
      svg {
        fill: #757575;
      }
    }
  }

  // ----- GLOBALS
 

  :global(h1) {
    margin-top: 0;

    @include respond-above(md) {
      font-size: 3rem;
    }
  }

  :global(a) {
    color: var(--primary);
  }

  :global(blockquote,
  pre) {
    background: var(--cardBgColor);
    margin: 0;
    padding: 15px 15px;
    border-radius: 20px;
    border: 1px solid transparent !important;
    margin-bottom: 30px;
    line-height: 1.35;
    p {
      margin: 15px auto;
    }
    img {
      max-width: 100%;
    }
  }

  :global(.topic.active) {
    display: none;
  }

  :global(#no-results) {
    display: none;
    height: 5rem;
    justify-content: center;
    align-items: center;
    margin: 0;
    border-radius: 12px;
  }
</style>