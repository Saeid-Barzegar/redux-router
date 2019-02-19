var initState = {
    name: "Saeid Barzegar",
    nationality: "Iranian",
    job: "Programmer",
    email: "saeidbarzegar@gmail.com",
    linkedin: "https://www.linkedin.com/in/saeid-barzegar/"
}

const myInfo = (state = initState, action) => {
    switch (action.type) {
        case 'ACTION':
            return { ...state }
        default:
            return state;
    }
}

export default myInfo