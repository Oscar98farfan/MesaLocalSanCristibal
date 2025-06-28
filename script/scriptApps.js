function changeView(event, type) {
    const frame = document.getElementById('appframe');
    document.querySelectorAll('.device-controls a').forEach(el => el.classList.remove('active'));
    event.target.closest('a').classList.add('active');

    if (type === 'mobile') {
        frame.src = "https://www.appsheet.com/start/1d1614fc-6d1b-47f1-bde2-94d711d48e26?platform=mobile";
    }
}

function openModal(type) {
    document.getElementById(`${type}Modal`).style.display = 'flex';
}

function closeModal(type) {
    document.getElementById(`${type}Modal`).style.display = 'none';
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        document.querySelectorAll('.modal').forEach(modal => modal.style.display = 'none');
    }
});