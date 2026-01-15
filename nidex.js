<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<title>KAMIKUNG SHOP</title>

<!-- FONT -->
<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;600;700&display=swap" rel="stylesheet">

</head>

<body style="margin:0;background:#0b0b12;font-family:'Kanit',Arial;color:#111;">

<!-- HEADER -->
<div style="
width:100%;
background:linear-gradient(90deg,#050008,#1a0025,#050008);
padding:18px 50px;
box-shadow:0 6px 25px rgba(105,12,117,.6);
border-bottom:2px solid rgb(105,12,117);
">
  <div style="display:flex;align-items:center;gap:22px;">
    <img src="https://cdn.discordapp.com/attachments/1171429919704743948/1445755610833354783/quality_restoration_20251129005057765.jpg?ex=69698816&is=69683696&hm=73e64cf7edfa63ef986dfb9a678676d7f146a47ac4a1d34edc6150453dab6496&"
         style="width:72px;border-radius:12px;border:1px solid rgb(105,12,117);">
    <span style="
      font-size:44px;
      font-weight:700;
      color:rgb(170,100,220);
      text-shadow:0 0 18px rgba(170,100,220,.9);
      letter-spacing:2px;
    ">
      KAMIKUNG SHOP
    </span>
  </div>
</div>
<a href="https://discord.gg/jmpua9wGS3" target="_blank"
     style="
       position:absolute;
       top:22px;
       right:40px;
     ">
    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111370.png"
         style="
           width:60px;
           height:60px;
           cursor:pointer;
           filter:drop-shadow(0 0 8px rgba(88,101,242,.8));
         ">
  </a>

</div>

<!-- PRODUCT GRID -->
<div style="
padding:50px 30px;
display:grid;
grid-template-columns:repeat(5,260px);
gap:30px;
justify-content:center;
">

<!-- PRODUCT CARD TEMPLATE -->
<!-- 1 -->
<div style="
background:#ffffff;
border-radius:18px;
padding:16px;
box-shadow:0 10px 30px rgba(0,0,0,.45);
text-align:center;
transition:.25s;
">
  <img src="https://cdn.discordapp.com/attachments/1171429919704743948/1444014171090845696/Box.png?ex=6969c9be&is=6968783e&hm=855343491f07a76e792fe1ae69d5c1ca8f88792bfbac75af497aaf667c45edd7&"
       style="width:170px;height:170px;object-fit:cover;border-radius:14px;margin-bottom:10px;">
  <div style="font-weight:600;font-size:16px;margin-bottom:6px;">
    [ BOX ] 1 ผล KITSUNE
  </div>
  <div style="
    margin-bottom:10px;
    background:#1e1e1e;
    color:#fff;
    padding:6px 16px;
    border-radius:30px;
    font-size:14px;
    display:inline-block;
  ">
    ราคา 120฿
  </div>
  <div onclick="openPopup('KITSUNE',
  'https://cdn.discordapp.com/attachments/1171429919704743948/1444014171090845696/Box.png?ex=6969c9be&is=6968783e&hm=855343491f07a76e792fe1ae69d5c1ca8f88792bfbac75af497aaf667c45edd7&',
  '• สุ่มได้ KITSUNE 100%<br>• การรันตี6หมัด<br>• การันตีดาบคู่<br>•การันตีหมวกจก')"
  style="
    background:linear-gradient(135deg,#ffcf70,#ffb300);
    padding:10px;
    border-radius:10px;
    cursor:pointer;
    font-weight:600;
  ">
    ดูรายละเอียด
  </div>
</div>

<!-- 2 -->
<div style="background:#fff;border-radius:18px;padding:16px;box-shadow:0 10px 30px rgba(0,0,0,.45);text-align:center;">
  <img src="https://cdn.discordapp.com/attachments/1171429919704743948/1442185260979982477/file_000000008e8c7207a375985cdb0b31e0.png?ex=6969b9f0&is=69686870&hm=f6066afe2f39df2d380f1243e190a5b675b25d876578073b1bead3f52f599e9d&"
       style="width:170px;height:170px;object-fit:cover;border-radius:14px;margin-bottom:10px;">
  <div style="font-weight:600;font-size:16px;margin-bottom:6px;">[ BOX ] 1 ผล TIGER</div>
  <div style="margin-bottom:10px;background:#1e1e1e;color:#fff;padding:6px 16px;border-radius:30px;font-size:14px;display:inline-block;">ราคา 50฿</div>
  <div onclick="openPopup('TIGER',
  'https://cdn.discordapp.com/attachments/1171429919704743948/1442185260979982477/file_000000008e8c7207a375985cdb0b31e0.png?ex=6969b9f0&is=69686870&hm=f6066afe2f39df2d380f1243e190a5b675b25d876578073b1bead3f52f599e9d&',
  '• การรันตีผลเสือในกล่อง <br>• การันตี6หมัด')"
  style="background:linear-gradient(135deg,#ffcf70,#ffb300);padding:10px;border-radius:10px;cursor:pointer;font-weight:600;">
    ดูรายละเอียด
  </div>
</div>

<!-- 3 -->
<div style="background:#fff;border-radius:18px;padding:16px;box-shadow:0 10px 30px rgba(0,0,0,.45);text-align:center;">
  <img src="https://cdn.discordapp.com/attachments/1171429919704743948/1442184239952040057/file_00000000cb647208b18ba4a490f13a84.png?ex=6969b8fd&is=6968677d&hm=eb1f0294e101e8d3e1a67f9d1e4f2e32edd78dcc3e52b7c1a43bc371f08a2546&"
       style="width:170px;height:170px;object-fit:cover;border-radius:14px;margin-bottom:10px;">
  <div style="font-weight:600;font-size:16px;margin-bottom:6px;">[ BOX ] 1 ผล YETI</div>
  <div style="margin-bottom:10px;background:#1e1e1e;color:#fff;padding:6px 16px;border-radius:30px;font-size:14px;display:inline-block;">ราคา 50฿</div>
  <div onclick="openPopup('YETI',
  'https://cdn.discordapp.com/attachments/1171429919704743948/1442184239952040057/file_00000000cb647208b18ba4a490f13a84.png?ex=6969b8fd&is=6968677d&hm=eb1f0294e101e8d3e1a67f9d1e4f2e32edd78dcc3e52b7c1a43bc371f08a2546&',
  '• การรันตีผลเยติในกล่อง<br>• การันตี6หมัด')"
  style="background:linear-gradient(135deg,#ffcf70,#ffb300);padding:10px;border-radius:10px;cursor:pointer;font-weight:600;">
    ดูรายละเอียด
  </div>
</div>

<!-- 4 -->
<div style="background:#fff;border-radius:18px;padding:16px;box-shadow:0 10px 30px rgba(0,0,0,.45);text-align:center;">
  <img src="https://cdn.discordapp.com/attachments/1171429919704743948/1438360386381418576/1763002175915.jpg?ex=6969a77f&is=696855ff&hm=3025cea4ccec325982fbaa79bfa95b65bb508cc75770240ca456978cdd5a0ac5&"
       style="width:170px;height:170px;object-fit:cover;border-radius:14px;margin-bottom:10px;">
  <div style="font-weight:600;font-size:16px;margin-bottom:6px;">[ BOX ] ไก่ดาบคู่6หมัด</div>
  <div style="margin-bottom:10px;background:#1e1e1e;color:#fff;padding:6px 16px;border-radius:30px;font-size:14px;display:inline-block;">ราคา 50฿</div>
  <div onclick="openPopup('ไก่ดาบคู่',
  'https://cdn.discordapp.com/attachments/1171429919704743948/1438360386381418576/1763002175915.jpg?ex=6969a77f&is=696855ff&hm=3025cea4ccec325982fbaa79bfa95b65bb508cc75770240ca456978cdd5a0ac5&',
  '• การันตีดาบคู่<br>• การันตี6หมัด<br>• สุ่มผลแดง')"
  style="background:linear-gradient(135deg,#ffcf70,#ffb300);padding:10px;border-radius:10px;cursor:pointer;font-weight:600;">
    ดูรายละเอียด
  </div>
</div>

<!-- 5 -->
<div style="background:#fff;border-radius:18px;padding:16px;box-shadow:0 10px 30px rgba(0,0,0,.45);text-align:center;">
  <img src="https://cdn.discordapp.com/attachments/1171429919704743948/1437294594726432778/3_20251022_133747_0002.png?ex=6969bb67&is=696869e7&hm=9c12777cd7889d01dcf140a39344aacfdcec6ca72481fdca793534bb759a020c&"
       style="width:170px;height:170px;object-fit:cover;border-radius:14px;margin-bottom:10px;">
  <div style="font-weight:600;font-size:16px;margin-bottom:6px;">[ BOX ] สุ่มคิสึเนะในกล่อง </div>
  <div style="margin-bottom:10px;background:#1e1e1e;color:#fff;padding:6px 16px;border-radius:30px;font-size:14px;display:inline-block;">ราคา 10฿</div>
  <div onclick="openPopup('สุ่มผลแดง',
  'https://cdn.discordapp.com/attachments/1171429919704743948/1437294594726432778/3_20251022_133747_0002.png?ex=6969bb67&is=696869e7&hm=9c12777cd7889d01dcf140a39344aacfdcec6ca72481fdca793534bb759a020c&',
  '• มีโอกาสได้ผลคิสึเนะในกล่อง<br>• สุ่มได้แน่นอน<br>• ราคาถูก')"
  style="background:linear-gradient(135deg,#ffcf70,#ffb300);padding:10px;border-radius:10px;cursor:pointer;font-weight:600;">
    ดูรายละเอียด
  </div>
</div>

</div>

<!-- POPUP -->
<div id="popup" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,.7);justify-content:center;align-items:center;">
  <div style="background:#fff;padding:24px;width:360px;border-radius:18px;text-align:center;">
    <h3 id="popupTitle" style="margin-top:0;"></h3>
    <img id="popupImg" style="width:210px;border-radius:14px;margin:12px 0;">
    <div id="popupText" style="text-align:left;line-height:1.8;font-size:15px;"></div>
    <div onclick="closePopup()" style="margin-top:18px;background:#222;color:#fff;padding:10px;border-radius:10px;cursor:pointer;">
      ปิด
    </div>
  </div>
</div>

<script>
function openPopup(title,img,text){
  popup.style.display="flex";
  popupTitle.innerText=title;
  popupImg.src=img;
  popupText.innerHTML=text;
}
function closePopup(){
  popup.style.display="none";
}
</script>

</body>
</html>
