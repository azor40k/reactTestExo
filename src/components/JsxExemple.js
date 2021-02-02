const user = {
    firstName : 'Carl',
    lastName: 'Hernandez'
}

function FormatName(user){
    return user.firstName  + " " + user.lastName
}

const JsxExemple = () => {
    return (
        FormatName(user)
    )
}

export default JsxExemple;