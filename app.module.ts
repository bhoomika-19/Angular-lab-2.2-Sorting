import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyOrderByPipe } from './my-order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyOrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [MyOrderByPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
