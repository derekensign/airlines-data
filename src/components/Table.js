import React from 'react'

const Table = (props) => {
    return(
        <div>
            <table className="table">
                <tr>
                    {props.months.map((month, i) => (
                        <th>{month}</th>
                    ))}
                </tr>
                <tr>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                </tr>
            </table>
        </div>
    )
}

export default Table