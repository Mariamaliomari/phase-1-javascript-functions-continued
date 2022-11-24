function saturdayFun(game="roller-skate"){
    return (`This Saturday, I want to ${game}!`)
}
function mondayWork(activity="go to the office"){
    return (`This Monday, I will ${activity}.`)
}
function wrapAdjective(wrapper){
    switch (wrapper){
        case "*":
            return (function (){
                return `You are ${wrapper}a hard worker${wrapper}!`
            })
       case "||":
       return  (function(){
        return `You are ${wrapper}a dedicated programmer${wrapper}!`
       })    
    }


}