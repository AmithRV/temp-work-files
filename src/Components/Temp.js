
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import 'primeflex/primeflex.css';
import { InputText } from 'primereact/inputtext';


function Temp(){
    return (
        <div>
            <div className="card">
                <div className="grid p-fluid">
                    <div className="field col-12 md:col-4">
                        <label htmlFor="from">From</label>
                        <InputText id="from" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="to">To</label>
                        <InputText  />
                    </div>
                </div>
                <div className="grid p-fluid">
                    <div className="field col-12 md:col-8">
                        <label htmlFor="remark">Remark</label>
                        <InputText/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Temp;