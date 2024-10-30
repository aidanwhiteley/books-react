import purify from "dompurify";

/**
 * Generally, this website relies on React escaping text input by users when the text is later displayed.
 * That's fine - a user who sees their <b>Bold text</b> rendered with the actual tags displayed
 * will realise that HTML formatting isn't supported and remove the tags.
 * 
 * However, where we are pulling text from other sources (Google Books in this case) 
 * which may have some (hopefully limited) HTML tags in it, we do need to ensure that text 
 * isn't opening up XSS possibilities.
 */
export function sanitizeHtml(text: string) {

    return purify.sanitize(text, { USE_PROFILES: { html: true } });
}