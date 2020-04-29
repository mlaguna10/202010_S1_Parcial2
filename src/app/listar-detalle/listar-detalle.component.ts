import { Component, OnInit, Input } from '@angular/core';
import { Serie } from '../series/serie';

@Component({
  selector: 'app-listar-detalle',
  templateUrl: './listar-detalle.component.html',
  styleUrls: ['./listar-detalle.component.css']
})
export class ListarDetalleComponent implements OnInit {

  @Input() serieDetail: Serie;
  constructor() { }

  ngOnInit() {
  }

}
