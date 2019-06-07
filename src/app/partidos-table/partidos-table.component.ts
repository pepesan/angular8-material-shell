import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../data.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-partidos-table',
  templateUrl: './partidos-table.component.html',
  styleUrls: ['./partidos-table.component.css']
})
export class PartidosTableComponent implements OnInit {
  displayedColumns = ['nombre', 'dipu', 'imagen', 'actions'];
  resultsLength: number;
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe( data => {
      console.log(data);
      this.dataSource.data = data;
      this.resultsLength = data.length;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}




