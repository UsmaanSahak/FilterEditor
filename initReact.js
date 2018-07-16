var fields = ["name","Descriptor","fat","protein","carb","allergies","Random String"];

window.onload = function() {
	class FField extends React.Component {
		render() {
		
		
			return React.createElement('p',{className: "formField"}, this.props.name);
			//React.createElement('p',{className: "formField"}, fields[1]);
		}
	}
	class FValue extends React.Component {
		render() {
			return React.createElement('input',{className: "formValue"},this.props.name);
		}
	}
	
	ReactDOM.render(
		//React.createElement(FField,{name : fields[0]}), document.getElementById('fieldCol'));
		React.createElement('div',null,
			React.createElement(FField,{name : fields[0] }),
			React.createElement(FField,{name : fields[1] }),
			React.createElement
		), document.getElementById('fieldCol'));
}


//Create a class named allFields
//allFields returns a creatElement of FField and FValue






