<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<script>
    let {data} = $props()
    const person = $derived(data.person[0])

</script>
    <h1> Hii I'm {person.name}...</h1>
    <p>{person.bio}</p>
