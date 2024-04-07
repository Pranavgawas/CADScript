import React from "react";

function InfoModal() {
  return (
    <>
      <span data-theme="dark">
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          How to Start
        </button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              <ol>
                <li>
                  <strong>
                    1. To access the VBA Editor in SolidWorks, follow these
                    steps:
                  </strong>
                  <ol type="a">
                    <li>1. Open SolidWorks</li>
                    <li>2. Click on the "Tools" menu at the top</li>
                    <li>3. Select "Macro" from the drop-down menu</li>
                    <li>
                      4.In the Macro dialog box, select "Edit/Run" to open the VBA
                      Editor
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>
                    2. To access the VBA Editor in Catia, follow these steps:
                  </strong>
                  <ol type="a">
                    <li>Open Catia</li>
                    <li>Click on the "Tools" menu at the top</li>
                    <li>Select "Macro" from the drop-down menu</li>
                    <li>
                      In the Macro dialog box, select "Visual Basic for
                      Applications" to open the VBA Editor
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>
                    3. To access the VBA Editor in Inventor, follow these steps:
                  </strong>
                  <ol type="a">
                    <li>Open Inventor</li>
                    <li>Click on the "Tools" menu at the top</li>
                    <li>Select "Macro" from the drop-down menu</li>
                    <li>
                      In the Macro dialog box, select "Visual Basic Editor" to
                      open the VBA Editor
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>
                    4. To access the VBA Editor in AutoCAD, follow these steps:
                  </strong>
                  <ol type="a">
                    <li>Open AutoCAD</li>
                    <li>Click on the "Tools" menu at the top</li>
                    <li>Select "Macro" from the drop-down menu</li>
                    <li>
                      In the Macro dialog box, select "Visual Basic Editor" to
                      open the VBA Editor
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>
                    5. To access the VBA Editor in NX, follow these steps:
                  </strong>
                  <ol type="a">
                    <li>Open NX</li>
                    <li>Click on the "Tools" menu at the top</li>
                    <li>Select "Macro" from the drop-down menu</li>
                    <li>
                      In the Macro dialog box, select "Visual Basic for
                      Applications" to open the VBA Editor
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>
                    6. To access the VBA Editor in Creo, follow these steps:
                  </strong>
                  <ol type="a">
                    <li>Open Creo</li>
                    <li>Click on the "Tools" menu at the top</li>
                    <li>Select "Macro" from the drop-down menu</li>
                    <li>
                      In the Macro dialog box, select "Visual Basic Editor" to
                      open the VBA Editor
                    </li>
                  </ol>
                </li>
              </ol>
            </p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </span>
    </>
  );
}

export default InfoModal;
