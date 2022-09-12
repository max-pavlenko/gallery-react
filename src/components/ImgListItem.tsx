import React from 'react';
import { DEFAULT_DESCRIPTION } from '../utils/constants';
import { CardActionArea, IconButton, ImageListItem, ImageListItemBar } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { Photo } from '../models/Photo';

const ImgListItem = ({photo, onClickHandler, styles}:
                         { photo: Photo, onClickHandler?: (photo: Photo) => void, styles?: React.CSSProperties }) => {
    const description = photo.description || photo.alt_description || DEFAULT_DESCRIPTION;

    return (
        <ImageListItem key = {photo.id} cols = {1}>
            <CardActionArea>
                <img style = {styles}
                     src = {`${photo.urls.regular}?w=248&fit=crop&auto=format`}
                     width = '100%'
                     srcSet = {`${photo.urls.regular}?w=248&fit=crop&auto=format&dpr=2 2x`}
                     alt = {description}
                     loading = "lazy"
                     onClick = {() => onClickHandler ? onClickHandler(photo) : null}
                />
            </CardActionArea>
            <ImageListItemBar
                title = {description}
                subtitle = {photo.user.username}
                actionIcon = {
                    <IconButton
                        sx = {{color: 'rgba(255, 255, 255, 0.54)'}}
                        aria-label = {`info about ${photo.user.username}`}
                    >
                        <InfoIcon color = 'secondary'/>
                    </IconButton>
                }
            />
        </ImageListItem>
    );
};

export default ImgListItem;
