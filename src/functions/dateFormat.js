export default function formatDate(date) {
    const day = new Date(date).getDate();
    const formatDay = day < 10 ? '0' + day : day; 
    const month = new Date(date).getMonth() + 1;
    const formatMonth = month < 10 ? '0' + month : month; 
    const year = new Date(date).getFullYear();

    const dateFormat = formatDay + "/" + formatMonth + "/" + year;
    return dateFormat;
}