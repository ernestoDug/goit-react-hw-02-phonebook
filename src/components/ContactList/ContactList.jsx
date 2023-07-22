import { nanoid } from 'nanoid';


const ContactList = ({name, number}) =>
{
    console.dir(ContactList)
    return (
        <ul>
<li id = {nanoid()}>

{name}: {number}
</li>

    </ul>
)
}


export default ContactList