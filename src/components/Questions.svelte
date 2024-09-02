<script>
   
    import QA from './QA.svelte';

    let currentQuestionId = null;

    function setCurrentQuestionId(id) {
        currentQuestionId = id;
    }

    function filterQuestion(cid, cquestions) {
        return cquestions.filter(question => cid === question.cid);
    }
</script>

<section class="cat">
    <div>
        {#each categories as category}
            <div>
                <h2 class="questions-category" id={category.u}>
                    {@html category.c }
                </h2>
                {#each filterQuestion(category.cid, questions) as question}
                    <QA {question} currentQuestionId={currentQuestionId} 
                        setCurrentQuestionId={setCurrentQuestionId}/>
                {/each}
            </div>
        {/each}
    </div>
</section>


<style type="text/scss">
    
    .questions-category {
        text-transform: uppercase;
        margin-bottom: 0;
        font-size: 0.9rem;
        margin-top: 40px;
        font-weight: 400;
    }
  
</style>