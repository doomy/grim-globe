import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*import { AppComponent } from './app.component';*/
import { IntroComponent } from './introduction/intro.component';
import { SearchFieldComponent} from './searchField/searchField.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    IntroComponent, SearchFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [IntroComponent, SearchFieldComponent]
})
export class AppModule {
}
