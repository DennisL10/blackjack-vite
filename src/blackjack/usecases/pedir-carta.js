
/**
 * @param {Array<String>} deck Es un are¿reglo de string
 * @returns {String} Retorna la carta del deck
 */
export const pedirCarta = (deck) => {


    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}