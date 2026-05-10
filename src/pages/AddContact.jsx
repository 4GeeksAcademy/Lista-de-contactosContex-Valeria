import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Api = "https://playground.4geeks.com/contact/agendas/Valeria22"

export const AddContact = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })

    async function createContact(e) {
        e.preventDefault()
        await fetch(`${Api}/contacts`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        })
        navigate("/Contact")
    }

    return (
        <div>
            <div className="text-center mt-5">
                <h1>Añadir contacto</h1>
            </div>

            <div className="container">
                <form onSubmit={createContact}>
                    <div>
                        <label htmlFor="exampleInputEmail1" className="form-label mt-3">Full Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />

                        <label htmlFor="exampleInputEmail1" className="form-label mt-3">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />


                        <label htmlFor="exampleInputEmail1" className="form-label mt-3">Phone</label>
                        <input type="text" className="form-control" id="exampleInputEmail1"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        />

                        <label htmlFor="exampleInputEmail1" className="form-label mt-3">Address</label>
                        <input type="text" className="form-control" id="exampleInputEmail1"
                            value={form.address}
                            onChange={(e) => setForm({ ...form, address: e.target.value })}
                        />

                    </div>

                    <button type="submit" className="btn btn-primary my-3">Submit</button>
                </form>

                <Link to="/Contact">Volver a contactos</Link>
            </div>
        </div>

    );
}; 