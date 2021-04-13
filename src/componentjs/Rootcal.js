const math=require("mathjs");
function checkEquation (equation){
    equation = equation.replaceAll('X','x')

    return equation
}
export function calBisection  (initialEquation ,initialXL,initialXR,initialError) {
    let equation = checkEquation(initialEquation)
        equation = math.parse(equation).compile()
    let  xl = math.bignumber(initialXL)
    let xr = math.bignumber(initialXR)
    let error = math.bignumber(initialError)


    let arr = []


    let xm = math.divide(math.add(xl,xr),2)

    let fx = math.multiply(equation.evaluate({x :xm}),equation.evaluate({x :xr}))

    if(fx < 0){
        xl = xm;
    }
    else{
        xr = xm;
    }

    let checkError = 9999;

    let oldXm = xm;

    let i = 0;
    while(checkError > error){

        xm = math.divide(math.add(xl,xr),2)

        fx = math.multiply(equation.evaluate({x :xm}),equation.evaluate({x :xr}))

        if(fx < 0){
            xl = xm;
        }
        else{
            xr = xm;
        }
        checkError = Math.abs((xm-oldXm)/xm);

        oldXm = xm;

      
        //arr.push({key : i , iteration : i.toString() ,xm : xm.toFixed(15).toString() ,error : checkError.toFixed(15).toString()})
        arr.push(<div> {i}:{xm.toFixed(15).toString()}Error :{checkError.toFixed(15).toString()}</div>)
        i++;
    
    }
    return(arr);
}