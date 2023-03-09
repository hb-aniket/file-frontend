import React from 'react'
import { useFormContext } from 'react-hook-form'

export default function InputFeilds(props){
    const { register } = useFormContext()
    return (
        
            <div className="col-sm-10">
                <div class="col-auto">
                    <div class="form-floating mb-3">
                        <input type={props.customType} class="form-control" id="2 " placeholder= {props.customName} name={props.customName} defaultValue={props.defaultvalue} {...register(`TargetSettings.TargetPaths.${props.id}`, {required:true})}/>
                        <label for="floatingInput">{props.customName}</label>
                    </div>
                </div>
            </div>
    )
}
