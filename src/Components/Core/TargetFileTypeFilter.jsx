import React, { useEffect, useState } from 'react'

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
  const [addextension,setAddExtension]=useState("")
  const[stateRef,setStateRef]=useState(false)
const addClick=(key)=>{
  let xyz = typeData[key];
  let abc = typeData;
  xyz.push(addextension)
  console.log(abc);
  setTypeData(typeData)
  setStateRef(true)
}


useEffect(() => {
  if(stateRef){
    setAddExtension("")
    setStateRef(false)}
}, [stateRef])


  return (
    <>
      {Object.keys(typeData).map((key) => <div class="dropdown m-2">
        <button type="button" class="btn btn-primary dropdown-toggle mb-2" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
          {key}
        </button>

        <div class="dropdown-menu dropdown-menu-end dropdown-menu-lg-end dropdown-menu-end dropdown-menu-lg-start p-4 overflow-y-scroll" style={{ maxHeight: '300px' }}>
          <div class="input-group-sm d-flex align-items-center justify-content-between">
            <input type="text" class="form-control me-2" id="floatingInput" placeholder={key} onChange={(e)=>{setAddExtension(e.target.value)}} value={addextension}/>
            <i type="button" onClick={() => {addClick(key)}}className="fa-sharp fa-solid fa-plus"></i>
          </div>

          {typeData[key].map((v, i) => {
            return (
              <>
                <div className="d-flex align-items-center justify-content-between  " >
                  <label htmlFor={v} className="m-2">{v}</label>
                  <i type="button" onClick={() => alert(i)} className="fa-sharp fa-solid fa-trash-can"></i>
                </div>
              </>
            )
          })}
        </div>
      </div>
      )}
    </>
  )
}
