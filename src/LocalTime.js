function doDate()
{
    let date = "";
    

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const now = new Date();

    date += ` ${days[now.getDay()]}  ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
    return date
}

export default doDate

