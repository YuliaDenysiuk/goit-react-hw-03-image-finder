import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({images}) {   
    return images.map(({ id, webformatURL, tags }) => (
        <li key={id} className={s.imageGalleryItem}>
            <img src={webformatURL} alt={tags} className={s.imageGalleryItem__image} />
        </li>
    ));   
};

export default ImageGalleryItem;
