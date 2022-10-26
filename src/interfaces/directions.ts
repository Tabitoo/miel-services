interface DirectionsAttributes {
    id?: number,
    street: string,
    nro: number,
    codPostal: string,
    localidad: string

} 

interface DirectionsBody extends DirectionsAttributes {
    UsersId: number
}

export { DirectionsAttributes, DirectionsBody }
