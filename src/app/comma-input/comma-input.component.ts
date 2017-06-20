import {Component} from "@angular/core";
import {Input} from "@angular/core";

@Component({
    selector: "comma-input",
    templateUrl: "comma-input.component.html"
})

export class CommaInputComponent{
    @Input() inputValue : string = "";
    valueChange(): void{
        let valNoComma = this.inputValue.replace(/,/g ,"");
        if(isNaN(Number(valNoComma)) && valNoComma != "-"){
            this.inputValue = "";
            return; 
        }
        let minusIndex : number = valNoComma.indexOf("-");
        var valOnlyNumber : string;
        if(minusIndex == 0){
            valOnlyNumber = valNoComma.substring(1,valNoComma.length);
        }else{
            valOnlyNumber = valNoComma;
        }
        this.inputValue = "";
    
        var returnValue = "";
        for(var _i = valOnlyNumber.length; _i-3 >= 0; _i = _i-3){
                returnValue = "," + valOnlyNumber.substring(_i-3, _i) + returnValue;
        }
        let exceedNumber = valOnlyNumber.length % 3;
        if(exceedNumber == 0){
            returnValue = returnValue.substring(1, returnValue.length);
        }
        else{
            returnValue = valOnlyNumber.substring(0, exceedNumber) + returnValue;
        }
        while(returnValue.length > 1 && (returnValue[0] == "0" || returnValue[0] == ",")){
            returnValue = returnValue.substring(1, returnValue.length); console.log("55 : "+ returnValue);
        }
        if(minusIndex == 0){
            returnValue = "-" + returnValue;
        }
        this.inputValue += returnValue;
        return;
    }
}