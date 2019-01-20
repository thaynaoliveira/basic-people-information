import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPeople } from '../Actions';

class People extends Component {

    componentDidMount(){
        this.getPeople();
    }

    refresh(e){
        e.preventDefault();
        this.getPeople();
    }

    getPeople(){
        let { dispatch } = this.props;
        dispatch(getPeople());
    }

    formatDate(date){
        let d = new Date(date);
        return `${d.getDate()}/${d.getMonth()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
    }

    render() {
        return (
            <div className="people">
                {this.props.people && this.props.people.length > 0 ?
                    this.props.people.map((item, index) =>
                        <div className="people__item" key={`people-${index}`}>
                            <div className="people__item__header">
                                <span>{item.name.first.substring(0,1)}</span>
                                <h4>{`${item.name.first} ${item.name.last}, ${item.age}`}</h4>
                            </div>
                            <div className="people__item__content">
                                <p>{item.about}</p>
                                <div className="people__item__content__contact">
                                    <div>
                                        <img src="../../images/company.png" width="20px"/>
                                        <p>{item.company}</p>
                                    </div>
                                    <div>
                                        <img src="../../images/phone.png" width="20px"/>
                                        <p>{item.phone}</p>
                                    </div>
                                    <div>
                                        <img src="../../images/email.png" width="20px"/>
                                        <p>{item.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    : 
                    this.props.loading ? null :
                    <div className="people__not-found">
                        <p>Information not found. Please, try again later.</p>
                        <button className="btn-default" onClick={(e) => this.refresh(e)}>Try again</button>
                    </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        people: state.people,
        loading: state.loading
    };
}

export default connect(mapStateToProps)(People);