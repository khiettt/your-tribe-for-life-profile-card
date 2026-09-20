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
            <p class="p-folder">Nickname: {person.nickname}</p>
            <p class="p-folder">Birthdate: {person.birthdate}</p>
            <p class="p-folder">Born and raised in {person.residency}</p>
            <p class="p-folder"> Hobbies: {person.fav_hobby} and {person.fav_game}</p>
            <p class="p-folder">Favorite movie: {person.fav_movie}</p>
            
        </details>
    
        <details class="folder folder--projects">
            <summary>Projects</summary>
            <p class="p-folder">Semster 1</p>
            <a href="https://khiettt.github.io/your-tribe-profile-card/">Profilecard sprint 1</a>
            <a href="https://khiettt.github.io/your-tribe-squad-page/" >Squadpage Sprint 1</a>
            <a href="https://khiettt.github.io/the-client-website/"> Buurtcampus Sprint 2</a>
            <a href="https://khiettt.github.io/the-client-website/">Buurtcampus Sprint 4</a>
            <a href="https://khiettt.github.io/the-startup-responsive-interactive-website/">Werktijden.nl Sprint 6</a>

            <p class="p-folder">Semster 2</p>
            <a href="https://connect-your-tribe-profile-card-5f3c.onrender.com">Profilecard sprint 7</a>
            <a href="https://connect-your-tribe-squad-page-yta5.onrender.com">Squadpage sprint 7</a>
            <a href="https://server-side-rendering-server-side-website-7oew.onrender.com">Milledoni sprint 8</a>
            <a href="https://user-experience-enhanced-website-zv3j.onrender.com">Milledoni sprint 10</a>
            <a href="https://proof-of-concept-khiettt-jebq.onrender.com">Tweakers sprint 12</a>

        </details>
    
        <details class="folder folder--skills">
        <summary>Skills</summary>
        <p class="p-folder">HTML</p>
        <p class="p-folder">CSS</p>
        <p class="p-folder">JS</p>

        </details>
    </div>
</main>

<style>
    .golden-stars{
        width: 30px;
        position: relative;
        top: -60px;
        margin-left: 10px;
    }
    .div-mac-cover{
        display: flex;
        justify-content: flex-end;

    }
    .mac-cover{
        max-width: 20%;
        position: absolute;
        transform: translateY(-2.5rem);
        right: -20px;
        margin-top: 1lh;
    }
    .div-star-deco{
        display: flex;
        justify-content: flex-end;
    }
    .star-deco{
        max-width: 30%;
        position: relative;
        position: absolute;
        transform: translateY(-11.5em);
        right: -37px;
    }
    .div-chess{
        display: flex;
        justify-content: flex-end;
    }
    .chess-img{
        position: absolute;
        right: -20px;
        transform: translateY(-8.5rem);
        max-width: 20%;
    }
    .div-books-img{
        display: flex;
    }
    .book-img{
        max-width: 20%;
        position: relative;
        left: -25px;
        bottom: -25px;
    }
    main{
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    .img-selfie{
        display: block;
        margin: 0 auto;
        margin-top: -80px;
        border-radius: 50%;
        border: 5px solid var(--color-background);
        width: 120px;
        height: 120px;
        object-fit: cover;

        p{
            z-index: 1;
        }
    }
    .p-folder{
        font-family: 'Bebas Neue';
        font-size: clamp(1rem, 0.9rem + 1vw, 1.5rem);
        color: var(--color-burgundy);
        margin-left: 10px;
        max-width: 40ch;
        border: 1px solid var(--color-background);
        background-color: var(--color-background);
        border-radius: 10px;
        padding: 10px;
        text-align: center;
        text-decoration: none;

        @media (min-width: 365px){
            max-width: 60ch;
        }
    }
    a{
        display: flex;
        flex-direction: column;
        column-gap: 20px;
        font-family: 'Bebas Neue';
        font-size: clamp(1rem, 0.9rem + 1vw, 1.5rem);
        margin-left: 10px;
        border: 1px solid var(--color-background);
        border-radius: 10px;
        background-color: var(--color-background);
        color: var(--color-burgundy);
        padding: 5px;
        text-align: center;
        text-decoration: none;
        margin: 15px;
        width: 140px;
    }
    main > details:first-of-type{
        margin-top: 40px;
    }
    .stack-folder{
        margin-left: 5px;
        margin-right: 5px;
        margin-top: 65%;
    }
    .folder{
        position: relative;
        margin-top: -148px;
    }
    
    .folder--about { z-index: 1; }
    .folder--projects { z-index: 2; }
    .folder--skills { z-index: 3; }

    .folder[open]{
        z-index: 10;
    }

    summary{
        display: inline-flex;
        align-items: center;
        width: fit-content;
        min-width: 140px;
        padding: 10px 24px;
        border-radius: 12px 12px 0 0;
        color: var(--color-background);
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.02em;
        cursor: pointer;
        list-style: none;
        position: relative;
        z-index: 2;
    }

    summary::marker{
        display: none;
        content: none;
    }

    .folder--about summary {background-color: var(--color-burgundy);} 
    .folder--projects summary {background-color: var(--color-dark-brown);}
    .folder--skills summary {background-color: var(--color-blush);}

    .folder--projects{
        text-align: right;
    }
    .folder--projects::details-content{
        text-align: left;
    }

    @supports(selector(::details-content)) {
        .folder::details-content {
            padding: 20px;
            min-height: 180px;
            border-radius: 0 12px 12px 12px;
            overflow: clip;
            color: var(--color-background);
            transition: height 0.3s ease, content-visibility 0.3s;
        }
    }

    .folder--about::details-content    { background-color: var(--color-burgundy); }
    .folder--projects::details-content { background-color: var(--color-dark-brown); }
    .folder--skills::details-content   { background-color: var(--color-blush); }

</style>