import s from './Searchbar.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Searchbar extends Component {
    state = {
        imageName: ''
    }

    handleChange = (e) => {
        this.setState({ imageName: e.currentTarget.value });
    }

    // fetch(https://pixabay.com/api/?q=что_искать&key=23195286-789ed49c86d3fd3c443dc5a81&image_type=photo&orientation=horizontal).then()

    render() {
        const { imageName } = this.state;
        const { handleChange } = this;

        return (
            <header className={s.searchBar}>
                <form className={s.searchForm}>
                    <button type="submit" className={s.searchForm__button}>
                        <span className={s.searchForm__buttonLabel}>Search</span>
                    </button>

                    <input
                        className={s.searchForm__input}
                        type="text"
                        value={imageName}
                        onChange={handleChange}
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        );
    }
}

Searchbar.propTypes = {
    imageName: PropTypes.string.isRequired,
}

export default Searchbar;