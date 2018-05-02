import { Component } from '@angular/core';

@Component({
    selector: 'app-databinding',
    templateUrl: './databinding.component.html',
    styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
    title = 'Data Binding';
    image = 'assets/images/databinding.png';
    documentation = 'https://angular.io/guide/architecture-components#data-binding';

    //For Interpolation
    interpolation = 'Welcome to the Interpolation';
    interpolationNotation = '{{ }}';

    //For Event Binding
    public counter: number = 0;

    public incrementCounter(): void {
        this.counter++;
    }

    //Property Binding
    public objectStyle = {
        color: 'red',
        border: '1px solid black',
        cursor: 'pointer',
        margin: '2px'
    }
 
    public changeStyles(): void {
        if(this.objectStyle.color === 'red') {
            this.objectStyle.color = 'blue';
            this.objectStyle.border = '20px groove purple';
        } else if(this.objectStyle.color === 'blue') {
            this.objectStyle.color = 'green';
            this.objectStyle.border = '20px ridge yellow';
        } else {
            this.objectStyle.color = 'red';
            this.objectStyle.border = '20px solid black';
        }
    }

    //For Two-Way Data Binding
    public user = {
        email: 'ad',
        password: ''
    };
}