async function getPlayerInfo() {
    const playerTag = document.getElementById('playerTag').value.trim()
    const sanitizedTag = playerTag.replace('#', '%23') // Encode the '#' character
    const url = `http://localhost:3000/player/${ sanitizedTag }`

    const output = document.getElementById('output')
    output.innerHTML = 'Loading...'

    try {
        const response = await fetch(url)
        
        if (!response.ok) {
            throw new Error(`Error: ${ response.status } ${ response.statusText }`)
        }

        const playerData = await response.json()
        displayPlayerInfo(playerData)
    } catch (error) {
        output.innerHTML = `<div class="error">${ error.message }</div>`
    }
}

function displayPlayerInfo(playerData) {
    const output = document.getElementById('output')
    output.innerHTML = `
        <div><strong>Name:</strong> ${ playerData.name }</div>
        <div><strong>Tag:</strong> ${ playerData.tag }</div>
        <div><strong>Town Hall Level:</strong> ${ playerData.townHallLevel }</div>
        <div><strong>Trophies:</strong> ${ playerData.trophies }</div>
        <div><strong>Experience Level:</strong> ${ playerData.expLevel }</div>
        <div><strong>Clan:</strong> ${ playerData.clan ? playerData.clan.name : 'No Clan' }</div>
        <div><strong>League:</strong> ${ playerData.league ? playerData.league.name : 'No League' }</div>
    `
}