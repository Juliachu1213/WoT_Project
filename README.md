# WoT_Final_Project
**物聯網技術與應用期末專案**：在本專案中將透過Sensor與Web，改善公用環境中洗衣機、烘衣機等使用情形不明的問題，透過Camera讀取機器上方的時間信號並以OCR進行辨識，透過Socket方式連接前後端，以P5.js將上述資訊坐視覺化，呈現於網站中，並於其中設計排隊、換人等功能。

### How to Execute the Project ?
1. Clone the project :
```
git clone 
```
2. Install packages in python : numpy、opencv-python、pytesseract
```
pip3 install ...
```
3. Change root to github project and install javascript packages
```
npm install
```
4. Execute Server.js 
```
Node Server.js
```
### Extra Step for MacOS
* Change tesseract_cmd path in OCR.py (if you install pytesseract through homebrew)
```
pytesseract.pytesseract.tesseract_cmd = r'/opt/homebrew/bin/tesseract'
```
### Branch Different
* main : Start countting by pressing button
* branch-OCR : Reload time by using OCR automatically
### Contributors
|組員|系級|學號|工作分配|github|
|-|-|-|-|-|
|莊崴宇|資科碩二|110753117| Socket | [C-WeiYu](https://github.com/C-WeiYu)|
|姚惠馨|資科碩二|110753135| OCR |[Hsin0705](https://github.com/Hsin0705)|
|吳泓澈|資科碩一|111753116|P5.js|[Hunter107306009](https://github.com/Hunter107306009)|
|朱筑筠|資科碩一|111753113|Test|[Juliachu1213](https://github.com/Juliachu1213)|
|李家蓁|資科碩一|111753129|Test|[jennylee0915](https://github.com/jennylee0915)|
|陳琪|國貿四|107301086|Test|[agustdmybae](https://github.com/agustdmybae)|
|李佩璇|教育四|107102041|Test|[claire0201](https://github.com/claire0201)|
|葉晉嘉|資管二甲|109ZU1011|Sensor|[moonshrimp](https://github.com/moonshrimp)|
