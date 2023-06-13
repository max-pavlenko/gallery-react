import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Photo } from '../../models/Photo';
import ImgListItem from '../../components/ImgListItem';


const SelectedPhoto = () => {
    const {imgId} = useParams();
    const [ photo, setPhoto ] = useState<Photo>(null! as Photo);

    useEffect(() => {
        useFetch<Photo>(`/photos/${imgId}`, fetchedPhoto => {
            console.log(fetchedPhoto);
            setPhoto(fetchedPhoto as Photo);
        });
    }, []);

    if (!photo) {
        return <div>Loading...</div>
    }

    return (
        <ImgListItem styles={{maxHeight: 'maxHeight: calc(100vh - 79px)', objectFit: 'cover',}} photo={photo}/>
    )
};

export default SelectedPhoto;
