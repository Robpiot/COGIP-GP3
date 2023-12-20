/**
 * Fonction utilitaire qui prend une chaîne de caractères en paramètre et retourne la même chaîne avec la première lettre en majuscule.
 * @param {string} string - La chaîne à traiter.
 * @returns {string} - La chaîne avec la première lettre en majuscule.
 */
export default function toUppercase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}