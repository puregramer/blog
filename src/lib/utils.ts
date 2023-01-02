export async function loadFonts(name: string, url: string) {
    const font = new FontFace(name, `url(${url})`);
    await font.load();
    document.fonts.add(font);
}