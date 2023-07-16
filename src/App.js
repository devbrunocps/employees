import { useEffect, useState } from 'react';
import './App.css';
import Modal from './components/modal/modal';
import Tab from './components/table/table';

function App() {
    let [employees, setEmployees] = useState([]);
    let [count, setCount] = useState(0);

    let getStorage = () => {
        if (localStorage.getItem('employees')) {
            let employ = JSON.parse(localStorage.getItem('employees'));
            setEmployees([...employ]);
        }
    };

    let showModal = () => {
        let modal = document.getElementById("modal");
        modal.style.display = "flex";
    };

    let createEmployee = (ev) => {
        ev.preventDefault();

        let name = document.getElementById("name");
        let office = document.getElementById("office");
        let dpto = document.getElementById("dpto");
        let salary = document.getElementById("salary");

        let employ = {
            id: employees.length,
            name: name.value,
            office: office.value,
            dpto: dpto.value,
            salary: salary.value
        };

        setEmployees([...employees, employ]);
        setCount(count + 1)

        name.value = '';
        office.value = '';
        dpto.value = '';
        salary.value = '';

        console.log(employees);

        localStorage.setItem('employees', JSON.stringify([...employees, employ]));
        document.getElementById('modal').style.display = 'none';
    };

    let changeEmployee = (ev) => {
        let employee = ev.currentTarget.parentNode.parentNode;
        let indexElementChange = employee.dataset.id;

        document.getElementById('modal').style.display = 'flex';

        let name = document.getElementById("name");
        let office = document.getElementById("office");
        let dpto = document.getElementById("dpto");
        let salary = document.getElementById("salary");

        name.value = employees[indexElementChange].name
        office.value = employees[indexElementChange].office
        dpto.value = employees[indexElementChange].dpto
        salary.value = employees[indexElementChange].salary


        let newArr = employees
        newArr.splice(indexElementChange, 1)
        setEmployees(newArr);

        localStorage.setItem('employees', JSON.stringify(employees));
    }

    let deleteEmployee = (ev) => {
        let employee = ev.currentTarget.parentNode.parentNode;
        let indexElementChange = employee.dataset.id;

        console.log(employee)
        console.log(indexElementChange)

        let newArr = employees.filter(el => el.id != indexElementChange);
        setEmployees(newArr);
        
        localStorage.setItem('employees', JSON.stringify(newArr));
    }

    useEffect(() => {
        getStorage();
    }, []);

    return (
        <div className="container">
            <Modal createEmployee={createEmployee} />
            <header>
                <span>CADASTRO DE FUNCIONÁRIOS</span>
                <button onClick={showModal}>+ Registrar</button>
            </header>
            <Tab employees={employees} changeEmployee={changeEmployee} deleteEmployee={deleteEmployee} />
        </div>
    );
}

export default App;
