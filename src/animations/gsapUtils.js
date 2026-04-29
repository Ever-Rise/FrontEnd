export async function safeKill(tl) {
    if (!tl) return;
    try {
        const mod = await import('gsap');
        tl.kill();
    } catch (e) {
        // ignore
    }
}

export async function tweenRef(target, props, options = {}) {
    const mod = await import('gsap');
    const gsap = mod.gsap || mod.default || mod;
    return gsap.to(target, { ...props, ...(options || {}) });
}
