import React from 'react';
import './search.css';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert(this.state.value);
        event.preventDefault();
    }


    render() {
        return (
            <div className="search__wrap">
                <form className="search__form" onSubmit={this.handleSubmit}>
                    <input className="search__input" type="text" placeholder='Поиск по вакансиям' value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="" />
                </form>
            </div>
        );
    }
}
