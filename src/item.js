import React from "react";

function Item(props){
	return (<div className="card" id="card">
					<div className="titlePet">{props.pet}</div>
					<div className="titleOwner" id=""><span>Owner: {props.owner}</span></div>
					<p>{props.text}</p>
					<span className="my_date">{props.dat}</span>
					<span className="my_time">{props.tim}</span>
					<span 
					onClick={ () => props.deleteMe(props.index) }
					className="close glyphicon glyphicon-remove"></span>
				</div>)
}

export default Item;