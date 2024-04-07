import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { IoClipboardOutline } from "react-icons/io5";
import { BsClipboard2CheckFill } from "react-icons/bs";

function SplinedVBA() {
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
  
  ' Create the shaft sketch
  Dim swSketcher As SldWorks.Sketcher = swModel.Extension.CreateSketcher()
  swSketcher.AddEntities(4)
  swSketcher.SetFixedDirection(False, 0#, 0#, 0#)
  swSketcher.SetCurve(Array(0#, 0#, 0#, 50#, 0#, 0#))
  Dim swSketchSegShaft As SldWorks.SketchSegment = Nothing
  Dim swSketchSegExitShaft As Boolean = swSketcher.ExitSketch()
  
  ' Revolve the shaft sketch
  Dim swFeatRevolved As SldWorks.RevolutionFeature
  swFeatRevolved = swModel.Extension.RevolveBossCut(swSketchSegShaft, False, 0.0, 360.0)
  
  ' Create the spline sketch
  swSketcher = swModel.Extension.CreateSketcher()
  swSketcher.SetCurve(Array(45#, 5#, 0#, 50#, 5#, 0#, 50#, -5#, 0#, 45#, -5#, 0#, 45#, 5#, 0#))
  Dim swSketchSegSpline As SldWorks.SketchSegment = Nothing
  Dim swSketchSegExitSpline As Boolean = swSketcher.ExitSketch()
  
  ' Create the spline feature
  Dim swFeatSpline As SldWorks.SplineFeature
  swFeatSpline = swModel.Extension.AddSpline(swSketchSegSpline, 0.0, 0.0, 40.0, False, False, True, False, False, False, False, False, False, False, False)
  
  ' Show the part in the graphics window
  swModel.ShowNamedView2("*Front", 7)
  swModel.ViewZoomtofit2()`;
  return (
    <div className="mockup-code">
      <div className="flex items-center">
        <p className="flex-1 ml-5">Splined Shaft VBA Code</p>
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

export default SplinedVBA;
