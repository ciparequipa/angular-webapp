import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';
import { GLOBAL } from '../services/global';

@Component({
    selector: 'producto-add',
    templateUrl: '../views/producto-add.html',
    providers: [ProductoService]
})

export class ProductoAddComponent{
    public titulo: string;
    public producto: Producto;

    constructor(
        private _productoService: ProductoService,
        private _route: ActivatedRoute,
        private _router: Router
    ){
        this.titulo='Crear un nuevo Producto';
        this.producto= new Producto(0,'','',0,'');
    }

    ngOnInit(){
        console.log('producto-add.component.ts cargado ..');
    }

    onSubmit(){
        console.log(this.producto);         
        this._productoService.addProducto(this.producto).subscribe(
            (response:any) => {
                    if(response.code == 200){
                        this._router.navigate(['/productos']);
                    }else{
                        console.log(response);
                    }
                },
                error => {
                    console.log(<any>error);
                }          
            );     
        } 

}