import { useEffect, useState } from "react"
import { ContactCard } from "../components/ContactCard";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const Contact = () => {

  const { store, dispatch } = useGlobalReducer()
  const Api = "https://playground.4geeks.com/contact/agendas/Valeria111"
  const [editForm, setEditForm] = useState({
      name: "",
      email: "",
      phone: "",
      address: ""
  })

  async function getContacts() {
    let result = await fetch(`${Api}/contacts`)
    let data = await result.json()

    dispatch({ type:"get_contacts", payload: data.contacts })
  }

  async function deleteContact(id) {
    await fetch(`${Api}/contacts/${id}`, {
      method: "DELETE"
    })
    dispatch({type: "delete_contact", payload: id })
  }

  async function editContact(id) {
    await fetch(`${Api}/contacts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editForm)
    })
    await getContacts()
    
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
        {store.contacts.map((contacto, index) => (

          <div key={index}>

            <ContactCard
              contacto={contacto}
              onDelete={deleteContact}
              onEdit={editContact}
              editForm={editForm}
              setEditForm={setEditForm}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

