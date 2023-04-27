import { Injectable } from "@angular/core";
import {HttpClient, HttpResponse,HttpHeaders} from "@angular/common/http";
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Producto } from "../models/producto";
import { GLOBAL } from "./global";

@Injectable()
export class ProductoService{
    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url = GLOBAL.url;
    }

    getProductos(){
        return this._http.get(this.url+'/productos').pipe(map((response:any)=> response.data));
    }

    addProducto(producto: Producto){
        let json = JSON.stringify(producto);
        let params = 'json='+json;
        let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});

        return this._http.post(this.url+'/productos', params, {headers})
                        .pipe(map(res => res));
    }
}

