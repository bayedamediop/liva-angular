import {Injectable, OnInit} from '@angular/core';
import {BienModel} from './list-bien/item-bien/bienModel';

@Injectable({
  providedIn: 'root'
})
export class BienService {
  biens: BienModel[] = [
    {
      id: 1, title: 'maison',
      descriptions: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aperiam vel commodi cum qui', price: 561655,
      image: 'https://source.unsplash.com/1080x780/?house',
      status: 1, sale: true, category: 'A', creatAt: new Date(2014, 12 )
    },
    {
      id: 2, title: 'camputer',
      descriptions: '  commodi cum qui', price: 160955,
      image: 'https://source.unsplash.com/1080x780/?computer',
      status: 1, sale: true, category: 'A', creatAt: new Date(2017, 12 )
    },
    {
      id: 3, title: 'voiture',
      descriptions: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aperiam vel commodi cum qui', price: 1655,
      image: 'https://source.unsplash.com/1080x780/?car',
      status: 1, sale: true, category: 'B', creatAt: new Date(2019, 12 )
    },
    {
      id: 4, title: 'house',
      descriptions: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aperiam vel commodi cum qui', price: 166755, image: 'https://source.unsplash.com/1080x780/?room',
      status: 1, sale: true, category: 'C', creatAt: new Date(2019, 12 )
    },
    {
      id: 5, title: 'random',
      descriptions: ' amet consectetur adipisicing elit. Aut aperiam vel commodi cum qui', price: 901655,
      image: 'https://source.unsplash.com/1080x780/?bathroom',
      status: 1, sale: true, category: 'D', creatAt: new Date(2019, 12 )
    },
    {
      id: 6, title: 'football',
      descriptions: ' Lorem ipsum dolor sit amet', price: 100655,
      image: 'https://source.unsplash.com/1080x780/?soccer',
      status: 1, sale: true, category: 'A', creatAt: new Date(2020, 12, 22 , 10 , 10 )
    }

  ];
    getAllBien(): BienModel[]{
    return this.biens;
  }

  getBienById( id: number): BienModel{
   const bienFound = this.biens.find(
      (b: BienModel) => {
        return b.id === id ;
      }
    );
   return bienFound;
  }
  addBien( newBien: BienModel): any
  {
    this.biens.push((newBien));
  }
  deleteBien(id: number): any{}
  updatedBien(bienUpdate: BienModel): any{
    let oldBin = this.biens.find(
      (b: BienModel) => {
        return b.id === oldBin.id;
      }
    );
    if (oldBin){
      oldBin = {...bienUpdate};
    }
  }
  getLastId(): any{
    return this.biens[this.biens.length - 1] ?
      this.biens[this.biens.length - 1] . id : 0;
  }
  getSimilarBiensById(id: number){
  }
}
