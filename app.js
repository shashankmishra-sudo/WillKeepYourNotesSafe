const addnode = document.querySelector('#addbtn');
// let showWords = document.querySelector("#Show-word");

addnode.addEventListener(
    "click",
    function () {
        addNewNode()
    }

)


const saveNode = () => {
    // const notes=document.querySelectorAll(".node textarea");
    const notes = document.querySelectorAll("#nodeId textarea");
    // console.log(notes);
    var data = [];
    // console.log(data);
    notes.forEach(
        (node) => {
            data.push(node.value);
        }
    )
    if (data.length === 0) {
        localStorage.removeItem("notes");
    }
    else {
        localStorage.setItem("notes", JSON.stringify(data));
    }
    console.log(data);

}


/* <div class="node">
            <div class="tool">
                <i class="fa-solid fa-floppy-disk"></i>
                <i class="fa-solid fa-trash-can"></i>
            </div>
            <textarea>

            </textarea>
        </div> */


const addNewNode = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("node");

    note.id = "nodeId";

    note.innerHTML = `
    
    <div class="tool">
                <i class="save fa-solid fa-floppy-disk"></i>
                <i class="tras fa-solid fa-trash-can"></i>
            </div>
            <textarea id="tarea">
                ${text}
            </textarea>
    `;
    note.querySelector(".tras").addEventListener(
        "click",
        function () {
            note.remove();
            saveNode();
        }
    )

    note.querySelector("#tarea").addEventListener(
        "focusout",
        function () {
            saveNode();
        }
    )

    note.querySelector(".save").addEventListener(
        "click",
        function () {
            saveNode();
        }
    )
    main.appendChild(note);
}

(
    function () {
        var lsnotes = JSON.parse(localStorage.getItem("notes"));
        if (lsnotes === null) {
            addNewNode();
        }
        else {
            lsnotes.forEach(
                (lsnote) => {
                    addNewNode(lsnote);
                }
            )
        }

    }
)()