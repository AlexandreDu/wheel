export function ellipsis(str, max) {

    if(typeof str !== 'string') return
    if(str.length > max) str = str.substring(0, max) + '...'

    return str

}