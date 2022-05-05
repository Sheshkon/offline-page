if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/offline-page/js/sw.js', { scope: '/offline-page/js/' })
        .then(function() { console.log("Service Worker Registered"); });
}

const el = document.getElementById('header');
el.style.color = 'red';