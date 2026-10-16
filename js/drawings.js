(() => {
    const viewer = document.querySelector('.drawing-viewer');
    if (!viewer || typeof viewer.showModal !== 'function') return;
    const image = viewer.querySelector('.drawing-viewer-image');
    const caption = viewer.querySelector('#viewer-caption');
    const original = viewer.querySelector('.viewer-original');
    document.querySelectorAll('[data-drawing]').forEach(link => {
        link.addEventListener('click', event => {
            if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
            event.preventDefault();
            image.src = link.href;
            image.alt = link.querySelector('img').alt;
            caption.textContent = document.getElementById(link.getAttribute('aria-labelledby')).textContent;
            original.href = link.href;
            viewer.showModal();
        });
    });
    viewer.querySelector('.viewer-close').addEventListener('click', () => viewer.close());
    viewer.addEventListener('click', event => {
        if (event.target !== viewer) return;
        const bounds = viewer.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right ||
            event.clientY < bounds.top || event.clientY > bounds.bottom) viewer.close();
    });
    viewer.addEventListener('close', () => image.removeAttribute('src'));
})();
