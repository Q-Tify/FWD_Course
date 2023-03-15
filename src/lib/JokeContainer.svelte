<script lang="ts">
    import { onMount } from "svelte";

    const email = "/?email=a.rubtsov@innopolis.university";
    const apiUrl = "https://fwd.innopolis.app/api/hw2";
    const apiImg = "https://getxkcd.vercel.app/api/comic?num=";

    let src: string;
    let alt: string;
    let title: string;
    let date: Date;

    let isHidden: boolean = true;

    interface Joke {
        alt: string;
        day: string;
        img: string;
        link: string;
        month: string;
        news: string;
        num: number;
        safe_title: string;
        title: string;
        transript: string;
        year: string;
    }

    onMount(getImage);
    
    async function getId() {
        const res: Response = await fetch(apiUrl+email);
        let data: number = await res.json();
        return data;
    };

    async function getImage() {
        let returnedId: number = await getId();
        const res: Response = await fetch(apiImg+returnedId);
        const data: Joke = await res.json();
        
        isHidden = false;
        
        src = data.img;
        alt = data.alt;
        title = data.title;
        date = new Date(Number(data.year), Number(data.month)-1, Number(data.day));
    };
</script>

<div id="joke-container">
    {#if !isHidden}
    <img id="joke-img" src={src} alt={alt} >
    <div id="joke-img-title">{title}</div>
    <div id="joke-img-date">{date.toLocaleDateString()}</div>
    {/if}
</div>

<style>
img{
	height:100%;
	width:100%;
	margin:10px 0px 10px 0px;
}
#joke-container{
	display: flex;
 	flex-direction: column;
 	align-items: center;
    height: 100%;
}
#joke-img{
	width:400px;
	padding-top: 10px;	
	padding-bottom: 10px;
	margin:0px;
}
#joke-img-title{
	padding:10px 0px 10px 0px;
	font-size: 24px;
}
#joke-img-date{
	padding:0px 0px 10px 0px;
	font-size: 14px;
}
</style>