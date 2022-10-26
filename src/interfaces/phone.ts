interface PhoneAttributes {
    id?: number,
    number: number
}


interface PhoneBody extends PhoneAttributes {
    UserId: number
}


export { PhoneAttributes, PhoneBody }
