<script lang="ts">
    export let title: string;
    export let text: string;
</script>

<div id="bio-info">
    <h1>{title}</h1>
    <div>{text}</div>
</div>

<style>
#bio-info{
	margin:0px 30px 0px 20px;
}
h1{
	margin-bottom: 5px;
	margin-top: 15px;
}
</style>