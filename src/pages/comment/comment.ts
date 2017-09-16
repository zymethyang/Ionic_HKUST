import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Comment } from '../../shared/comment';
import { DishdetailPage } from '../../pages/dishdetail/dishdetail';
import { Dish } from '../../shared/dish';
/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {
  comment: FormGroup;
  commentData: Comment[];

  dish: Dish;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder) {
    this.comment = this.formBuilder.group({
      author: ['', Validators.required],
      rating: 5,
      comment: ['', Validators.required],
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
  }
  dismiss() {
    this.commentData = this.comment.value;
    //this.commentData.date = new Date().toISOString();
    console.log(this.commentData);
    this.comment.reset({
      author: '',
      rating: 5,
      comment: '',
    });
    this.dish.comments.push(this.comment.value);
    //console.log(this.commentData.author);
  }

}
