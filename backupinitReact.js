var fields = ["name","Descriptor","fat","protein","carb","allergies","Random String"];

window.onload = function() {
	class FField extends React.Component {
		render() {
		
		
			return React.createElement('p',{className: "formField"}, fields[0]);
			//React.createElement('p',{className: "formField"}, fields[1]);
		}
	}
	class FValue extends React.Component {
		render() {
			return React.createElement('input',{className: "formValue"},this.props.name);
		}
	}
	var element;
	for (var i=0; i < fields.length; i++) {
		ReactDOM.render(React.createElement(FField,{name: fields[i]}),document.getElementById('fieldCol'));
	}
	//ReactDOM.render(element,document.getElementById('fieldCol'));
}

//React.createElement('p',{className: "formField"},this.props.name)
