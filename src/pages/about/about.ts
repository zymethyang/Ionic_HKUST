import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LeaderProvider } from '../../providers/leader/leader';
import { Leader } from '../../shared/leader';
/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  leaders : Leader[];
  leadersErrMess: string;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private leaderservice: LeaderProvider,
    @Inject('BaseURL') private BaseURL) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  ngOnInit() {
    this.leaderservice.getLeaders()
      .subscribe(leaders => this.leaders = leaders,
        errmess => this.leadersErrMess = <any>errmess );
  }

}
