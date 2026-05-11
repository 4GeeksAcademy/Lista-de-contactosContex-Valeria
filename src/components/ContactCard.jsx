export const ContactCard = ({ contacto, onDelete, onEdit, editForm, setEditForm }) => {

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
                        data-bs-toggle="modal"
                        data-bs-target="#editModal"
                        onClick={() => setEditForm({
                            name: contacto.name,
                            email: contacto.email,
                            phone: contacto.phone,
                            address: contacto.address
                        })}
                    >Editar</button>

                    <button className="btn btn-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteModal"
                    >Eliminar</button>
                </div>
            </div>

            <div className="modal fade" id="editModal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Editar Contacto</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" className="form-control mb-2" placeholder="Nombre"
                                value={editForm.name}
                                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                            />
                            <input type="email" className="form-control mb-2" placeholder="email"
                                value={editForm.email}
                                onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                            />
                            <input type="text" className="form-control mb-2" placeholder="Telefono"
                                value={editForm.phone}
                                onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                            />
                            <input type="text" className="form-control mb-2" placeholder="Direccion"
                                value={editForm.address}
                                onChange={(e) => setEditForm({ ...editForm, address: e.target.value })}
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary"
                                onClick={() => onEdit(contacto.id)}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="deleteModal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            ¿Estás seguro de que quieres eliminar este contacto?
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button className="btn btn-danger" onClick={() => onDelete(contacto.id)} data-bs-dismiss="modal">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}