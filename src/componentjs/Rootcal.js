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
       
        
        
        arr.push(<div> {i}  :{xm.toFixed(15).toString()}Error:{checkError.toFixed(15).toString()}</div>)
        /* arr.push(<tr><td>{i}</td><td>{xm.toFixed(15).toString()}</td><td>{checkError.toFixed(15).toString()}</td></tr>) */
        i++;
    
    }
    return(arr);
}
export function fasepositioncal( init_xl, init_xr, init_error,init_fx){

    init_fx = checkEquation(init_fx);
    let data=[];
    let fx = math.parse(init_fx).compile()
    let xl = math.bignumber(init_xl)
    let xr = math.bignumber(init_xr)
    let er = math.bignumber(init_error)
    let fxl = fx.evaluate({x:xl});
    let fxr = fx.evaluate({x:xr});
    let x = math.divide(math.subtract(math.multiply(xl,fxr),math.multiply(xr,fxl)),math.subtract(fxr,fxl));
    let num =math.multiply(fx.evaluate({x:x}),fxr);
    let tmp_er = 9999999;
    let new_x = 0;
    let i =1;

    if(num>0){
        xr = x;
    }
    else if(num<0){
        xl = x;
    }

    while(tmp_er > er){
        fxr = fx.evaluate({x:xr});
        fxl = fx.evaluate({x:xl});
        new_x = math.divide(math.subtract(math.multiply(xl,fxr),math.multiply(xr,fxl)),math.subtract(fxr,fxl));
        num = math.multiply(fx.evaluate({x:x}),fxr);
        if(num>0){
            xr = new_x;
        }
        else if(num<0){
            xl = new_x;
        }
        tmp_er = math.abs(math.divide(math.subtract(new_x,x),new_x))
        x = new_x;
        data.push(<div>{i}: z is {x.toFixed(15).toString()}</div>)
        i++;
    }


    return data;
}