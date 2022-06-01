import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AngularIbanModule } from 'angular-iban';
import { TransactiontableComponent } from './transactiontable/transactiontable.component';
import { TrasactionformComponent } from './trasactionform/trasactionform.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule,HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TransactionsService } from './transactions.service';
import { EditComponent } from './edit/edit.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { transferEffects } from './store/effects/transaction.effect';
import { transferReducer } from './store/reducers/transaction.reducer';
@NgModule({
  declarations: [
    AppComponent,
    TransactiontableComponent,
    TrasactionformComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularIbanModule,
    ReactiveFormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(TransactionsService),
    HttpClientInMemoryWebApiModule.forRoot(
    TransactionsService, { dataEncapsulation: false }),
    StoreModule.forRoot( { transfers:transferReducer } ),
    EffectsModule.forRoot([transferEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
