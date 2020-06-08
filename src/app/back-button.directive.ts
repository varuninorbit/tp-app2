import { Directive, HostListener, Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Directive({
    selector: '[appBackButton]'
})
export class BackButtonDirective {
    constructor(private location: Location) { }

    @HostListener('click')
    onClick() {
        this.location.back();
    }
}

//<button appBackButton>BACK</button>



