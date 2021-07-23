
export const getMonthName = (month) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[month]
};

export const getWeekName = (week) => {
    const weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weeks[week];
};

export const getFormattedDate = (date) => {
    // const date = new Date();
    const [month, day, year, week] = [date.getMonth(), date.getDate(), date.getFullYear(), date.getDay()];
    // console.log(`${day} ${getMonthName(month)} ${year} / ${getWeekName(week)}`);
    const formattedDate = `${day} ${getMonthName(month)} ${year} / ${getWeekName(week)}`;
    return formattedDate;
};