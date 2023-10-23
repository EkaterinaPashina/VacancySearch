import React from 'react';
import './vacancy.css';

export default class Vacancy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { id, name, salary, tag_list } = this.props;
        return (
            <div div className='vacancy__wrap' >
                <div className="vacancy__item">
                    <p className="vacancy__name">{name}</p>
                    <p className="vacancy__salary">{salary}</p>
                    <p className="vacancy__tag_list">{tag_list}</p>
                </div>
            </div >
        );
    }
}
