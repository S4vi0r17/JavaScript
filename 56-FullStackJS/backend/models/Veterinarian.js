import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import generateId from '../helpers/generateId.js';

const VeterinarianSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    phone: {
        type: String,
        default: null,
        trim: true
    },
    web: {
        type: String,
        default: null,
    },
    token: {
        type: String,
        default: generateId()
    },
    confirmed: {
        type: Boolean,
        default: false
    },
});

// I use ``function`` instead of arrow function because I need to use ``this`` keyword
VeterinarianSchema.pre('save', async function (next) {
    // const veterinarian = this; // `this` refers to VeterinarianSchema

    // if (veterinarian.isModified('password')) {
    //     veterinarian.password = await bcrypt.hash(veterinarian.password, 8);
    // }

    // next();

    if (!this.isModified('password')) {
        return next();
    }

    const salt = await bcrypt.genSalt(10); // salt: a random string that is used to hash a password
    this.password = await bcrypt.hash(this.password, salt);
});

VeterinarianSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

const Veterinarian = mongoose.model('Veterinarian', VeterinarianSchema);

export default Veterinarian;

/*
    Hola Eduard, La validación !this.isModified("password") se utiliza para verificar si el campo de contraseña (password) no ha sido modificado. Si la contraseña no ha sido modificada, significa que otros campos en el documento se están actualizando, pero no la contraseña en sí. En ese caso, el código puede continuar ejecutándose y llamar a next() para pasar al siguiente middleware.

    Por otro lado, si la contraseña ha sido modificada, la validación this.isModified("password") devolverá true, lo que significa que la contraseña ha sido modificada y se debe realizar alguna acción adicional, como encriptarla antes de guardarla en la base de datos.

    Ambas validaciones tienen su propósito en diferentes situaciones. La negación (!) en !this.isModified("password") se utiliza para verificar si el campo no ha sido modificado, mientras que this.isModified("password") se utiliza para verificar si ha sido modificado. La elección de cuál usar dependerá de los requisitos y lógica específica de tu aplicación.




    Hola, me perdí un poco en lo de hashear la contraseña, entonces quiere decir que antes de encriptarla, valida directamente el campo de la instancia en la bd, y si ese campo ha sido modificado ('obviamente al insertar un registro se hace un cambio') la encripta y si no, no ejecuta ninguna acción (solo el next)

    Espero que si sea correcto lo que entendí, si no es así podrían decirmelo?




    Hola Levir, Entendiste correctamente el flujo de la validación. La verificación this.isModified("password") se utiliza para determinar si el campo de contraseña ha sido modificado antes de realizar alguna acción adicional, como encriptarla antes de guardarla en la base de datos.

    Si this.isModified("password") devuelve true, significa que la contraseña ha sido modificada (por ejemplo, al actualizar un registro), y en ese caso, se ejecuta la lógica adicional necesaria para garantizar que la contraseña se guarde de manera segura.

    Si this.isModified("password") devuelve false, implica que no se ha modificado el campo de contraseña, y en ese caso, no se ejecuta ninguna acción adicional relacionada con la contraseña, solo se llama a next() para pasar al siguiente middleware.
*/