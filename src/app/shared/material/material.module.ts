import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DateAdapter, MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule,
  MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatFormFieldModule,
  MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatPaginatorIntl, MatPaginatorModule,
  MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule,
  MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule,
  MatTooltipModule, MatTreeModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MAT_LABEL_GLOBAL_OPTIONS
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
