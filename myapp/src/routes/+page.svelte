<script>
    import selfieImg from '$lib/assets/IMG_6255.webp';
    import goldenStars from '$lib/assets/Starss.svg';
    import macCover from '$lib/assets/MacCover.svg';
    import chessImg from '$lib/assets/Chess.svg';
    import booksImg from '$lib/assets/Bookss.svg';
    
    let {data} = $props()
    const person = $derived(data.person[0])
</script>

<header>
    <div class="red-header"></div>
    <img src="{goldenStars}" alt="" class="golden-stars">
</header>

<main>
    <img src="{selfieImg}" alt="Khitam's Selfie" class="img-selfie">
    <div class="decoration-chess">
        <img src="{chessImg}" alt="" class="chess-img">
    </div>
    
    <h1> Hii I'm {person.name}...</h1>
    <p>{person.bio}</p>

    <div class="decoration-mac-cover">
        <img src="{macCover}" alt="" class="mac-cover">
    </div>

    <div class="decoration-books-img">
        <img src="{booksImg}" alt="" class="book-img">
    </div>
    
    
    <div class="stack-folder"> 
        <details class="folder folder--about">
            <summary>About me</summary>
            <p class="about-me">Nickname: {person.nickname}</p>
            <p class="about-me">Birthdate: {person.birthdate}</p>
            <p class="about-me">Born and raised in {person.residency}</p>
            <p class="about-me"> Hobbies: {person.fav_hobby} and {person.fav_game}</p>
            <p class="about-me">Favorite movie: {person.fav_movie}</p>
        </details>
    
        <details class="folder folder--projects">
            <summary>Projects</summary>

            <h3>Semester 1</h3>
            <ul>
                <li><a href="https://khiettt.github.io/your-tribe-profile-card/">Profilecard sprint 1</a></li>
                <li><a href="https://khiettt.github.io/your-tribe-squad-page/">Squadpage Sprint 1</a></li>
                <li><a href="https://khiettt.github.io/the-client-website/">Buurtcampus Sprint 2</a></li>
                <li><a href="https://khiettt.github.io/the-client-website/">Buurtcampus Sprint 4</a></li>
                <li><a href="https://khiettt.github.io/the-startup-responsive-interactive-website/">Werktijden.nl Sprint 6</a></li>
            </ul>

            <h3>Semester 2</h3>
            <ul>
                <li><a href="https://connect-your-tribe-profile-card-5f3c.onrender.com">Profilecard sprint 7</a></li>
                <li><a href="https://connect-your-tribe-squad-page-yta5.onrender.com">Squadpage sprint 7</a></li>
                <li><a href="https://server-side-rendering-server-side-website-7oew.onrender.com">Milledoni sprint 8</a></li>
                <li><a href="https://user-experience-enhanced-website-zv3j.onrender.com">Milledoni sprint 10</a></li>
                <li><a href="https://proof-of-concept-khiettt-jebq.onrender.com">Tweakers sprint 12</a></li>
            </ul>

        </details>
    
        <details class="folder folder--skills">
        <summary>Skills</summary>
            <ul class="skills-list">
                <li class="list-folder">HTML</li>
                <li class="list-folder">CSS</li>
                <li class="list-folder">JS</li>
                </ul>
        </details>
    </div>
</main>

<style>
    .golden-stars{
        width: 30px;
        position: relative;
        top: -60px;
        margin-left: 10px;

        animation: twinkle 2.5s ease-in-out infinite;
    }
    @keyframes twinkle {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.6; }
    }

    .decoration-mac-cover{
        display: flex;
        justify-content: flex-end;
        position: relative;

    }
    .mac-cover{
        position: absolute;
        top: 0;
        right: 0;
        max-width: 20%;
        height: auto;
    }
    .decoration-chess{
        display: flex;
        justify-content: flex-end;
        position: relative;
    }
    .chess-img{
        position: absolute;
        bottom: 60px;
        max-width: 20%;
        margin-right: 0.3rem;

        &:hover{
            transform: rotate(-360deg) scale(1.05);
            transition: transform 1s ease-in-out;
        }
    }
    .decoration-books-img{
        display: flex;
    }
    .book-img{
        position: relative; 
        left: -25px;
        bottom: -25px;
        max-width: 20%;
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
    }
    .about-me{
        color: var(--color-background);
    }
    .list-folder{
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
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }
    h3{
        font-size: var(--font-size-h3);
        font-family: 'Bebas Neue';
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
        margin-top: 2rem;
    }
    .folder{
        position: relative;
    }
    .folder:not(:first-of-type){
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
        }
    }

    .folder--about::details-content    { background-color: var(--color-burgundy); }
    .folder--projects::details-content { background-color: var(--color-dark-brown); }
    .folder--skills::details-content   { background-color: var(--color-blush); }
</style>