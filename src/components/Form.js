import React, {useState} from "react"
import "../App.css"

const Form = (props) => {
    const [formData, setFormData] = useState("")
    
    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleSubmit(formData)
        setFormData("")
    }

    const handleChange = (event) => {
        setFormData(event.target.value)
      }

    return <div>
        <form onSubmit={handleSubmit}>
            <input className="search-bar"
                type="text" 
                value={formData}
                pattern="[0-9]{5}"
                placeholder="Enter valid zip code"
                onChange={handleChange}
            />
            <input className="search-button" type="submit" value="submit"/>
        </form>
    </div>
}

export default Form