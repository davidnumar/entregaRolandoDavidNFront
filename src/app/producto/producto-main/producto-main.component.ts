import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/usuario/usuario.service';
import  swal  from 'sweetalert2';
import { Producto } from '../interfaces/producto.interface';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto-main',
  templateUrl: './producto-main.component.html',
  styleUrls: ['./producto-main.component.css']
})

export class ProductoMainComponent implements OnInit {

  productos:Producto[]=[];
  servicio: any;
  clientes: any;
  constructor(private productoService:ProductoService,
     public usuarioService:UsuarioService, private router:Router) { }

  ngOnInit(): void {

    this.productoService.mostrarProductos().subscribe(
      resp => { this.productos=resp ;console.log("Esto me responde"+this.productos)}
    );
  }

  borrarProducto(producto:Producto):void{
    swal({
      title:"Está seguro?",
      text:`Seguro que desea eliminar al cliente ${producto.nombre} `,
      type:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Si, eliminar!',
      cancelButtonText:'No, cancelar',
      confirmButtonClass:'btn btn-info',
      cancelButtonClass:'btn btn-danger',
      buttonsStyling:false,
      reverseButtons:true
    }).then((result)=>{
      if(result.value){
        this.productoService.delete(producto.id).subscribe(
          resp => {
            this.productos = this.productos.filter( prod => prod !== producto)
            swal('Producto eliminado',`Producto ${producto.nombre} ha sido eliminado con éxito`,'success');
            this.router.navigate(['/productos']);
          }
        )
      }
    });
  }

}
