import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Store } from "src/app/core/models/store";

@Component({
  selector: "app-card-store",
  templateUrl: "./card-store.component.html",
  styleUrls: ["./card-store.component.scss"]
})
export class CardStoreComponent implements OnInit {
  @Input() public store: Store;
  @Output() public isSelected = new EventEmitter();
  constructor() {
    this.store = {
      id: "",
      name: "Store name test",
      address: "Address test, 7",
      imageUrl:
        "https://static01.nyt.com/images/2018/04/06/business/00NORDSTROM04/merlin_136473777_d26b2d93-14ef-4f7c-b7ce-47a5706882c4-superJumbo.jpg?quality=90&auto=webp"
    };
  }

  ngOnInit() {}

  public sendIsSelected() {
    this.isSelected.emit();
  }
}
