const diagrams = [...document.querySelectorAll('.mermaid')];

async function renderDiagrams() {
    try {
        const { default: mermaid } = await import('https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs');
        const tokens = getComputedStyle(document.documentElement);
        const color = name => tokens.getPropertyValue(name).trim();

        mermaid.initialize({
            startOnLoad: false,
            theme: 'dark',
            flowchart: { useMaxWidth: true, htmlLabels: true },
            themeVariables: {
                background: color('--color-surface'),
                primaryColor: color('--color-surface-raised'),
                primaryTextColor: color('--color-foreground'),
                lineColor: color('--color-text-muted'),
                arrowheadColor: color('--color-text-muted'),
                edgeLabelBackground: color('--color-surface')
            }
        });
        await mermaid.run({ nodes: diagrams });
    } catch (error) {
        console.warn('The diagram could not load; its text version remains available.', error);
    }
}

if (diagrams.length) {
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => {
            if (entries.some(entry => entry.isIntersecting)) {
                observer.disconnect();
                renderDiagrams();
            }
        }, { rootMargin: '400px' });
        diagrams.forEach(diagram => observer.observe(diagram));
    } else {
        renderDiagrams();
    }
}
