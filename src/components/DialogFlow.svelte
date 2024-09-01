<script>
    import { onMount } from 'svelte';
    import {store} from '../store.js'
    const Apper = '2da13dc9-4074-4b33-a4e2-cb37ae15aab0';
    const Spectrum = '35057f47-4a90-4abd-99f3-584d00bdd898';

    let agent = null;
    let projectId = null;


    onMount(()=>{
        if(platformId ===2){
            projectId ='igenapps-7068e'
            agent = Apper;
        }else{
            projectId ='igenappsspectrum-mewlus'
            agent = Spectrum;
        }
    })
</script>

{#if agent}
<df-messenger 
    chat-icon="/question3.png"
    intent="WELCOME"
    chat-title="iGenApps Chat Assistance"
    agent-id="{agent}"
    project-id="{projectId}"
    language-code="en"
    wait-open="true"
    >
</df-messenger>
{/if}

<style>
df-messenger {
        --df-messenger-bot-message: #878fac;
        --df-messenger-button-titlebar-color: #d7307e;
        --df-messenger-chat-background-color: #fafafa;
        --df-messenger-font-color: white;
        --df-messenger-send-icon: #878fac;
        --df-messenger-user-message: #479b3d;
    }

</style>