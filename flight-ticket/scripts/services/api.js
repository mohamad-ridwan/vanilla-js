async function fetchData(url) {
    const controller = new AbortController();
    const { signal } = controller;

    try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        if (error.name === 'AbortError') {
            console.error('Fetch aborted');
        } else {
            console.error('Fetch error:', error);
        }
    }

    return {
        abort: () => controller.abort()
    };
}

export {
    fetchData
}