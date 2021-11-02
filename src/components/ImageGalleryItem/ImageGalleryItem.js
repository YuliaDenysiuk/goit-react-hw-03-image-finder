import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({images}) =>             
    images.map((image) => (
    <li key={images.indexOf(image).toString()} className={s.imageGalleryItem}>
        <img src={image.webformatURL} alt={image.tags} className={s.imageGalleryItem__image} />
    </li>
    ));

ImageGalleryItem.propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
      }),
    ),
  };

export default ImageGalleryItem;
