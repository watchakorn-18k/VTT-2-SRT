let allowDrop = (event) => {
    event.preventDefault();
};

let drop = (event) => {
    event.preventDefault();
    let file = event.dataTransfer.files[0];
    let reader = new FileReader();
    reader.onload = function () {
        let vttText = reader.result;
        let srtText = vttToSrt(vttText);
        let choosFile = document.getElementById('file-input-name');
        downloadSrtFile(srtText, file.name);
    };
    reader.readAsText(file);
};

let convertFile = (event) => {
    event.preventDefault();
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function () {
        let vttText = reader.result;
        let srtText = vttToSrt(vttText);
        downloadSrtFile(srtText, file.name);
    };
    reader.readAsText(file);
};


let vttToSrt = (vttText) => {
    var srtText = "";
    var lines = vttText.split("\n");
    var i = 0;
    let numberline = 1;
    let result = []

    if (lines.includes('Language: en')) {
        for (let i = 0; i < lines.length; i++) {
            lines[i] = lines[i].replace('\r', '\n').replace('.', ',').replace('.', ',');
            if (lines[i].startsWith('00')) {
                result.push(lines.slice(i, i + 2).join('\n') + '\n\n');
            }
        }
        
    } else {
        for (let i = 0; i < lines.length; i++) {
            lines[i] = lines[i].replace('\r', '\n').replace('.', ',').replace('.', ',');
            if (lines[i].startsWith('00')) {
                result.push(lines.slice(i, i + 2).join('') + '\n\n');
            }
        }
    }
    console.log(lines);

    // while (i < result.length) {
    //     if (result[i].indexOf("-->") !== -1) {
    //         // this is a timing line
    //         var timing = result[i].split(" --> ");
    //         var start = timing[0].replace(".", ",");
    //         var end = timing[1].replace(".", ",");
    //         i++;
    //         var text = "";
    //         while (i < result.length && result[i] !== "") {
    //             text += result[i] + "\r";
    //             i++;
    //         }
    //         srtText += numberline + '\n' + start + " --> " + end + "\n" + text + "\n";
    //         numberline++
    //     }
    //     i++;
    // }
    let resultString = result.join("");
    // console.log(resultString);
    return resultString;
}
let text_dwl = "ดาวน์โหลด";
let downloadSrtFile = (srtText, fileName) => {
    var blob = new Blob([srtText], { type: "text/plain" });
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName.replace(".vtt", ".srt");
    link.classList.add("bg-blue-500", "text-white", "py-2", "px-4", "rounded-lg", "hover:bg-blue-600", "cursor-pointer", "text-center", "mx-auto");
    link.id = "download-link"
    link.innerHTML = text_dwl;
    document.getElementById("downloadLinkContainer").appendChild(link);
}
let changeLanguage = (lang) => {
    if (lang === 'en') {
        document.getElementById('title-name').innerHTML = 'Convert .vtt to .srt';
        document.getElementById('file-input-name').innerHTML = 'Choose File';
        document.getElementById('download-link').innerHTML = 'Download';
        text_dwl = "Download"
    } else if (lang === 'th') {
        document.getElementById('title-name').innerHTML = 'แปลงไฟล์ .vtt เป็น .srt';
        document.getElementById('file-input-name').innerHTML = 'เลือกไฟล์';
        document.getElementById('download-link').innerHTML = 'ดาวน์โหลด';
        text_dwl = "ดาวน์โหลด"
        document.getElementById('drag_drop_text').innerHTML = 'ลากไฟล์มาวางหรือห';
        document.getElementById('browse_text').innerHTML = 'เรียกดู';
    }
}
let input = document.getElementById("fileInput");
input.addEventListener("dragover", allowDrop);
input.addEventListener("drop", drop);