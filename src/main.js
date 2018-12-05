import React from "react";
import Item from "./item";



////// Class based components

export default class List extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			arr: [],
			textPet: "",
			textOwner:"",
			textDate:"",
			textTime:"",
			textText:"",
			sortOrder: "nosort",
			filterField: "",
		}
		this.getUniText = this.getUniText.bind(this);
		this.addNote = this.addNote.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.setSort = this.setSort.bind(this);

	}
	deleteItem(index){
		let arr = [...this.state.arr];
		arr.splice(index, 1);
		this.setState({arr}); /// {arr: arr}
	}
	getUniText(key){		
		return e => {
			this.setState({[key]:e.target.value});
		}
	}
	addNote(){
		let noteObj = {
			pet: this.state.textPet,
			owner: this.state.textOwner,
			dat: this.state.textDate,
			tim: this.state.textTime,
			text: this.state.textText,
		}

		let arr = [...this.state.arr];
		arr.push(noteObj);
		console.log(noteObj)
		this.setState({arr: arr, textPet: "", textOwner: "", textDate: "", textTime: "", textText: ""});
	}

	setSort({target:{value:sortOrder}}){
		this.setState({sortOrder}, () => {
			console.log(this.state);
		}); // {sortOrder: sortOrder}
	}

	render() {

		let notesArr = [...this.state.arr];

		notesArr = notesArr.filter( item => {
			return item.pet.toLowerCase().indexOf(this.state.filterField.toLowerCase()) == 0;
		});

		switch (this.state.sortOrder) {
			case "up":
			notesArr.sort( (a,b) => {
				if(a.pet.toLowerCase() > b.pet.toLowerCase()) {
					return 1
				}
				else return -1
			});
			break;

			case "down":
			notesArr.sort( (a,b) => {
				if(a.pet.toLowerCase() < b.pet.toLowerCase()) {
					return 1
				}
				else return -1
			});
			break;
		}

		let items = notesArr.map( (item, index) => {
			return (<Item 
				key={index} 
				pet={item.pet}
				owner={item.owner}
				tim={item.tim}
				dat={item.dat}
				text={item.text}
				index={index}
				deleteMe={this.deleteItem}>

				</Item>
			)
		});

		return(
			<div className="container">
					<div className="row">
						<div className="col-12 card-wr">
							<span className="title">+ Add appointment</span>

								<div className="form-group">
									<label htmlFor="petName">Pet Name</label>
									<input
										onChange={this.getUniText("textPet")}
										value={this.state.textPet} 
										type="text" 
										className="form-control" 
										placeholder="Pet Name" 
									id="petName"/>
								</div>
								<div className="form-group">
									<label htmlFor="petOwner">Pet Owner</label>
									<input
										onChange={this.getUniText("textOwner")}
										value={this.state.textOwner}
										type="text" 
										className="form-control" 
										placeholder="Pet Owner" 
									id="petOwner"/>
								</div>
								<div className="form-group">
									<label htmlFor="date">Date</label>
									<input
										onChange={this.getUniText("textDate")}
										value={this.state.textDate}
										type="text" 
										className="form-control" 
										placeholder="mm/dd/yyyy" 
									id="date"/>
									<label htmlFor="time">Time</label>
									<input
										onChange={this.getUniText("textTime")}
										value={this.state.textTime}
										type="text" 
										className="form-control" 
										placeholder="--:-- --" 
									id="time"/>
								</div>
								<div className="form-group">
									<label htmlFor="aptNotes">Apt. Notes</label>
									<textarea 
										onChange={this.getUniText("textText")}
										value={this.state.textText}
										className="form-control" 
										rows="5" 
									id="aptNotes">
									</textarea>
								</div>

								<button 
									onClick={this.addNote}
									className="btn addCard" 
									id="addCard">Add appointment
								</button>
					</div>
				</div>
			<div className="col-12 text-center">
				<div className="input-group">
					<input
						onChange={this.getUniText("filterField")} 
						id="find" type="text" className="form-control" placeholder="Find something"/>
				</div>
				<div className="form-group">
					<select
						onChange={this.setSort}
						className="form-control">
						<option value="nosort">No Sort</option>
						<option value="up">A-Z</option>
						<option value="down">Z-A</option>
					</select>
				</div>
			</div>

				<div className="block" id="block">
					{items}
				</div>

			</div>
			)
	}
};




