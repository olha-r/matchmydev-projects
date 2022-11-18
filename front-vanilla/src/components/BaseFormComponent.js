import BaseComponent from "./BaseComponent";

export default class BaseFormComponent extends BaseComponent{

    props = null;
    
    constructor(selector, props) {
        super(selector);
        this.props = props;
    }

    render() {
        super.render()
        const data = this.dataModel();
        const properties = Object.keys(data);
        const form = this.target.querySelector("form");
        properties.forEach((property) => {
            const element = form.elements[property]
            const type = element.type;
            if(type == "checkbox") {
                element.checked = data[property]
            } else {
                element.value = data[property]
            }
        })

    }

    dataModel() {
        return null
    }

}