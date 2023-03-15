<script lang="ts">
    import type {socialMediaLink} from '../assets/texts';
    export let mediaLinks: socialMediaLink[];
</script>

<div class="skills">
    <div>
        {#each mediaLinks as link}
            <a id={link.id} href={link.href}>
                <div class="text-links">
                <div style="display:block;"><img src={link.iconLink} style="height:25px; width:25px; margin:0px;" alt="telegram"></div>
                <div style="display:block;margin-top:3px;margin-left:4px;">{link.text}</div>
                </div>
            </a>        
        {/each}
    </div>
</div>

<style>
.skills{
	display: block;
	margin-right: 10px;
}
.text-links{
	display: flex;
 	flex-direction: row;
}
a{
	text-decoration: none;
	color:black;
	padding:0px;
	margin:0px;
}
img{
	height:100%;
	width:100%;
	margin:10px 0px 10px 0px;
}
</style>