/**
 * Fonction utilitaire qui prend en paramètre une date au format ISO et retourne une chaîne de caractères représentant la date au format "jour/mois/année".
 * @param {Date} date - La date à formater.
 * @returns {string} - La date formatée.
 */
export default function formatDate(date) {
    const day = new Date(date).getDate();
    const formatDay = day < 10 ? '0' + day : day; 
    const month = new Date(date).getMonth() + 1;
    const formatMonth = month < 10 ? '0' + month : month; 
    const year = new Date(date).getFullYear();

    const dateFormat = formatDay + "/" + formatMonth + "/" + year;
    return dateFormat;
}