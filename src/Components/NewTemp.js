import { Formik, useFormik } from 'formik';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Card } from 'primereact/card'
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
function NewTemp() {
    const formik = useFormik({
        initialValues: {
            name: '',
            from_date:null,
            to_date:null
        },
        validate: (data) => {
            let errors = {};

            if (!data.name) {
                errors.name = 'Name is required.';
            }
            if(data.from_date===null){
                errors.from_date='date required'
            }
            if(data.to_date===null){
                errors.to_date='date required'
            }

            return errors;
        },
        onSubmit: (data) => {
            console.log(data)
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    return (
        <div className="form-demo">
            <Card>
                <form onSubmit={formik.handleSubmit} className="p-fluid"> 
                    <div className="field">
                        <span className="p-float-label">
                            <InputText id="name" name="name" value={formik.values.name} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('name') })} />
                            <label htmlFor="name" className={classNames({ 'p-error': isFormFieldValid('name') })}>Name*</label>
                        </span>
                        {getFormErrorMessage('name')}
                    </div>

                    <div className="field">
                        <span className="p-float-label">
                            <Calendar id="from_date" name="from_date" value={formik.values.from_date} onChange={formik.handleChange} dateFormat="dd/mm/yy" mask="99/99/9999" showIcon />
                            <label htmlFor="from_date" className={classNames({ 'p-error': isFormFieldValid('from_date') })}>From date</label>
                        </span>
                        {getFormErrorMessage('from_date')}
                    </div>

                    <div className="field">
                        <span className="p-float-label">
                            <Calendar value={formik.values.to_date} onChange={formik.handleChange} dateFormat="dd/mm/yy" mask="99/99/9999" showIcon />
                            <label className={classNames({ 'p-error': isFormFieldValid('to_date') })}>To date</label>
                        </span>
                        {getFormErrorMessage('to_date')}
                    </div>

                    <Button type="submit" label="Submit" className="mt-2" />
                </form>
            </Card>
        </div>
    );
}

export default NewTemp;