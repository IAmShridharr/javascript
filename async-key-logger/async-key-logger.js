const container = document.querySelector('.container')
const keyboardInput = document.querySelector('.keyboard-input')

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

// Focus on the input field to trigger the virtual keyboard on mobile
window.addEventListener('DOMContentLoaded', () => {
    keyboardInput.style.display = 'block';
    keyboardInput.focus();
});