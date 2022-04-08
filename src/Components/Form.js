import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import { InputText } from 'primereact/inputtext';
import './form.css';

function Form(){
    return(
        <div>
            <div className="card">
                <div className="row1">
                    <div className="field1">
                            <label htmlFor="from">From</label>
                            <InputText className="input-from"  />
                    </div>
                    <div className="field2">
                            <label htmlFor="to">To</label>
                            <InputText className="input-to"  />
                    </div>
                </div>

                <div className="field3">
                    <label htmlFor="remark">Remark</label>
                    <InputText className="input-remark" />
                </div>
            </div>
        </div>
    );
}

export default Form;