import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Person } from '../person';

@Component({
  selector: 'app-pipe-comp',
  templateUrl: './pipe-comp.component.html',
  styleUrls: ['./pipe-comp.component.css']
})
export class PipeCompComponent implements OnInit {

  @Input() itemId: number

  @Output() chosenItem = new EventEmitter()

  pic; name; firstName: string

  pers1 = new Person(1,'Rabii','Hlioui',60,15786937,'Software Engineer','../../assets/images/rabiiHlioui.png','../../assets/images/coverRabii.png')
  pers2 = new Person(2,'Emna','Mejri',30,63339411,'Secretary','                          ','../../assets/images/coverImen.png')
  pers3 = new Person(3,'Slimen','Labyedh',40,76945137,'Psychotherapist','../../assets/images/slimenLabyedh.png','../../assets/images/coverSlimen.png')

  constructor() { }

  ngOnInit() {
    this.initiateItem()
  }

  initiateItem() {
    if (this.itemId == 1) {
      this.pic = this.pers1.picture
      this.name = this.pers1.name
      this.firstName = this.pers1.firstname
    }
    else if (this.itemId == 2) {
      this.pic = this.pers2.picture
      this.name = this.pers2.name
      this.firstName = this.pers2.firstname
    }
    else {
      this.pic = this.pers3.picture
      this.name = this.pers3.name
      this.firstName = this.pers3.firstname
    }
  }

}
