<script lang="ts">
    export let title: string;
    export let items: string[];
</script>

<div class="skills">
    <h2>{title}</h2>
    <ul>
        {#each items as item}
            <li>{item}</li>
        {/each}
    </ul>
</div>

<style>
h2{
	color: green;
	font-size:18px;
	margin-bottom:10px;
	margin-top:20px;
}
.skills{
	display: block;
	margin-right: 10px;
}
ul{
	padding-left: 15px;
}
</style>