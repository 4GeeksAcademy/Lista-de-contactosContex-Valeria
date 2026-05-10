import { useEffect, useState } from "react"
import { ContactCard } from "../components/ContactCard";
import { Link } from "react-router-dom";


export const Contact = () => {

  const [user, setUsers] = useState([])
  const Api = "https://playground.4geeks.com/contact/agendas/Valeria22"
  const [editForm, setEditForm] = useState({
      name: "",
      email: "",
      phone: "",
      address: ""
  })

  async function getContacts() {
    let result = await fetch(`${Api}/contacts`)
    let data = await result.json()

    setUsers(data.contacts)
  }

  async function deleteContact(id) {
    await fetch(`${Api}/contacts/${id}`, {
      method: "DELETE"
    })
    getContacts()
  }

  async function editContact(id) {
    await fetch(`${Api}/contacts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editForm)
    })
    getContacts()
  }


  useEffect(() => {
    getContacts()
  }, [])

  return (
    <div className="text-center mt-5">

      <div className="d-flex justify-content-end me-5">
        <Link to="../AddContact">
          <button className="btn btn-success">Añadir contacto</button>
        </Link>
      </div>


      <h1>Contactos</h1>

      <div className="d-flex flex-wrap gap-3 mt-5 justify-content-center">
        {user.map((contacto, index) => (

          <div key={index}>

            <ContactCard
              contacto={contacto}
              onDelete={deleteContact}
            />

          </div>
        ))}
      </div>
    </div>
  );
};

