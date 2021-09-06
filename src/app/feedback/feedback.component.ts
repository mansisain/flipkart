import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent
{
  Feedback(feedbackFormJson:any)
  {
    console.log("feedbackFormJson");
  }
}

