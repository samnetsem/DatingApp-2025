import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  
  private http=inject(HttpClient);
  protected readonly title = signal('Dating App');
  protected members=signal<any>([])
  async ngOnInit() {
    
    this.members.set(await this.getMembers());
    
      
    
  }
  async getMembers() {
  try {
    const members = await lastValueFrom(
      this.http.get('https://localhost:5001/api/members')
    );
    return members;
  } catch (error) {
    console.error(error);
    throw error; // optional but recommended
  }
}

}
