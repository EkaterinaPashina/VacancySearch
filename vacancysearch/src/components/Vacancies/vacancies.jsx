import React from 'react';
import './vacancies.css';
import Vacancy from '../Vacancy/vacancy';
import data from '../data.js'

export default class Vacancies extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data };
    }

    render() {
        return (
            <div className="vacancies__wrap">
                {this.state.data.map((category) => category.vacancy_list.map((vacancy) => <Vacancy key={vacancy.id} id={vacancy.id} name={vacancy.name} salary={vacancy.salary || "По итогам собеседования"} tag_list={vacancy.tag_list} />))}
            </div>
        );
    }
}
