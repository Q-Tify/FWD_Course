<script lang="ts">
    export let href: string;
    export let alt: string;
</script>

<div class="skills">
    <img src={href} alt={alt}>
</div>

<style>
.skills{
	display: block;
	margin-right: 10px;
}
img{
	height:100%;
	width:100%;
	margin:10px 0px 10px 0px;
}
</style>