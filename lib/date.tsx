import {parseISO, format} from 'date-fns';

export default function Date({dateString}: { dateString: string }) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'd/MM/yyyy - HH:mm')}</time>;
}