<script>
    import { fade} from 'svelte/transition';
    import {searchVal} from './../store.js'; 
    
    function search() {
        
        //const input = document.getElementById('faq-search');
        const filter = $searchVal.toUpperCase();
        // searchVal.toUpperCase();
        //input.value.toUpperCase();

        const question = document.querySelectorAll('div.question');
        
        const headings = document.querySelectorAll('h2');
        const noResultBlock = document.querySelector('#no-results');

        let i;
        let p;
        let block;

        const discarded = document.querySelectorAll(
            '.question[style="display: none;"]'
        ).length;



        for (i = 0; i < question.length; i += 1) {
            // Destructuring
            // [p] = question[i].querySelectorAll('p:first-of-type');
            // [block] = question[i].querySelectorAll('blockquote');
            // [k] = question[i].querySelectorAll('text');
            console.log(question);

            const q = questions.find(x=> x.u === question[i].getAttribute('data-id'));
            if (
                q && (
                    q.k.toUpperCase().indexOf(filter) > -1 ||
                    q.a.toUpperCase().indexOf(filter) > -1 ||
                    q.q.toUpperCase().indexOf(filter) > -1)
                    
                // (p && p.innerHTML.toUpperCase().indexOf(filter) > -1) ||
                // (block && block.innerHTML.toUpperCase().indexOf(filter) > -1) ||
                // (k && k.innerHTML.toUpperCase().indexOf(filter) > -1) 
            ) {
                
                question[i].style.display = '';
                headings.forEach(heading => {
                heading.style.display = '';
                });
            } else {
                
                question[i].style.display = 'none';
                headings.forEach(heading => {
                heading.style.display = 'none';
                });
            }
        }

        // Hide/show no-results block
        if (discarded === question.length) {
            noResultBlock.style.display = 'flex';
        } else if ($searchVal === '') {
            noResultBlock.style.display = 'none';
        } else {
            noResultBlock.style.display = 'none';
        }
}

function resetSearch(){
    $searchVal = ''; 
    console.log($searchVal);
    search();
}
</script>

<div id="input-wrapper">
    <svg class="search-icon" width="22" height="22" viewBox="0 0 474 473">
        <g id="Screens" stroke="none" stroke-width="1" fill-rule="evenodd">
            <path d="M466.011122,429.655619 C475.773027,439.419928 475.771078,455.249053 466.006769,465.010958 C456.242459,474.772863 440.413335,474.770913 430.65143,465.006604 L324.224456,358.553415 C289.266382,385.980548 246.080517,401.211488 200.5625,401.211488 C89.7941125,401.211488 0,311.39646 0,200.605744 C0,89.8150278 89.7941125,0 200.5625,0 C311.330887,0 401.125,89.8150278 401.125,200.605744 C401.125,245.587547 386.261773,288.299444 359.438529,323.056761 L466.011122,429.655619 Z M200.5625,351.211488 C283.71503,351.211488 351.125,283.783842 351.125,200.605744 C351.125,117.427646 283.71503,50 200.5625,50 C117.40997,50 50,117.427646 50,200.605744 C50,283.783842 117.40997,351.211488 200.5625,351.211488 Z" id="Combined-Shape" fill="#000000" fill-rule="nonzero"></path>
        </g>
    </svg>
    
    <input
        id="faq-search"
        class="tfp_search"
        type="text"
        placeholder="Search"
        on:keyup={search}
        on:focus={search}
        bind:value={$searchVal}
    />
    {#if $searchVal.length > 0}
        <svg  class='delete' 
        on:click={resetSearch}
        in:fade
        out:fade 
        width="22" height="22" viewBox="0 0 382 382">
            <g id="Screens" stroke="none" stroke-width="1" fill-rule="evenodd">
                <path d="M191.280039,172.066836 L117.606602,98.3933983 C111.748737,92.5355339 102.251263,92.5355339 96.3933983,98.3933983 C90.5355339,104.251263 90.5355339,113.748737 96.3933983,119.606602 L170.066836,193.280039 L96.3933983,266.953477 C90.5355339,272.811341 90.5355339,282.308816 96.3933983,288.16668 C102.251263,294.024544 111.748737,294.024544 117.606602,288.16668 L191.280039,214.493243 L264.953477,288.16668 C270.811341,294.024544 280.308816,294.024544 286.16668,288.16668 C292.024544,282.308816 292.024544,272.811341 286.16668,266.953477 L212.493243,193.280039 L286.16668,119.606602 C292.024544,113.748737 292.024544,104.251263 286.16668,98.3933983 C280.308816,92.5355339 270.811341,92.5355339 264.953477,98.3933983 L191.280039,172.066836 Z M190.5625,381.211488 C85.3169103,381.211488 0,295.873563 0,190.605744 C0,85.3379253 85.3169103,0 190.5625,0 C295.80809,0 381.125,85.3379253 381.125,190.605744 C381.125,295.873563 295.80809,381.211488 190.5625,381.211488 Z" id="Oval-2" fill="#000000" fill-rule="nonzero"></path>
            </g>
        </svg>
    {/if}
</div>

<style type="text/scss">
    @import "../assets/scss/_variables.scss";
    #input-wrapper {
        position: relative;
        z-index: 1;

        input {
            background: var(--cardBgColor);
            color: rgba($color: #{var(--textColor)}, $alpha: 0.5);
            border-color: var(--sidebarBorder);

            position: relative;
            width: 100%;
            padding: 15px;
            padding-left: 45px;
            padding-right: 40px;
            border-radius: 10px;
            font-size: 1rem;
            margin-bottom: 0;
            border: none;
            background-image: none;
            -webkit-box-shadow: none;
            -moz-box-shadow: none;
            box-shadow: none;

            &:focus {
            color: var(--textColor);
            outline: none;
            }
        }

        .search-icon {
            fill: #757575;
            position: absolute;
            z-index: 1;
            top: 15px;
            left: 14px;
        }

        svg path{
            fill: #757575;
        }
        .delete{
            position: absolute;
            z-index: 1;
            top: 13px;
            right: 11px;
            fill: #757575;
            cursor: pointer;
            -webkit-tap-highlight-color: transparent;

        }
        
    }
    
</style>