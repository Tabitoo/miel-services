import provinceRepository from '../repositories/provinces'
import ProvinceAttributes from '../interfaces/province'

const getAll = async (): Promise<any> => {
    return await provinceRepository.getAll()
}

const createProvince = async (body: ProvinceAttributes): Promise<any> => {
    return await provinceRepository.createProvinces(body)
}

export default { getAll, createProvince }
