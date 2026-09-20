<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<script>
    import selfieImg from '$lib/assets/IMG_6255.webp';
    import goldenStars from '$lib/assets/Starss.svg';
    import macCover from '$lib/assets/MacCover.svg';
    import starDeco from '$lib/assets/StarrDeco.svg';
    import chessImg from '$lib/assets/Chess.svg';
    import booksImg from '$lib/assets/Bookss.svg';
    
    let {data} = $props()
    const person = $derived(data.person[0])

</script>
    <h1> Hii I'm {person.name}...</h1>
    <p>{person.bio}</p>
