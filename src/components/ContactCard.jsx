export const ContactCard = ({ contacto, onDelete }) => {

    return (
        <div className="card">
            <img src="https://plus.unsplash.com/premium_photo-1682125164600-e7493508e496?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXBpY3xlbnwwfHwwfHx8MA%3D%3D" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5>{contacto.name}</h5>
                <p>{contacto.phone}</p>
                <p>{contacto.email}</p>
                <p>{contacto.address}</p>

                <div className="d-flex gap-1 justify-content-center">
                <button className="btn btn-primary"
                        onClick={() => {}}
                        >Editar</button>
                <button className="btn btn-danger"
                        onClick={() => onDelete(contacto.id)}
                        >Eliminar</button>
                </div>
            </div>
        </div>
    )
}