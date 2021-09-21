
class Producto {
  constructor(titulo, precio, img) {
    this.titulo = titulo;
    this.precio = precio;
    this.img = img;
  }

}
const productoUno = new Producto("Ipa", 250, "img/ipa.jpg");
const productoDos = new Producto("Stout", 250, "img/stout.jpg")
const productoTres = new Producto("Scotish", 250, "img/scottish.jpg")
const productoCuatro = new Producto("Honey", 250, "img/honey.jpg")


const baseDeDatos = [productoUno, productoDos, productoTres, productoCuatro];
const carrito = [];


let acumulador = ``

baseDeDatos.forEach((Producto) => {
  $("#halsey").append (` <div class="col mb-5">
  <div  class="card h-100">
      <!-- Product image-->
      <img  class="card-img-top" src="${Producto.img}" alt="..." />
      <!-- Product details-->
      <div class="card-body p-4">
          <div class="text-center">
              <!-- Product name-->
              <h5 class="fw-bolder">"${Producto.titulo}"</h5>
              <!-- Product price-->
             $${Producto.precio}
          </div>
      </div>
      <!-- Product actions-->
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#" onclick="agregarAlCarrito ('${Producto.titulo}')" >Agregar al carrito</a></div>
      </div>
  </div>
</div>`)
});






function agregarAlCarrito(titulo) {
  const productoEncontrado = baseDeDatos.find(Producto => Producto.titulo === titulo)
  if (productoEncontrado != undefined) {
    carrito.push(productoEncontrado);
  } else {
    alert("no se agrego")
  }


  
  localStorage.carrito = JSON.stringify (carrito);
  $("#contador").innerHTML = carrito.length
}

const btnCarrito = document.getElementById("carritoBtn")
if (btnCarrito) {
  btnCarrito.addEventListener("click", toggleCarrito)
  
}
function toggleCarrito(e) {
  e.preventDefault();
  console.log(carrito);
}





