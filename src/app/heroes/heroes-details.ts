import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'hero-details-app',
  template: `<h2>Heroes id selected = {{heroesId}}<h2>
  <button (click)='back()'>Back</button>
  <a (click)=goPrevious()>Previous</a>
  <a (click)=goNext()>Next</a>`,
})
export class HeroesDetails {
  constructor(private route: ActivatedRoute, private router: Router) {
    console.log('hello');
  }
  heroesId;

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.heroesId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.heroesId = id;
    });
  }
  goPrevious() {
    let previousId = this.heroesId - 1;
    this.router.navigate(['/heroes', previousId]);
  }

  goNext() {
    let nextId = this.heroesId + 1;
    this.router.navigate(['/heroes', nextId]);
  }
  back() {
    //this.router.navigate(['/heroes',{id:this.heroesId,name:'jaggu'}])
    this.router.navigate(['../', { id: this.heroesId }]);
  }
}
