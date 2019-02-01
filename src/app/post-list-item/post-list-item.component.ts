import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

    @Input() postTitle: string;
    @Input() postContent: string;
    @Input() loveIts: number;
    @Input() date: Date;

    constructor() { }

    ngOnInit() {
    }

    loveIt() {
        this.loveIts++;
    }

    hateIt() {
        this.loveIts -= 1;
    }

    getColor() {
        if (this.loveIts > 0) {
            return 'green';
        } else if (this.loveIts < 0) {
            return 'red';
        }
    }
}
