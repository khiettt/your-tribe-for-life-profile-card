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

