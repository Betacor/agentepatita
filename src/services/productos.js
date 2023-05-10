export class Products {
    static products = [
      {
        "id": "1",
        "nombre": "ALL IN ONE HP PROONE 205 G8 DE 23.8",
        "descripcion": "RYZEN 3 PRO 5300U, 8GB RAM, 512GB SSD, WIN 11 HOME",
        "precio": "759990",
        "tienda": "Ciudad Gatica",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_921095-MLC51818503671_102022-F.webp" ,
				"envío": "Por pagar con Starken",
				"entregas": "Valparaíso, Viña, Quilpué"
      },
      {
        "id": "A08",
        "nombre": "ALL IN ONE HP PROONE 205 G8 DE 23.8",
        "descripcion": "RYZEN 3 PRO 5300U, 8GB RAM, 512GB SSD, WIN 11 HOME",
        "precio": "759990",
        "tienda": "Ciudad Gatica",
        "imagen": "../assets/img/ciudad_gatica-camita.jpg",
      },
			{
        "id": "3",
        "nombre": "ALL IN ONE HP PROONE 205 G8 DE 23.8",
        "descripcion": "RYZEN 3 PRO 5300U, 8GB RAM, 512GB SSD, WIN 11 HOME",
        "precio": "759990",
        "tienda": "Ciudad Gatica",
        "imagen": "../assets/img/ciudad_gatica-camita.jpg",
      }
      
    ];
  
      static getAllProducts() {
      return this.products.filter(product => product.stock > 0);
    }
  
  }