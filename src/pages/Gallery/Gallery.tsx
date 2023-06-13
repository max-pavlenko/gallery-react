import {useEffect, useState} from 'react';
import {ImageList, ImageListItem} from '@mui/material';
import {Photo} from '../../models/Photo';
import styles from './Gallery.module.scss'
import {MAX_COLUMNS} from '../../utils/constants';
import {useNavigate} from 'react-router-dom';
import {useFetch} from '../../hooks/useFetch';
import ImgListItem from '../../components/ImgListItem';

const Gallery = () => {
   const [photos, setPhotos] = useState<Photo[]>([]);
   const navigate = useNavigate();

   useEffect(() => {
      useFetch<Photo[]>(`/photos`, function (fetchedPhotos) {
         console.log(fetchedPhotos);
         setPhotos(fetchedPhotos as Photo[]);
      });
   }, []);

   function handleImgClick(photo: Photo) {
      navigate('/gallery/' + photo.id)
   }

   if (!photos) {
      return <div>Loading...</div>
   }
   console.log(photos)

   return (
       <ImageList sx={{width: '97%', height: '100%'}} variant='masonry' gap={6}>
          <ImageListItem key="Subheader" cols={MAX_COLUMNS}>
             <h4 className={styles.galleryTitle}>
                Gallery
             </h4>
          </ImageListItem>

          {photos.map((photo) => {
                 return <ImgListItem key={photo.id} photo={photo} styles={{cursor: 'pointer'}}
                                     onClickHandler={handleImgClick}/>
              }
          )}
       </ImageList>
   )
};

export default Gallery;
