import { makeAutoObservable } from "mobx"

export default class ProductStore {
    constructor() {
        this._types = [ // Типы продукции
            {id: 1, name: 'Вязальные машины'},
            // Заполнить 
        ]
        this._brands = [ // Бренды
            {id: 1, name: 'ALPES'},
            {id: 2, name: 'Brother'},
            {id: 3, name: 'DesignaKnit9'},
            {id: 4, name: 'Fittingly Sew'},
            // Заполнить 
        ]
        this._products = [ // Сами продукты, изображения добавить 
            {id: 1, name: 'Silver Reed SK840/SRP60N', price: 1000000, img: 'placeholder.svg'},
            {id: 2, name: 'Silver Reed SK280/SRP60N', price: 1000000, img: 'placeholder.svg'},
            // Заполнить 
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setProducts(products) {
        this._products = products
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get products() {
        return this._products
    }
}