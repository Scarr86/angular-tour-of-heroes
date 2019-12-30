import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-dynamic-view',
  templateUrl: './dynamic-view.component.html',
  styleUrls: ['./dynamic-view.component.css']
})
export class DynamicViewComponent implements OnInit {

  questions: any[]
  constructor(private service:QuestionService) { }

  ngOnInit() {
    this.questions = this.service.getQuestions();
  }

}
