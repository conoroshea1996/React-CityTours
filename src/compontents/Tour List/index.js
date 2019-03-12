import React, { Component } from 'react';
 
import './TourList.scss';

import Tour from '../Tour/Tour';

import { TourData } from '../Tour List/TourData';

export default class TourList extends Component{
    state = {
        tours:TourData
    };
    removeTour =(id) =>{
        console.log(id);
        const{tours} = this.state;
        const filter = tours.filter(tour => tour.id !== id);
        this.setState({
            tours:filter
        });
    }
    render(){
        const{tours} = this.state;

        return(
            <section className="tourlist">
              {tours.map(tour =>{
                  return(
                      <Tour key ={tour.id} tour={tour} removeTour={this.removeTour}/>
                  )
              })}
            </section>
        )
    }
}