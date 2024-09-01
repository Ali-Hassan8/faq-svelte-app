<script>

    import {searchVal} from './../store.js'; 

    export let question

    let showAnswer = false;

    function setQuestion(question){
        document.location.hash = question.u;
        // const sinput =document.getElementById(
        // 'faq-search'
        // )
        $searchVal = question.q;
        //sinput.value = question.q;  
        console.log($searchVal);  
        //sinput.focus();

        showAnswer =true;
    }

</script>

<div
class="question"
data-id={question.u}
>
    
    <p class="question" on:click="{() => setQuestion(question)}">    
        <strong>{@html question.q }</strong>
    {#if $searchVal === question.q || showAnswer}
        <svg on:click|stopPropagation={()=>{showAnswer = !showAnswer;$searchVal=''}} class="plus" enable-background="new 0 0 50 50" viewBox="0 0 50 50">
            <rect fill="none" height="50" width="50"/>
            <line fill="none" stroke="#d7307e" stroke-miterlimit="10" stroke-width="4" x1="9" x2="41" y1="25" y2="25"/>
        
        </svg>
    {:else}
        <svg on:click|stopPropagation={()=>{showAnswer = !showAnswer}} class="plus" enable-background="new 0 0 50 50" viewBox="0 0 50 50">
            <rect fill="none" height="50" width="50"/>
            <line fill="none" stroke="#d7307e" stroke-miterlimit="10" stroke-width="4" x1="9" x2="41" y1="25" y2="25"/>
            <line fill="none" stroke="#d7307e" stroke-miterlimit="10" stroke-width="4" x1="25" x2="25" y1="9" y2="41"/>
        </svg>
    {/if}
    </p>

    <blockquote class={$searchVal === question.q ? 'showAnswer' : showAnswer ? 'showAnswer':''}>{@html question.a}</blockquote>

    
    <text class="keywords" style="display:none">{question.k}</text>
</div>

<style>
    div.question{
        border-bottom: #eee solid 1px;
        margin: 5px;
        
    }
    .question > p:first-of-type {
        font-size: 1.2rem;
        line-height: 1.5rem;
        margin-bottom: 15px;
        margin-top: 15px;
        color: var(--textColor);
        cursor: pointer;
    }
    p.question{
        display: flex;
        align-items: center;
    }
    strong {
        display: block;
        font-weight: 900;
        width: calc(100% - 25px);
    }
    blockquote {
        word-break: break-word;
        display:none;

    }
    blockquote.showAnswer{
        display: block;
    }
    .plus{
        width: 20px;
        height: 20px;
        float: right;
        -webkit-tap-highlight-color: transparent;
        cursor: pointer;
        margin:5px;
    }
    :global(blockquote img){
        max-width:80%;
    }
</style>