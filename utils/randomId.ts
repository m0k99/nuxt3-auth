export function randomId(c='id_') {
    return c.endsWith('_') ? c : c + '_' + Math.random().toString(36).substring(2, 9);
}
