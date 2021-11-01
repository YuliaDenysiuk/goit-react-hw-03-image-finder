import s from './Error.module.css';

function Error({name}) {
    return <p className={s.error}>Изображений с именем <span className={s.error__name}>"{name}"</span> не найдено</p>;
};

export default Error;
