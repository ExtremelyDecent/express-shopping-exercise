/**shopping cart */

const items = require("./fakeDb");

class Item{
    constructor(name, price){
        this.name = name;
        this.price = price;
        items.push(this);

    }

    static findAll(){
        return items;
    }

    static updateItem(name, data){
        let foundItem = Item.findAll(name);
        if (foundItem === undefined){
            throw{
                message: "404! Not Found.",
                status : 404
            }
        }
        foundItem.name = data.name;
        foundItem.price = data.price;

        return foundItem;
    }
    /** return item with matching name     */
    static find(name){
        const foundItem = items.find(v  => v.name ===name);
        if(foundItem === undefined){
            throw{
            message: "404! Not Found.",
            status : 404
            }
        }
        return foundItem;
    }
    static remove(name){
        let foundIndex = items.findIndex(v => v.name === name);
        if (foundIndex === -1){
            throw{
                    message: "404! Not Found.",
                    status : 404
            }
        }
        items.splice(foundIndex,1);
        
    }
}
module.exports = Item;
