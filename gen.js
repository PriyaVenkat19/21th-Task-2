function gen_check(num,gen)
{
    if(gen=='f'||gen=='F'){
        switch(num){
            case -1:
                console.log("Mother");
                break;
            case -2:
                console.log("Grandmother");
                break;
            case -3:
                console.log("Great grandmother");
                break;
            case 0:
                console.log("Me");
                break ;
            case 1:
                console.log("Daughter");
                break ;
            case 2:
                console.log("Grand daughter");
                break;
            case 3:
                console.log("Great granddaughter"); 
                break;
            default:
                break;    
        }
    }
    else if(gen=='m'||gen=='M'){
        switch(num){
            case -1:
                console.log("Father");
                break;
            case -2:
                console.log("GrandFather");
                break;
            case -3:
                console.log("Great grandfather");
                break;
            case 0:
                console.log("Me");
                break ;
            case 1:
                console.log("Son");
                break ;
            case 2:
                console.log("Grand Son");
                break;
            case 3:
                console.log("Great grandson"); 
                break;
            default:
                break;    
        }
    }
}
gen_check(3,'f')