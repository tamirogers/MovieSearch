import { movie } from './../movie-model';
import { Component, OnInit, VERSION } from '@angular/core';
import { MovieService } from '../movie.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog, MatDialogRef } from '@angular/material';
import { HomeModalComponent } from './home-modal/home-modal.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {

  ngVersion: string = VERSION.full;
  matVersion: string = '5.1.0';
  breakpoint: number;
  public mobilSet = false;
  public coachMovies;
  public updateDialogRef: MatDialogRef<HomeModalComponent>;
  public menuList: Array<string> = [
    "Menu 1", "Menu 2", "Menu 3", "Menu 4", "Menu 5", "Menu 6", "Menu 7"
  ];

  constructor(
    private movieService: MovieService,
    public homeUpdateDialog: MatDialog
  ) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe((data) => {
      this.coachMovies = (<any>data).Search;
    });
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 3;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth < 600) ? 1 : 3;
  }

  openModal(movie): void {
    this.updateDialogRef = this.homeUpdateDialog.open(
      HomeModalComponent, {
      data: {
        movieData: movie
      }
    }
    )
  }

}
