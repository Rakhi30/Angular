import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { HeaderComponent } from './commonui/header/header.component';
import { FooterComponent } from './commonui/footer/footer.component';
import { SearchContractComponent } from './portal/tools/searchContract/search-contract/search-contract.component';
import { HomeComponent } from './home/home/home.component';
import { ContractManagementComponent } from './portal/tools/tabs/contract-management/contract-management.component';
import { AddContractComponent } from './portal/contract/add-contract/add-contract.component';
import { ClaimTrackingComponent } from './portal/tools/tabs/claim-tracking/claim-tracking.component';
import { ReportManagementComponent } from './portal/tools/tabs/report-management/report-management.component';
import { OperationalReportComponent } from './portal/tools/tabs/operational-report/operational-report.component';
import { EditContractComponent } from './portal/contract/edit-contract/edit-contract.component';
import { ActivateContractComponent } from './portal/contract/activate-contract/activate-contract.component';
import { CloneContractComponent } from './portal/contract/clone-contract/clone-contract.component';
import { VoidContractComponent } from './portal/contract/void-contract/void-contract.component';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchContractComponent,
    HomeComponent,
    ContractManagementComponent,
    AddContractComponent,
    ClaimTrackingComponent,
    ReportManagementComponent,
    OperationalReportComponent,
    EditContractComponent,
    ActivateContractComponent,
    CloneContractComponent,
    VoidContractComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
