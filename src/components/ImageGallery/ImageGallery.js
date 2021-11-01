import s from './ImageGallery.module.css';
import { Component } from 'react';
import API from '../../api/api';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PendingLoader from '../Loader/Loader';
import Error from '../Error/Error';
import Modal from '../Modal/Modal';

class ImageGallery extends Component {
    state = {
        images: null,
        error: null,
        status: 'idle',
        showModal: false,
        image: {}
    }

    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.name;
        const newName = this.props.name;

        if (prevName !== newName) {
            this.setState({ status: 'pending' });

            API.fetchImage(newName)
                .then(images => this.setState({ images: images.hits, status: 'resolved' }))
                .catch(error => this.setState({ error, status: 'rejected' }));
        }
    }

    toggleModal = (e) => {
        // const image = e.target.value;
        this.setState(({ showModal }) => ({ showModal: !showModal }));
        console.log(e.target);
    }
    
    render() {
        const { images, status, showModal, image } = this.state;
        const { toggleModal } = this;
        const { name } = this.props;

        if (status === 'idle') {
            return <></>;
        }

        if (status === 'pending') {
            return <PendingLoader />;
        }

        if (status === 'rejected' || images.length === 0 || name.trim() === '') {
            return <Error name={name} />;
        }

        if (status === 'resolved') {
            return (
                <>
                <ul className={s.imageGallery} onClick={toggleModal}>
                        <ImageGalleryItem images={images} />
                </ul>
                    {showModal && (<Modal image={image} />)}
                </>
            );
        }    
    }
}

export default ImageGallery;