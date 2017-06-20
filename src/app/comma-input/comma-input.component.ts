import {Component} from "@angular/core";
import {Input} from "@angular/core";

@Component({
    selector: "comma-input",
    templateUrl: "comma-input.component.html"
})

export class CommaInputComponent{
    @Input() value : string = "";
    valueChange(): void{
        let valNoComma = this.value.replace(/,/g ,"");
        if(isNaN(Number(valNoComma)) && valNoComma != "-"){
            this.value = "";
            return; 
        }
        let minusIndex : number = valNoComma.indexOf("-");
        var num : string;
        if(minusIndex == 0){
            num = valNoComma.substring(1,valNoComma.length);
        }else{
            num = valNoComma;
        }
        this.value = "";
    
        var s = "";
        for(var _i = num.length; _i-3 >= 0; _i = _i-3){
                s = "," + num.substring(_i-3, _i) + s;
        }
        let exceedNumber = num.length % 3;
        if(exceedNumber == 0){
            s = s.substring(1, s.length);
        }
        else{
            s = num.substring(0, exceedNumber) + s;
        }
        while(s.length > 1 && (s[0] == "0" || s[0] == ",")){
            s = s.substring(1, s.length); console.log("55 : "+s);
        }
        if(minusIndex == 0){
            s = "-" + s;
        }
        this.value += s;
        return;
    }
    blurChange() : void{
        let valNoComma = this.value.replace(/,/g ,"");
        console.log("new" + valNoComma);
        let minusIndex : number = valNoComma.indexOf("-");
        var num : string;
        if(minusIndex == 0){
            num = valNoComma.substring(1,valNoComma.length);
        }else{
            num = valNoComma;
        }
        this.value = "";
    
        var s = "";
        for(var _i = num.length; _i-3 >= 0; _i = _i-3){
                s = "," + num.substring(_i-3, _i) + s;
        }
        let exceedNumber = num.length % 3;
        if(exceedNumber == 0){
            s = s.substring(1, s.length);
        }
        else{
            s = num.substring(0, exceedNumber) + s;
        }
        while(s.length > 1 && (s[0] == "0" || s[0] == ",")){
            s = s.substring(1, s.length); console.log("55 : "+s);
        }
        if(minusIndex == 0){
            s = "-" + s;
        }
        this.value += s;
        return;
    }
}