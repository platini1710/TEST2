import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

  import { ConfigComponent }         from './config/config.component';
import { AppComponent }         from './app.component';
import { DownloaderComponent }  from './downloader/downloader.component';
import { MessageComponent } from './message/message.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    DownloaderComponent,ConfigComponent,
    MessageComponent,
    HeroesComponent

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}