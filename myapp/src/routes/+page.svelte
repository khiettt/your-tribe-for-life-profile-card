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

<header>
    <div class="red-header"></div>
    <img src="{goldenStars}" alt="selfie" class="golden-stars">
</header>

<main>
    <img src="{selfieImg}" alt="selfie" class="img-selfie">
    <div class="div-chess">
        <img src="{chessImg}" alt="selfie" class="chess-img">
    </div>
    
    <h1> Hii I'm {person.name}...</h1>
    <p>{person.bio}</p>

    <div class="div-mac-cover">
        <img src="{macCover}" alt="selfie" class="mac-cover">
    </div>

    <div class="div-books-img">
        <img src="{booksImg}" alt="selfie" class="book-img">
    </div>
    
    
    <div class="stack-folder">
        <div class="div-star-deco">
            <img src="{starDeco}" alt="selfie" class="star-deco">
        </div>    
        <details class="folder folder--about">
            <summary>About me</summary>
            
        </details>
    
        <details class="folder folder--projects">
            <summary>Projects</summary>

        </details>
    
        <details class="folder folder--skills">
        <summary>Skills</summary>
        </details>
    </div>
</main>

