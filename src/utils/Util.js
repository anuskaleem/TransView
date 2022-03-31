export const formatDate = (date) => {
    let dt = new Date(date);
    let month = (dt.getMonth()+1).toString();
    let day = dt.getDate().toString();

    if(Number(day) < 10) {
        day = "0"+day.toString();
    }
    if(Number(month) < 10) {
        month = "0"+month.toString();
    }

    return dt.getFullYear()+"-"+month+"-"+day;
}