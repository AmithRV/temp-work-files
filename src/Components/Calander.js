
import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';

function CalendarDemo()  {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;

    const [date1, setDate1] = useState(null);
    const [date2, setDate2] = useState(null);
    const [date3, setDate3] = useState(null);
    const [date4, setDate4] = useState(null);
    const [date5, setDate5] = useState(null);
    const [date6, setDate6] = useState(null);
    const [date7, setDate7] = useState(null);
    const [date8, setDate8] = useState(null);
    const [date9, setDate9] = useState(null);
    const [date10, setDate10] = useState(null);
    const [date11, setDate11] = useState(null);
    const [date12, setDate12] = useState(null);
    const [date13, setDate13] = useState(null);
    const [date14, setDate14] = useState(null);
    const [dates1, setDates1] = useState(null);
    const [dates2, setDates2] = useState(null);

    let minDate = new Date();
    minDate.setMonth(prevMonth);
    minDate.setFullYear(prevYear);

    let maxDate = new Date();
    maxDate.setMonth(nextMonth);
    maxDate.setFullYear(nextYear);

    let invalidDates = [today];

    addLocale('es', {
        firstDayOfWeek: 1,
        dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
        dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
        dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
        monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
        monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
        today: 'Hoy',
        clear: 'Limpiar'
    });

    const dateTemplate = (date) => {
        if (date.day > 10 && date.day < 15) {
            return (
                <strong style={{ textDecoration: 'line-through' }}>{date.day}</strong>
            );
        }

        return date.day;
    }
    // console.log('date 2 : ', date2)
    // console.log('date 3 : ', date3)
    // console.log('date 4 : ', date4)
    // console.log('date 5 : ', date5)
    // console.log('date 6 : ', date6)
    // console.log('date 7 : ', date7)
    // console.log('date 8 : ', date8)
    // console.log('date 9 : ', date9)
    // console.log('date 10 : ', date10)
    // console.log('date 11 : ', date11)
    // console.log('date 12 : ', date12)
    // console.log('date 13 : ', date13)
    // console.log('date 14 : ', date14)
    // console.log('dates 1 : ', dates1)
    // console.log('dates 2  : ', dates2)

    function submit(){
      const date= date1.getDate()+'/'+date1.getMonth()+'/'+date1.getFullYear();
      console.log(date)
    }


    return (
        <div>
            <div className="card">
                <h5>Popup</h5>
                <div className="p-fluid grid formgrid">
                    <div className="field col-12 md:col-4">
                        <label htmlFor="basic">Basic</label>
                        <Calendar id="basic" value={date1} onChange={(e) => setDate1(e.value)} />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="basic">Date Format</label>
                        <Calendar id="basic" value={date2} onChange={(e) => setDate2(e.value)} dateFormat="mm-dd-yy" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="icon">Icon</label>
                        <Calendar id="icon" value={date3} onChange={(e) => setDate3(e.value)} showIcon />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="minmax">Min / Max</label>
                        <Calendar id="minmax" value={date4} onChange={(e) => setDate4(e.value)} minDate={minDate} maxDate={maxDate} readOnlyInput />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="disableddays">Disabled Days</label>
                        <Calendar id="disableddays" value={date5} onChange={(e) => setDate5(e.value)} disabledDates={invalidDates} disabledDays={[0, 6]} readOnlyInput />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="multiple">Multiple</label>
                        <Calendar id="multiple" value={dates1} onChange={(e) => setDates1(e.value)} selectionMode="multiple" readOnlyInput />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="range">Range</label>
                        <Calendar id="range" value={dates2} onChange={(e) => setDates2(e.value)} selectionMode="range" readOnlyInput />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="buttonbar">Button Bar</label>
                        <Calendar id="buttonbar" value={date6} onChange={(e) => setDate6(e.value)} showButtonBar />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="time24">Time / 24h</label>
                        <Calendar id="time24" value={date7} onChange={(e) => setDate7(e.value)} showTime showSeconds />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="time12">Time / 12h</label>
                        <Calendar id="time12" value={date8} onChange={(e) => setDate8(e.value)} timeOnly hourFormat="12" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="monthpicker">Month Picker</label>
                        <Calendar id="monthpicker" value={date9} onChange={(e) => setDate9(e.value)} view="month" dateFormat="mm/yy" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="yearpicker">Year Picker</label>
                        <Calendar id="yearpicker" value={date10} onChange={(e) => setDate10(e.value)} view="year" dateFormat="yy" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="multiplemonths">Multiple Months</label>
                        <Calendar id="multiplemonths" value={date11} onChange={(e) => setDate11(e.value)} numberOfMonths={3}/>
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="datetemplate">Date Template</label>
                        <Calendar id="datetemplate" value={date12} onChange={(e) => setDate12(e.value)} dateTemplate={dateTemplate} />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="touchUI">TouchUI</label>
                        <Calendar id="touchUI" value={date13} onChange={(e) => setDate13(e.value)} touchUI />
                    </div>
                </div>

                <h5>Inline</h5>
                <Calendar value={date14} onChange={(e) => setDate14(e.value)} inline showWeek />
                <button onClick={submit}>click</button>
            </div>
        </div>
    );
}
                 

export default CalendarDemo;