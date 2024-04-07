import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { IoClipboardOutline } from "react-icons/io5";
import { BsClipboard2CheckFill } from "react-icons/bs";

function UniversalVBA() {
  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };
  const codeString = `' Create a new part document
  Dim swApp As SldWorks.SldWorks = CreateObject("SldWorks.Application")
  Dim swModel As SldWorks.ModelDoc2 = swApp.NewDocument(swDocPART, 0, 0, 0)
  
  ' Create the cross sketch
  Dim swSketcher As SldWorks.Sketcher = swModel.Extension.CreateSketcher()
  swSketcher.SetCurve(Array(0#, 10#, 0#, 20#, 10#, 0#, 20#, -10#, 0#, 0#, -10#, 0#, 0#, 10#, 0#))
  Dim swSketchSegCross As SldWorks.SketchSegment = Nothing
  Dim swSketchSegExitCross As Boolean = swSketcher.ExitSketch()
  
  ' Revolve the cross sketch
  Dim swFeatRevolved As SldWorks.RevolutionFeature
  swFeatRevolved = swModel.Extension.RevolveBossCut(swSketchSegCross, False, 0.0, 360.0)
  
  ' Create the bearing cup sketch
  swSketcher = swModel.Extension.CreateSketcher()
  swSketcher.SetCurve(Array(0#, 25#, 0#, 25#, 25#, 0#, 25#, -25#, 0#, 0#, -25#, 0#, 0#, 25#, 0#))
  Dim swSketchSegBearingCup As SldWorks.SketchSegment = Nothing
  Dim swSketchSegExitBearingCup As Boolean = swSketcher.ExitSketch()
  
  ' Extrude the bearing cup sketch
  Dim swFeatExtruded As SldWorks.ExtrudeFeature
  swFeatExtruded = swModel.Extension.ExtrudeBoossCut(swSketchSegBearingCup, 0.0, 0.0, 10.0, 2.1, False, False, True, True, False, False, 0.0, 0.0, 0.0, 0.0, 0.0)
  
  ' Create the bearing cap sketch
  swSketcher = swModel.Extension.CreateSketcher()
  swSketcher.SetCurve(Array(0#, 30#, 0#, 30#, 30#, 0#, 30#, -30#, 0#, 0#, -30#, 0#, 0#, 30#, 0#))
  Dim swSketchSegBearingCap As SldWorks.SketchSegment = Nothing
  Dim swSketchSegExitBearingCap As Boolean = swSketcher.ExitSketch()
  
  ' Extrude the bearing cap sketch
  Dim swFeatExtruded2 As SldWorks.ExtrudeFeature
  swFeatExtruded2 = swModel.Extension.ExtrudeBoossCut(swSketchSegBearingCap, 0.0, 0.0, 5.0, 2.1, False, False, True, True, False, False, 0.0, 0.0, 0.0, 0.0, 0.0)
  
  ' Show the part in the graphics window
  swModel.ShowNamedView2("*Front", 7)
  swModel.ViewZoomtofit2()`;
  return (
    <div className="mockup-code">
      <div className="flex items-center">
        <p className="flex-1 ml-5">Universal Coupling VBA Code</p>
        {copy ? (
          <button className="py-1 inline-flex items-center gap-1 bg-blue-500 text-white px-2 rounded hover:bg-blue-600 mr-5">
            <BsClipboard2CheckFill className="w-5 h-5" />
            copied!!
          </button>
        ) : (
          <button className="py-1 inline-flex items-center gap-1 bg-blue-500 text-white px-2 rounded hover:bg-blue-600 mr-5" onClick={handleCopy}>
            <IoClipboardOutline className="w-5 h-5" />
            copy code
          </button>
        )}
      </div>

      <pre>
        <code>
          <div className="max-w-[calc(100% - 2rem)] min-w-[25rem] bg-gray-800 rounded-md overflow-hidden">
            <SyntaxHighlighter language="vbscript" style={atomOneDark} customStyle={{ padding: "25px" }}>
              {codeString}
            </SyntaxHighlighter>
          </div>
        </code>
      </pre>
    </div>
  );
}

export default UniversalVBA;
