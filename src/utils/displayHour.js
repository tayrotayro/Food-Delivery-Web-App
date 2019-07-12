export default function displayHour(number) {
    const timeString = number.toString();
    if (timeString.includes('.')) {
        const hour = parseInt(timeString.split('.')[0])
        const minute = parseFloat('0.' + timeString.split('.')[1])

        if (hour > 12) {
            const result = (hour - 12).toString() + ":" + (minute * 60).toString() + " PM"
            return result;
        } else if (number == 0) {
            const result = "12:" + (minute * 60).toString() + " AM"
            return result;
        } else if (number == 12) {
            const result = "12:" + (minute * 60).toString() + " PßM"
            return result;
        } else {
            const result = hour.toString() + ":" + (minute * 60).toString() + " AM"
            return result;
        }
    } else {
        if (number > 12) {
            const result = (number - 12).toString() + ":00 PM";
            return result;
        } else if (number == 0) {
            return "12:00 AM"
        } else if (number == 12) {
            return "12:00 PM"
        } else {
            const result = number.toString() + ":00 AM";
            return result;
        }
    }
}