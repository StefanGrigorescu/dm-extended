import { AfterViewInit, Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { ScreenSizes } from 'src/common/screen-sizes';
import { Cards } from '../cards-model';

@Component({
  selector: 'app-card-pool',
  templateUrl: './card-pool.component.html',
  styleUrls: ['./card-pool.component.scss']
})
export class CardPoolComponent implements AfterViewInit {
  @Input() cards: Cards = new Cards([]);

  availableWidth: number;
  @ViewChild('poolContainer') poolContainer: ElementRef;
  ScreenSizes = ScreenSizes;

  ngAfterViewInit(): void {
    this.availableWidth = this.poolContainer.nativeElement.offsetWidth;
    
    console.log("availableWidth is in init: " + this.availableWidth);
  }

  ngAfterViewChecked(): void {
    this.availableWidth = this.poolContainer.nativeElement.offsetWidth;
    console.log("availableWidth is in check: " + this.availableWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.availableWidth = this.poolContainer.nativeElement.offsetWidth;
  }

  isAvailableWidthBetween(first: number, second: number): boolean {
    return this.availableWidth >= first && this.availableWidth <= second;
  }
  isAvailableWidthGreaterThan(other: number) {
    return this.availableWidth >= other;
  }
  isAvailableWidthLowerThan(other: number) {
    return this.availableWidth <= other;
  }

  setSortBy(sortBy: string): void {
    var oldSortBy = this.cards.sortBy;

    if(oldSortBy === sortBy)
    {
      this.cards.sortAscending = !this.cards.sortAscending;
      return;
    }

    this.cards.sortBy = sortBy;
    this.cards.sortAscending = true;
  }
}
