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
        if (localStorage.getItem("count")) {
            let count = JSON.parse(localStorage.getItem('count'));
            setCount(count + 1)
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
            id: count,
            name: name.value,
            office: office.value,
            dpto: dpto.value,
            salary: salary.value
        };

        setEmployees([...employees, employ]);
        setCount((countState) => countState + 1)

        name.value = '';
        office.value = '';
        dpto.value = '';
        salary.value = '';

        console.log(employees);

        localStorage.setItem('employees', JSON.stringify([...employees, employ]));
        localStorage.setItem('count', JSON.stringify(count));
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

        let employ = employees.filter(el => el.id == indexElementChange);

        name.value = employ[0].name;
        office.value = employ[0].office;
        dpto.value = employ[0].dpto;
        salary.value = employ[0].salary;


        let newArr = employees.filter(el => el.id != indexElementChange);
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
