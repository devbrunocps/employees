import React from "react";
import './style.css'
import { BsPencilSquare, BsFillTrash3Fill } from "react-icons/bs";
import Thead from "./thead";

let Tab = (props) => {

    if (props.employees.length > 0) {
        return (
            <table>
                <Thead />
                <tbody id="tbody">
                    {props.employees.map((item, index) => {
                        return (
                            <tr key={item.id} data-id={item.id}>
                                <td className="name">{item.name}</td>
                                <td className="office">{item.office}</td>
                                <td className="dpto">{item.dpto}</td>
                                <td className="salary">{item.salary}</td>
                                <td>
                                    <BsPencilSquare className="icon" onClick={props.changeEmployee}/>
                                </td>
                                <td>
                                    <BsFillTrash3Fill className="icon" onClick={props.deleteEmployee}/>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    } else {
        return (
            <table>
                <Thead />
                <tbody></tbody>
            </table>
        )
    }


}

export default Tab