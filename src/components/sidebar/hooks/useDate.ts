export const useDate = (
    valueCalender : string,
    setValueCalender:(value:string)=>void 
)=>{
    const handleChangeDate=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setValueCalender(e.target.value);
    }

    const goToPrevDay = ()=>{
    if (valueCalender==="") return;
    const preDate = new Date(valueCalender);
    preDate.setDate(preDate.getDate()-1);
    setValueCalender(preDate.toISOString().split("T")[0]);
    }
    const goToNextDay = ()=>{
    if (valueCalender==="") return;
    const nextDate = new Date(valueCalender);
    nextDate.setDate(nextDate.getDate()+1);
    setValueCalender(nextDate.toISOString().split("T")[0]);
    }

    return{handleChangeDate,goToPrevDay,goToNextDay}
}