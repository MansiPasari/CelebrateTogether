import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  isLoginView: boolean = true;
  registerObj: any ={
    "userId":0,
    "userName":"",
    "userEmail":"",
    "userPassword":"",
    "contactNo":""
  };
  loginObj: any ={
    "loginEmail":"",
    "loginPassword":"",
  }

constructor(private http:HttpClient){}

  openLogin(){
    const model= document.getElementById('myModal');
    if(model != null){
      model.style.display='block';
    }
  }
  CloseModel(){
    const model= document.getElementById('myModal');
    if(model != null){
      model.style.display='none';
    }
  }
  onRegister(){
   this.http.post('localhost:8081/user',this.registerObj).subscribe((res:any)=>{
    if(res.result){
      alert('Registration is Success')
      this.CloseModel()
    }else{
      alert(res.message)
    }
   })
  }

  onLogin(){
    this.http.post('localhost:8081/login',this.loginObj).subscribe((res:any)=>{
      if(res.result){
        alert('Login is Success')
        localStorage.setItem('user',JSON.stringify(res.data))
        this.CloseModel()
      }else{
        alert(res.message)
      }
     })

  }
}
