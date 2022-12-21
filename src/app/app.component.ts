import { Component} from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import { debounceTime } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Template Driven and Reactive forms';

  name!: string;
  checkBox !: FormGroup

  // loginForm= new FormGroup({
  //   user: new FormControl('',[Validators.required,Validators.email]),
  //   password: new FormControl('',[Validators.required,Validators.minLength(5)])
  // })

  // userLogin(){
  //   console.log(this.loginForm.value)
  // }

  // get user(){   //its called getter
  //   return this.loginForm.get('user')   //This function is used to show the error message if field is invalid
  // }

  // get password(){
  //   return this.loginForm.get('password')  //This function is used to show the error message if password is invalid
  // }

  constructor(){
    this.checkBox= new FormGroup({
      Event1: new FormControl(),
      Event2: new FormControl(),
      Event3: new FormControl(),
      Event4: new FormControl()
    })
  }
  ngOnInit() {
    // const click =this.clickCheckbox('event',this.event1)
    // const res=this.clickCheckbox.pipe(debounceTime(1000))
    this.checkBox.valueChanges.pipe(debounceTime(1000)).subscribe((val:any)=>{
      console.log('>>>');

    })

  }
  clickCheckbox(){
    console.log(this.checkBox.value)
  }
  get event1(){
    return this.checkBox.get('Event1')
  }
  get event2(){
    return this.checkBox.get('Event2')
  }
  get event3(){
    return this.checkBox.get('Event3')
  }
  get event4(){
    return this.checkBox.get('Event4')
  }

}
