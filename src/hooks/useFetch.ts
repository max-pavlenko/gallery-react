import axios from 'axios';
import { Photo } from '../models/Photo';
import { PROCESS } from '../utils/constants';

export const useFetch = <T>(url: string, fnIfFetched: <T>(fetchedPhotos: T) => void) => {
    axios.get<Photo[]>(`${PROCESS.VITE_API_URL}${url}/?client_id=${PROCESS.VITE_API_KEY}`).then(fetchedPhotos => {
        fnIfFetched(fetchedPhotos.data)
    }).catch(e => {
        console.log(e)
    });
}
