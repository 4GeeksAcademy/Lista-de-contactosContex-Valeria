export const initialStore = () => {
  return {

    contacts: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'get_contacts':
      return {
        ...store,
        contacts: action.payload
      }
    
    case 'delete_contact':
      return {
        ...store,
        contacts: store.contacts.filter((contact) => contact.id !== action.payload)
      }

    case 'edit_contacts':
      return {
        ...store,
        contact: store.contact.map((contact) => contact.id === action.payload.id ? action.payload : contact)
      }


    default:
      throw Error('Unknown action.');
  }
}
