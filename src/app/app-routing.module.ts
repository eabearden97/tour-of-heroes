import { NgModule } from '@angular/core';
import { routes } from './app.routes';
import { RouterModule, RouterOutlet } from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterOutlet]
})
export class AppRoutingModule { }
