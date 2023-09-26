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
