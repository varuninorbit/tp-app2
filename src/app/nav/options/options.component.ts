import { Component, ChangeDetectionStrategy } from "@angular/core";
import { QuestionsService } from "src/app/test/questions.service";
import {
  trigger,
  transition,
  state,
  animate,
  style,
  keyframes
} from "@angular/animations";
@Component({
  selector: "app-options",
  templateUrl: "./options.component.html",
  styleUrls: ["./options.component.css"],
  animations: [
    trigger("activeTab", [
      state(
        "true",
        style({
          background: "#314083",
          color: "white",
          "border-bottom": "6px solid #007bff",
          padding: "0.56em"
        })
      ),
      state(
        "false",
        style({
          background: "#dee2e6",
          color: "white",
          "border-bottom": "6px solid rgba(0, 0, 0, 0.09)",
          padding: "0.56em"
        })
      ),

      transition("* => *", [
        animate("0.5s")
      ])
    ])
  ]
})
export class OptionsComponent {
  tab_no: number = 2; //starts from 0
  tab_: number = 1;
  get tab() {
    return this.tab_;
  }

  set tab(no) {
    this.tab_ = no;
    this.tabChanged();
  }
  constructor(private questions: QuestionsService) {}

  swipe(eventType) {
    if (eventType === "swiperight" && this.tab > 0) {
      this.tab--;
    } else if (eventType === "swipeleft" && this.tab < this.tab_no) {
      this.tab++;
    }
  }

  tabChanged() {
    //console.log(this);
    //if options object is changed load the questions
    this.questions.updateQuestions()//todo: this line is not working
  }
}
