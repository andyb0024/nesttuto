import { Injectable } from '@nestjs/common';
import { Cat } from 'src/model/cat.model';

@Injectable()
export class CatService {
private cat:Cat[]=[]
    getAllCat(){
        return this.cat
    }

    getCatById(id:number){
        return this.cat.find((catItem)=>catItem.id === id)
    }

    createCat(cat:Cat){
        this.cat.push(cat)
        return cat
    }

    updateCat(id:number,updatedCat:Cat){
        const catIndex=this.cat.findIndex((catItem)=> catItem.id ===id)
        if (catIndex !== -1 ){
            this.cat[catIndex]=updatedCat
            return updatedCat
        }
        return null
    }
}
