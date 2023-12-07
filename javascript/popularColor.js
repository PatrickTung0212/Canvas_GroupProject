// 將使用者的顏色數據轉換為JSON字符串
const userColors = ['white', 'white', 'black', 'white', 'pink', 'black', 'white', 'pink', 'white', 'black', 'black', 'pink', 'white'];
const jsonUserColors = JSON.stringify(userColors);

// 將JSON字符串寫入文本文件
function saveColorsToFile() {
    const blob = new Blob([jsonUserColors], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'user_colors.txt';
    a.click();

    URL.revokeObjectURL(url);
}

// 從文本文件讀取數據
function loadColorsFromFile(file) {
    const reader = new FileReader();
    reader.onload = function (event) {
        const loadedColors = JSON.parse(event.target.result);
        console.log(loadedColors);
    };
    reader.readAsText(file);
}

// 測試保存和讀取數據
saveColorsToFile();

// 假設使用者重新加載網頁後，選擇了一個新的數據文件
// const fileInput = document.getElementById('fileInput');
// fileInput.addEventListener('change', function(event) {
//   const selectedFile = event.target.files[0];
//   loadColorsFromFile(selectedFile);
// });

const userColorsElement = document.getElementById('popularColor');
userColorsElement.textContent = jsonUserColors;