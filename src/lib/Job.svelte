<script lang="ts">
    export let place: string;
    export let position: string;
    export let responsibilities: string;
</script>

<div class="place-of-work">
    <h3>{place}</h3>
    <div class="job">{position}</div>
    <div class="experience">{responsibilities}</div>
</div>

<style>
.place-of-work{
    display: block;
    margin-bottom: 20px;
}
h3{
	margin-bottom: 0px;
	margin-top: 0px;
}
.job{
	font-weight: bold;
}
</style>