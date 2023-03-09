import React, { useState } from 'react'
import './TargetSettings.css'
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import * as mdb from 'mdb-ui-kit';
import InputFeilds from '../Core/InputFeilds';


export default function TargetSettings() {
    const [totalTarget, setTotalTarget] = useState([1])
    const { register, getValues, control,handleSubmit,watch } = useForm(
        
           { TargetSettings:{
                "TargetPaths": [],

            }}
        );

    const { fields, remove,append} = useFieldArray({
        control,
        name:`TargetSettings.TargetPaths`

    });

    const addClick = () => {
        setTotalTarget([...totalTarget, 1])
    }


    const delClick = (index) => {
        setTotalTarget([...totalTarget.slice(0, index), ...totalTarget.slice(index+1)]);
        remove(index)

    }
    const onSubmit = data => {
    console.log(JSON.stringify(data));
    }
    
    
    
    


    return (


        <section class="intro">
            <div class="mask d-flex align-items-center h-100 gradient-custom">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 col-lg-9 col-xl-7">
                            <div class="card">
                                <div class="card-body p-5 p-md-5">
                                    <h3 class="mb-4 pb-2">FILE</h3>
                                    <hr class="my-4"></hr>
                                    <FormProvider{...{ register, getValues, control,handleSubmit,watch }}>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="row g-3 text-start">
                                                <div className="pathcontainer d-flex flex-wrap overflow-y-scroll"style={{maxHeight: '200px'}}>
                                                {totalTarget.map((v, i) => {
                                                    return (
                                                        <>
                                                            <InputFeilds
                                                                customType="Text"
                                                                customName="TargetPaths"
                                                                id={i}
                                                            />

                                                            <div className="col-sm-2" >
                                                                <button type="button" className="btn" onClick={() => { i >= 1 ? delClick(i) : addClick() }}>
                                                                    {i >= 1 ? <i className="fa-sharp fa-solid fa-trash-can"></i> : <i className="fa-sharp fa-solid fa-plus"></i>}
                                                                </button>

                                                            </div>
                                                        </>
                                                    )
                                                })}
                                                </div>
                                               
                                                <button class="btn btn-outline-dark" type="submit" >submit</button>
                                            </div>
                                        </form>
                                    </FormProvider>



                                    {/* <div className="col-sm-10">
                                                <div class="col-auto">
                                                    <div class="form-floating mb-3">
                                                        <input type="email" class="form-control" id="floatingInput" placeholder="TargetPaths" onChange={(e) => { setUploadedFilese.target.v }} />
                                                        <label for="floatingInput">Target Paths</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2 align-self-stretch" >
                                                <button class="btn btn-outline-dark" type="button" onClick={addclick}>Add Path</button>

                                            </div>
                                            <div className="uploaded-files-list">
                                                {uploadedFiles.map(file => (
                                                    <div >
                                                        {file.name}
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="col-sm-6">
                                                <div class="col-auto">
                                                    <div class="form-floating mb-3">
                                                        <input type="email" class="form-control" id="floatingInput" placeholder="TargetPaths" />
                                                        <label for="floatingInput">Target Paths</label>
                                                    </div>
                                                </div>



                                            </div>

                                        </div>
                                    </form> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>







    )
}
