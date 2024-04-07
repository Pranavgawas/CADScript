import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { IoClipboardOutline } from "react-icons/io5";
import { BsClipboard2CheckFill } from "react-icons/bs";

function FlangeVBA() {
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
  
  ' Create the hub sketch
  Dim swSketcher As SldWorks.Sketcher = swModel.Extension.CreateSketcher()
  swSketcher.AddEntities(4)
  swSketcher.SetFixedDirection(False, 0#, 0#, 0#)
  swSketcher.SetCurve(Array(0#, 0#, 0#, 20#, 0#, 0#))
  Dim swSketchSegHub As SldWorks.SketchSegment = Nothing
  Dim swSketchSegExitHub As Boolean = swSketcher.ExitSketch()
  
  ' Revolve the hub sketch
  Dim swFeatRevolved As SldWorks.RevolutionFeature
  swFeatRevolved = swModel.Extension.RevolveBossCut(swSketchSegHub, False, 0.0, 360.0)
  
  ' Create the flange sketch
  swSketcher = swModel.Extension.CreateSketcher()
  swSketcher.SetCurve(Array(0#, 25#, 0#, 25#, 25#, 0#, 25#, -25#, 0#, 0#, -25#, 0#, 0#, 25#, 0#))
  Dim swSketchSegFlange As SldWorks.SketchSegment = Nothing
  Dim swSketchSegExitFlange As Boolean = swSketcher.ExitSketch()
  
  ' Extrude the flange sketch
  Dim swFeatExtruded As SldWorks.ExtrudeFeature
  swFeatExtruded = swModel.Extension.ExtrudeBoossCut(swSketchSegFlange, 0.0, 0.0, 10.0, 2.1, False, False, True, True, False, False, 0.0, 0.0, 0.0, 0.0, 0.0)
  
  ' Create the bolt holes
  For angle As Double = 0 To 360 Step 45
      swSketcher = swModel.Extension.CreateSketcher()
      swSketcher.SetCurve(Array(35#, 0#, 0#, 35#, 0#, 0#))
      swSketcher.SketchRotate(angle, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0)
      Dim swSketchSegHole As SldWorks.SketchSegment = Nothing
      Dim swSketchSegExitHole As Boolean = swSketcher.ExitSketch()
  
      Dim swFeatCutExtrude As SldWorks.ExtrudeFeature
      swFeatCutExtrude = swModel.Extension.ExtrudeCut(swSketchSegHole, 0.0, 0.0, 15.0, 2.1, False, False, True, True, False, False, 0.0, 0.0, 0.0, 0.0, 0.0)
  Next angle
  
  ' Show the part in the graphics window
  swModel.ShowNamedView2("*Front", 7)
  swModel.ViewZoomtofit2()`;
  return (
    <div className="mockup-code">
      <div className="flex items-center">
        <p className="flex-1 ml-5">Flange Shaft VBA Code</p>
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

export default FlangeVBA;
