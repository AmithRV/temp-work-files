import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

function FormValidaton(){
    const handlesubmit =(e)=>{
        console.log('submited')
    }
    return(
        <div>
            <form onClick={handlesubmit}>
                <div className="card">
                    <div className="row1">
                        <div className="field1">
                                <label htmlFor="from">From</label>
                                <InputText className="input-to" required  />
                        </div>
                        <div className="field2">
                                <label htmlFor="to">To</label>
                                <InputText className="input-to" required  />
                        </div>
                    </div>

                    <div className="field3">
                        <label htmlFor="remark">Remark</label>
                        <InputText className="input-remark" required />
                    </div>

                    <div className="field3">
                        <Button type="submit" value="submit" label="submit" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormValidaton;