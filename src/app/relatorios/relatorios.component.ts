import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css'],
  providers: [MessageService]
})
export class RelatoriosComponent implements OnInit {

  title = 'primeAngular';

  date3: Date;
  val: number;
  data: any;
  dataLine: any;
  dataPie: any;



  constructor(private messageService: MessageService) {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: '#42A5F5',
          // fill: false,
          borderColor: '#1E88E5'
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          // fill: false,
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };

    this.dataLine = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#1E88E5'
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#7CB342',
        }
      ]
    };

    this.dataPie = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ]
        }]
      };
    }

    ngOnInit(): void {
  
    }

    selectData(event) {
    // tslint:disable-next-line: max-line-length
    this.messageService.add({ severity: 'info', summary: 'Data Selected', detail: this.data.datasets[event.element._datasetIndex].data[event.element._index] });
  }

}
