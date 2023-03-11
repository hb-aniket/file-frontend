import React, { useEffect, useState } from 'react'
import './TargetSettings.css'
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import TargetPaths from '../Core/TargetPaths';
import TargetIgnorePaths from '../Core/TargetIgnorePaths';
import TargetFileTypeFilter from '../Core/TargetFileTypeFilter';
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


export default function TargetSettings() {
  const { register, getValues, control, handleSubmit, watch, resetField, setValue } = useForm(
    {
      TargetSettings: {
        "TargetPaths": [],
        "TargetIgnorePaths": null,
        "TargetFileTypeFilter": false

      }
    }
  );
  const [ignorePathsToggle, setIgnorePathsToggle] = useState(false)
  const [fileTypeFilterToggle, setFileTypeFilterToggle] = useState(false)



  useEffect(() => {
    resetField("TargetSettings.TargetIgnorePaths")
    if (!ignorePathsToggle) {
      setValue('TargetSettings.TargetIgnorePaths', null)
    }
  }, [resetField, ignorePathsToggle, setValue])


  useEffect(() => {

    setValue('TargetSettings.TargetFileTypeFilter', fileTypeFilterToggle)

  }, [fileTypeFilterToggle])

  console.log(watch())

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
                  <FormProvider{...{ register, getValues, control, handleSubmit, watch }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="row g-3 text-start">
                        <TargetPaths />
                        <div className="col-sm-10 d-flex mt-3 me-3">
                          <label class="form-check-label">Target Ignore Paths</label>
                          <div class="form-check form-switch ms-3">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={(e) => { setIgnorePathsToggle(e.target.checked) }} />
                            {ignorePathsToggle ? (<><label class="muted ms-2">True</label></>) : (<label class="muted ms-2">False</label>
                            )}
                          </div>
                        </div>
                        {ignorePathsToggle ? (<><TargetIgnorePaths /></>) : (<></>)}


                        <div className="col-sm-10 d-flex mt-3 me-3">
                          <label class="form-check-label">Target FileType Filter</label>
                          <div class="form-check form-switch ms-3">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={(e) => { setFileTypeFilterToggle(e.target.checked) }} />
                            {fileTypeFilterToggle ? (<><label class="muted ms-2">True</label></>) : (<label class="muted ms-2">False</label>
                            )}
                          </div>
                        </div>
                        {/* <div className="d-flex flex-wrap"><TargetFileTypeFilter/></div> */}
                        {!fileTypeFilterToggle ? (<>  <div className=""><TargetFileTypeFilter/></div></>) : (<></>)}
                  
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
