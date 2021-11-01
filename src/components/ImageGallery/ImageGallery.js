import s from './ImageGallery.module.css';
import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
    state = {
        images: []
    }

    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.name;
        const newName = this.props.name;

        if (prevName !== newName) {
            fetch(`https://pixabay.com/api/?q=${newName}&key=23195286-789ed49c86d3fd3c443dc5a81&image_type=photo&orientation=horizontal`)
                .then(res => res.json())
                .then(images => this.setState({ images: images.hits }))
                .catch(error => console.log(error));
        }    
    }
    
    render() {
        const { images } = this.state;

         return (
        <ul className={s.imageGallery}>
            <ImageGalleryItem images={ images }/>
        </ul>
    );
    }
}

export default ImageGallery;