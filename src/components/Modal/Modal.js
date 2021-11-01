import s from './Modal.module.css';

function Modal({largeImageURL, tags}) {
    return (
        <div className={s.overlay}>
            <div className={s.modal}>
                <img src={largeImageURL} alt={tags} />
            </div>
        </div>
    );
}

export default Modal;
