export const getFormattedTime = (milliseconds: number): string => {
    let seconds: number | string = Math.floor(milliseconds / 1000) % 60;
    let minutes: number | string = Math.floor(milliseconds / 1000 / 60) % 60;
    let hours: number | string = Math.floor(milliseconds / 1000 / 60 / 60) % 24;

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    if (hours < 10) {
        hours = `0${hours}`;
    }

    if (hours === "00" && minutes === "00") {
        return `:${seconds}`;
    }

    if (hours === "00") {
        return `${minutes}:${seconds}`;
    }

    return `${hours}:${minutes}:${seconds}`;
};

export const getCurrentTime = (twentyFourHoursFormat: boolean) => {
    return new Date().toLocaleTimeString("en-US", {
        hour12: !twentyFourHoursFormat,
    });
};

interface GetMilliseconds {
    hours: number;
    minutes: number;
    seconds: number;
}

export const getMilliseconds = ({
    hours,
    minutes,
    seconds,
}: GetMilliseconds): number => {
    const hoursToMilliseconds = hours * 60 * 60 * 1000;
    const minutesToMilliseconds = minutes * 60 * 1000;
    const secondsToMilliseconds = seconds * 1000;

    return hoursToMilliseconds + minutesToMilliseconds + secondsToMilliseconds;
};
