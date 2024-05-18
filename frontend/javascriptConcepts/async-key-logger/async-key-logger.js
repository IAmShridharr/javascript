const container = document.querySelector('.container')

window.addEventListener('keydown', (e) => {
    container.innerHTML = `
    <table border = "1" style = "color: white; margin-left: 45%;">
        <thead>
            <tr>
                <th>Key</th>
                <th>KeyCode</th>
                <th>Code</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${e.key === " " ? "space" : e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </tbody>
    </table>
    `
})