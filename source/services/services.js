export const getLocation = () => {
    if('geolocation' in navigator) {
        return navigator.geolocation.getCurrentPosition(
            (position) => position,
            (error) => {error:error}
        )
    } else {
        return {error:'O usuário não autorizou!'}
    }
}

