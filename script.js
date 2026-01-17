const prompts = [
    {
        title: "Neon Cyberpunk City",
        description: "A futuristic cityscape drenched in neon rain, featuring towering skyscrapers and flying cars.",
        code: "cyberpunk city, neon lights, rain, reflections, futuristic, 8k, highly detailed, cinematic lighting"
    },
    {
        title: "Ethereal Forest Spirit",
        description: "A mystical deer with glowing antlers wandering through a foggy, enchanted ancient forest.",
        code: "ethereal spirit deer, glowing antlers, ancient forest, fog, mystical, fantasy, soft lighting, masterpiece"
    },
    {
        title: "Minimalist Coffee Shop",
        description: "Interior design shot of a clean, white-themed coffee shop with natural wood accents and sunlight.",
        code: "minimalist coffee shop, interior design, white and wood, morning sunlight, clean lines, photorealistic, 4k"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');

    prompts.forEach((item, index) => {
        const card = document.createElement('article');
        card.className = `card delay-${index + 1}`;
        
        card.innerHTML = `
            <div class="card-content">
                <h2 class="card-title">${item.title}</h2>
                <div class="prompt-block">${item.code}</div>
                <p class="card-description">${item.description}</p>
            </div>
            <button class="copy-btn" aria-label="Copy prompt to clipboard">
                <span class="btn-text">Copy Prompt</span>
            </button>
        `;

        const btn = card.querySelector('.copy-btn');
        const btnText = card.querySelector('.btn-text');
        const code = item.code;

        btn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(code);
                
                // Feedback animation
                btn.classList.add('copied');
                const originalText = btnText.innerText;
                btnText.innerText = 'Copied!';
                
                setTimeout(() => {
                    btn.classList.remove('copied');
                    btnText.innerText = originalText;
                }, 2000);
                
            } catch (err) {
                console.error('Failed to copy: ', err);
                btnText.innerText = 'Error';
            }
        });

        gallery.appendChild(card);
    });
});
