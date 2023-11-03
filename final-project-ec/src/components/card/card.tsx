import React from "react";
import './card.css';

interface CardProps {
  title: string;
  first_sub_title: string;
  second_sub_title: string;
  third_sub_title: string;
  fourth_sub_title: string;
  playtime: string;
  first_data: string;
  second_data: string;
  third_data: string;
  fourth_data: string;
}



const Card : React.FC<CardProps> = (props) => {
  const { title, first_sub_title, second_sub_title, third_sub_title, fourth_sub_title, playtime, first_data, second_data, third_data, fourth_data } = props;
  return (
    <div className="container_card">
      <div className="card">
        <h2 className="card_title">{title}</h2>
        <ul className="card_list_data">
          <li><p className="card_sub_title">{first_sub_title}: <span>{first_data}</span></p></li>
          <li><p className="card_sub_title">{second_sub_title}: <span>{second_data}</span></p></li>
          <li><p className="card_sub_title">{third_sub_title}: <span>{third_data}</span></p></li>
          <li><p className="card_sub_title">{fourth_sub_title}: <span>{fourth_data}</span></p></li>
          <li><p className="playtime">{playtime}</p></li>
        </ul>
      </div>
    </div>
  );
};

export default Card;