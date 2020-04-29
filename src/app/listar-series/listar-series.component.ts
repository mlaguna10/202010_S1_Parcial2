import { Component, OnInit } from '@angular/core';
import { Serie } from '../series/serie';
import { GetSeriesService } from '../series/getSeries.service';

@Component({
  selector: 'app-listar-series',
  templateUrl: './listar-series.component.html',
  styleUrls: ['./listar-series.component.css']
})
export class ListarSeriesComponent implements OnInit {

  selected = false;
  selectedSerie : Serie;
  valorPromedio : number = 0;

  constructor(private seriesService: GetSeriesService) { }
  private series: Array<Serie>;

  ngOnInit() {
    this.getSeries()
    this.promedio();
  }

  getSeries(): void{
    this.seriesService.getSeries().subscribe(r => {
      this.series = r;
    })
  }

  onSelected(b: Serie): void{
    this.selected = true;
    this.selectedSerie = b;
  }

  promedio(): void{
    var valor = 0;
    var frac = this.series.length;
    for (var i = 0; i < this.series.length; i++) {
      valor = valor + this.series[i].season;
    }
    this.valorPromedio = valor/frac;

    var para = document.createElement("P");
    para.innerHTML = this.valorPromedio.toString();
    document.getElementById("myDIV").appendChild(para);

  }


}
