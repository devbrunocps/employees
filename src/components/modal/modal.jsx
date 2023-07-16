import './style.css'

let Modal = (props) => {
    return (
        <div className='modal' id='modal'>
            <form onSubmit={props.createEmployee}>
                <div className="input-group">
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="input-group">
                    <label htmlFor="office">Cargo</label>
                    <input type="text" name="office" id="office" />
                </div>
                <div className="input-group">
                    <label htmlFor="dpto">Departamento</label>
                    <input type="text" name="dpto" id="dpto" max={12}/>
                </div>
                <div className="input-group">
                    <label htmlFor="salary">Salário</label>
                    <input type="number" name="salary" id="salary" />
                </div>
                <div className="btn">
                    <button>Salvar</button>
                </div>
            </form>
        </div>
    )
}

export default Modal