export const goToLogin = (navigate) => {
     navigate("/")
}

export  const goToFeed = (navigate) => {
     navigate("/feed")
}
export  const goToRestaurant = (navigate, id) => {
     navigate(`/feed/${id}`)
}
export const goToBack =(navigate)=>{
     navigate(-1)
}

export const goToSingUp = (navigate) => {
     navigate("/singUp")
}

export const goToSingUpAdress = (navigate) => {
     navigate("/singUp/adress")
}
export const goToProfile = (navigate) => {
     navigate("/profile")
}
export const goToAdressEdit = (navigate, id) => {
     navigate(`/adressEddit/${id}`)
}
export const goToProfileEdit = (navigate, id) => {
     navigate(`/profile/${id}`)
}