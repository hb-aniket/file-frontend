import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



export default function TargetFileTypeFilter() {

  const data = {
    "TargetFileTypes": { //Define file type and file extensions
      "Photo": ["HEIC", "JPEG", "JPG", "PNG"],
      "Video": ["3G2", "3GP", "ASF", "AVI", "DAT", "FLV", "H264", "M4V", "MKV", "MOV", "MP4", "MPG", "MPEG", "RM", "SWF", "VOB", "WEBM", "WMV"],
      "Audio": ["AIF", "CDA", "MID", "MIDI", "MP3", "MPA", "OGG", "WAV", "WAVE", "WMA", "WPL", "AAC", "AMR", "M4A"],
      "Compressed": ["7Z", "ARJ", "DEB", "PKG", "RAR", "RPM", "TAR.GZ", "Z", "ZIP"],
      "ISO": ["DMG", "ISO", "NRG"],
      "Office": ["CSV", "DOC", "DOCX", "DOTX", "ODS", "ODT", "PDF", "PPS", "PPT", "PPTX", "RTF", "TEX", "TXT", "WPD", "XLS", "XLSM", "XLSX"],
      "Graphics": ["CDR", "GIF", "BMP", "ICO", "PS", "PSD", "SVG", "TIF", "TIFF", "WMF", "EPS", "TTF", "PFB", "PFM", "FON"]

    }
  }
  const [typeData, setTypeData] = useState(data.TargetFileTypes)
  const [addextension, setAddExtension] = useState("")
  const [stateRef, setStateRef] = useState(false)
  const [category, setCategory] = useState("")
  const [categoryData, setCategoryData] = useState("")





  const addClick = (key) => {
    if (addextension !== "") {

      let xyz = typeData[key];
      let abc = typeData;
      xyz.push(addextension)
      console.log(abc);
      setTypeData(typeData)
      setStateRef(true)
    }
  }

  const deleteClick = (v, i) => {
    console.log(v, i)
    // let xyz = typeData[v]
    typeData[v] = typeData[v].filter((value, index) => index !== i);
    setTypeData(typeData)
    setStateRef(true)
  }
 
  const addCategory = () => {
  
    let state = true;
    if (category !== "") {
      for (const x in typeData) {
        if (x.toUpperCase() == category.toUpperCase()) {
          state = false
          if (!state) {
            console.log("already category")
            break
          }
        }
      }
      state = true
      if (state) {
        let arr = categoryData.split(',')
        let finalarr = []

            checkArryVal(finalarr,arr)


        // arr.filter(value => {
        //   for (const x in typeData) {
        //     checkArryVal(x,finalarr,value)
        //     if (!typeData[x].includes(value.toUpperCase())) {
        //       if(!finalarr.includes(value.toUpperCase())){
        //         finalarr.push(value.toUpperCase())          
        //        } else {
        //        finalarr.pop(value.toUpperCase());
        //        }            
        //     }
        //     else{
        //       console.log(value +" is already in "+x)

        //     }
        //   }})

          
          console.log(finalarr,"final arr")
          setTypeData({...typeData,[category]:finalarr})
          setStateRef(true)
          finalarr=[]

      



        }
      }
  }

  const checkArryVal = (finalarr,arr) => {
   console.log(arr)
   let newwarr = arr
   console.log(newwarr)
   
   if(newwarr.length<0){
    newwarr.filter(value => {
      for (const x in typeData) {
        checkArryVal(x,finalarr,value)
        if (!typeData[x].includes(value.toUpperCase())) {
          if(!finalarr.includes(value.toUpperCase())){
            finalarr.push(value.toUpperCase())          
           } else {
           finalarr.pop(value.toUpperCase());
           }            
        }
        else{
          console.log(value +" is already in "+x)

        }
      }})



   }
   
    return finalarr
  }



  useEffect(() => {
    if (stateRef) {
      setCategory("")
      setCategoryData("")
      setAddExtension("")
      setStateRef(false)
    }
  }, [stateRef])


  return (
    <>

      <button type="button" class="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#addCategoty" >Add Categorey</button>
      <hr />
      <div className="d-flex flex-wrap">
        {Object.keys(typeData).map((key) =>

          <div class="dropdown m-2 ">
            <button type="button" class="btn btn-primary dropdown-toggle mb-2" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
              {key}
            </button>

            <div class="dropdown-menu dropdown-menu-end dropdown-menu-lg-end dropdown-menu-end dropdown-menu-lg-start p-4 overflow-y-scroll" style={{ maxHeight: '300px' }}>
              <div class="input-group-sm d-flex align-items-center justify-content-between">
                <input type="text" class="form-control me-2" id="floatingInput" placeholder={key} onChange={(e) => { setAddExtension(e.target.value) }} value={addextension} />
                <i type="button" onClick={() => { addClick(key) }} className="fa-sharp fa-solid fa-plus"></i>
              </div>

              {typeData[key].map((v, i) => {
                return (
                  <>
                    <div className="d-flex align-items-center justify-content-between  " >
                      <label htmlFor={v} className="m-2">{v}</label>
                      <i type="button" onClick={() => { deleteClick(key, i) }} className="fa-sharp fa-solid fa-trash-can"></i>
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        )}
      </div>

      <div class="modal fade" id="addCategoty" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Add Category</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">


              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="Category" onChange={(e) => { setCategory(e.target.value) }} value={category} />
                <label for="floatingInput">Category</label>
              </div>

              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="Category" onChange={(e) => { setCategoryData(e.target.value) }} value={categoryData} />
                <label for="floatingInput">Extension</label>
                <spam className="muted">Comma ' , ' seprated add multiple extension</spam>
              </div>



            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onClick={() => { addCategory() }}>Add Category</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
