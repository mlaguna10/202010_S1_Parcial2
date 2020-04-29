import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarSeriesComponent } from './listar-series.component';
import { ListarDetalleComponent } from '../listar-detalle/listar-detalle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListarSeriesComponent]
})
export class ListarSeriesModule { }
