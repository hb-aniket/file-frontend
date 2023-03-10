import React, { useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'

export default function TargetPaths() {
    const { register, control } = useFormContext()
    const [totalTarget, setTotalTarget] = useState([1])
    const { remove } = useFieldArray({
        control,
        name: `TargetSettings.TargetPaths`

    });

    const addClick = () => {
        setTotalTarget([...totalTarget, 1])
    }


    const delClick = (index) => {
        setTotalTarget([...totalTarget.slice(0, index), ...totalTarget.slice(index + 1)]);
        remove(index)

    }
    return (
        <div className="pathcontainer d-flex flex-wrap overflow-y-scroll" style={{ maxHeight: '200px' }}>
            {totalTarget.map((v, i) => {
                return (
                    <>
                        <div className="col-sm-10">
                            <div class="col-auto">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id={i} placeholder="TargetPaths" name="TargetPaths" {...register(`TargetSettings.TargetPaths.${i}`, { required: true })} />
                                    <label for="floatingInput">Target Paths</label>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-2" >
                            <button type="button" className="btn" onClick={() => { i >= 1 ? delClick(i) : addClick() }}>
                                {i >= 1 ? <i className="fa-sharp fa-solid fa-trash-can"></i> : <i className="fa-sharp fa-solid fa-plus"></i>}
                            </button>

                        </div>
                    </>
                )
            })}
        </div>
    )

}
