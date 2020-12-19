import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-home-modal',
  templateUrl: './home-modal.component.html',
  styleUrls: ['./home-modal.component.sass']
})
export class HomeModalComponent implements OnInit {

  public modalMovie = [];

  constructor(
    public dialogRef: MatDialogRef<HomeModalComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    dialogRef.disableClose = false;
  }

  ngOnInit() {
    if (this.data) {
      this.handleMovie(this.data);
    }
  }

  handleMovie(Selectedmovie) {
    this.modalMovie = Object.keys(Selectedmovie).map(function (movieIndex) {
      let movieData = Selectedmovie[movieIndex];
      return movieData;
    });
  }

  closeModal() {
    this.dialog.closeAll();
  }

}
