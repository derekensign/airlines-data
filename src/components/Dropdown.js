import React from 'react'

const Dropdown = (props) => {
    return(
        <div>
            <select>
                {props.selectOptions.map((dropdownItem, i) => (
                    <option>{dropdownItem}</option>
                ))}
            </select>

        </div>
    )
}

export default Dropdown