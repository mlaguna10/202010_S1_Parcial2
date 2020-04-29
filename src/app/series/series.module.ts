import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './series.component';
import { ListarSeriesComponent } from '../listar-series/listar-series.component';
import { ListarDetalleComponent } from '../listar-detalle/listar-detalle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SeriesComponent,
    ListarSeriesComponent,
    ListarDetalleComponent
  ],
  exports: [
    ListarSeriesComponent,
    SeriesComponent
  ]
})
export class SeriesModule { }
