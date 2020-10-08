import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from './../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
    
  product: Product;

  constructor(
        private productService: ProductService, 
        private router:Router,
        private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe(product =>{
        this.product = product
    })
  }

  deleteProduct():void{
   // const id = this.route.snapshot.paramMap.get('id');
    this.productService.delete(this.product.id).subscribe(()=>{
        this.productService.showMessage("Produto excluído!")
        this.router.navigate(['/products'])
    })
    }  
    
    cancel():void{
        // this.productService.showMessage("Operação executada com sucesso!");
        this.router.navigate(['/products'])
     }

}
