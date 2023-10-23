import React from 'react';
import './categories.css';

export default class Categories extends React.Component {
    render() {
        const { name, vacancy_list } = this.props;

        return (
            <p className="category__name">{name} &middot; {vacancy_list.length}</p>
        );
    }
}