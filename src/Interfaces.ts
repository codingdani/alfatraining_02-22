import { identity } from "./GenericType";

// Interface Deklarierung
interface Contact {
    firstname: string;
    lastname: string;
    fullName: () => string;
    age?: number;
}

// Interface Verwendung in Objekt
const contact: Contact = {
    firstname: "Max",
    lastname: "Mustermann",
    fullName: () => "Max Mux",
};
console.log(contact.fullName());

// Interface Verwendung in Klasse
class PowerContact implements Contact {
    firstname = "Max";
    lastname = "Mustermann";

    fullName() {
        return `${this.firstname} ${this.lastname}`;
    }
}

const powerContact = new PowerContact();
console.log(powerContact.fullName());

// Beispiel mit generischen Typ in der Eigenschaft `data`
// Weiteres Interface, mit Deklarierung vom generischen Typ in erster Zeile: `interface Payload<T> {`
// Nutzung des generischen Typs in der Interface Deklarierung ist in zweiter Zeile: `data: T`
interface Payload<T> {
    data: T;
    length: number;
    lastUpdated?: Date;
}

// Nutzung des neuen generischen Interfaces mit dem primitiven Typ string
const stringPayload: Payload<string> = { data: "any string", length: 1 };

// Nutzung des neuen generischen Interfaces mit dem vorher definierten Interface und `contact` Variable
const contactPayload: Payload<Contact> = { data: contact, length: 1 };

// Nutzung mit der vorher definierten identity function, Typ wird richtig abgeleitet
const contactPayloadIdentity = identity(contactPayload);

console.log(
    "stringPayload",
    stringPayload,
    "contactPayload",
    contactPayload,
    "contactPayloadIdentity",
    contactPayloadIdentity
);
