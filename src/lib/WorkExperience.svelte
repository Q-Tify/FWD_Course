<script lang="ts">
    import Job from './Job.svelte'
    import type {job} from '../assets/texts';
    export let title: string;
    export let jobs: job[];
</script>

<div id="work-experience-wrapper">
    <h2>{title}</h2>
    <div id="work-experience-container">
        {#each jobs as job}
            <Job place={job.place} position={job.position} responsibilities={job.responsibilities}></Job>
        {/each}
    </div>  
</div>

<style>
h2{
	color: green;
	font-size:18px;
	margin-bottom:10px;
	margin-top:20px;
}
#work-experience-container{
	display: flex;
 	flex-direction: column;
}
#work-experience-wrapper{
	margin:0px 30px 0px 20px;
}
</style>