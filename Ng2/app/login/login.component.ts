import { Component, OnInit }    from 'angular2/core';
import { RouteParams }          from 'angular2/router';

@Component({
    template: `
    <h2>hello</h2>   
  `
})
export class LoginComponent implements OnInit
{
    constructor(private routeParams: RouteParams) { }

    ngOnInit()
    {
        console.log('in here', this.routeParams);
    }
}