export async function load({ params }) {
    const khiettRes = await fetch(
        `https://fdnd.directus.app/items/person?fields=name,bio,nickname,birthdate,residency,fav_color,fav_hobby,fav_game,fav_movie,team_s13,id,mugshot_year2&filter[squads][squad_id][cohort][_eq]=2627&filter[name][_istarts_with]=khitam`
    )

    const khiettData = await khiettRes.json();
    console.log(khiettData.data)

    return {
        person: khiettData.data
    }
}