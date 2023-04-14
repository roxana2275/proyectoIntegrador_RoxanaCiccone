import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import { Component, HostListener } from '@angular/core';

// @Component({
//   selector: 'app-mi-componente',
//   templateUrl: './index.html',
//   styleUrls: ['./styles.css']
// })
// export class MiComponenteComponent {
//   mostrarBotonArriba = false;

//   @HostListener('window:scroll', [])
//   onWindowScroll() {
//     const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
//     this.mostrarBotonArriba = scrollOffset > 20;
//   }
// }
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


 
  
  