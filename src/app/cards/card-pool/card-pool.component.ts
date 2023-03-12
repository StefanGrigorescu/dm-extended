import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
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
  cardPileClasses: { [key: string]: boolean };

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        this.availableWidth = entry.contentRect.width;
        this.updateCardPileClasses();
      }
    });
    resizeObserver.observe(this.poolContainer.nativeElement);
  }
  
  private updateCardPileClasses(): void {
    this.cardPileClasses = {
      'col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2': this.isAvailableWidthGreaterThan(ScreenSizes.mdMin),
      'col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-2': this.isAvailableWidthBetween(ScreenSizes.smMin, ScreenSizes.mdMin - 1),
      'col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-3': this.isAvailableWidthLowerThan(ScreenSizes.smMin - 1)
    };
    this.changeDetectorRef.detectChanges();
  }

  isAvailableWidthBetween(first: number, second: number): boolean {
    var result: boolean = this.availableWidth >= first && this.availableWidth <= second;
    // if(result) {
    //   console.log(`[${this.availableWidth}]: isAvailableWidthBetween(${first}, ${second}) = ${result}`);
    // }

    return result;
  }
  isAvailableWidthGreaterThan(other: number) {
    var result: boolean = this.availableWidth >= other;
    // if(result) {
    //   console.log(`[${this.availableWidth}]: isAvailableWidthGreaterThan(${other}) = ${result}`);
    // }

    return result;
  }
  isAvailableWidthLowerThan(other: number) {
    var result: boolean = this.availableWidth <= other;
    // if(result) {
    //   console.log(`[${this.availableWidth}]: isAvailableWidthLowerThan(${other}) = ${result}`);
    // }

    return result;
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
